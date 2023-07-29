import { Config as GeneratedTypes } from 'payload/generated-types';
import httpStatus from 'http-status';
import { AccessResult } from '../../config/types';
import { PayloadRequest } from '../../express/types';
import sanitizeInternalFields from '../../utilities/sanitizeInternalFields';
import { APIError } from '../../errors';
import executeAccess from '../../auth/executeAccess';
import { BeforeOperationHook, Collection } from '../config/types';
import { Where } from '../../types';
import { afterRead } from '../../fields/hooks/afterRead';
import { deleteCollectionVersions } from '../../versions/deleteCollectionVersions';
import { deleteAssociatedFiles } from '../../uploads/deleteAssociatedFiles';

export type Arguments = {
  depth?: number
  collection: Collection
  where: Where
  req: PayloadRequest
  overrideAccess?: boolean
  showHiddenFields?: boolean
}

async function deleteOperation<TSlug extends keyof GeneratedTypes['collections']>(
  incomingArgs: Arguments,
): Promise<{
  docs: GeneratedTypes['collections'][TSlug][],
  errors: {
    message: string
    id: GeneratedTypes['collections'][TSlug]['id']
  }[]
}> {
  let args = incomingArgs;

  // /////////////////////////////////////
  // beforeOperation - Collection
  // /////////////////////////////////////

  await args.collection.config.hooks.beforeOperation.reduce(async (priorHook: BeforeOperationHook | Promise<void>, hook: BeforeOperationHook) => {
    await priorHook;

    args = (await hook({
      args,
      operation: 'delete',
      context: args.req.context,
    })) || args;
  }, Promise.resolve());

  const {
    depth,
    collection: {
      Model,
      config: collectionConfig,
    },
    where,
    req,
    req: {
      t,
      payload,
      payload: {
        config,
        preferences,
      },
    },
    overrideAccess,
    showHiddenFields,
  } = args;

  if (!where) {
    throw new APIError('Missing \'where\' query of documents to delete.', httpStatus.BAD_REQUEST);
  }

  // /////////////////////////////////////
  // Access
  // /////////////////////////////////////

  let accessResult: AccessResult;

  if (!overrideAccess) {
    accessResult = await executeAccess({ req }, collectionConfig.access.delete);
  }

  const query = await Model.buildQuery({
    where,
    access: accessResult,
    req,
    overrideAccess,
  });

  // /////////////////////////////////////
  // Retrieve documents
  // /////////////////////////////////////

  const docs = await Model.find(query, {}, { lean: true });

  const errors = [];

  /* eslint-disable no-param-reassign */
  const promises = docs.map(async (doc) => {
    let result;

    // custom id type reset
    doc.id = doc._id;
    doc = JSON.stringify(doc);
    doc = JSON.parse(doc);
    doc = sanitizeInternalFields(doc);

    const { id } = doc;

    try {
      // /////////////////////////////////////
      // beforeDelete - Collection
      // /////////////////////////////////////

      await collectionConfig.hooks.beforeDelete.reduce(async (priorHook, hook) => {
        await priorHook;

        return hook({
          req,
          id,
          context: req.context,
        });
      }, Promise.resolve());

      await deleteAssociatedFiles({ config, collectionConfig, doc, t, overrideDelete: true });

      // /////////////////////////////////////
      // Delete document
      // /////////////////////////////////////

      await Model.deleteOne({ _id: id }, { lean: true });

      // /////////////////////////////////////
      // Delete versions
      // /////////////////////////////////////

      if (collectionConfig.versions) {
        deleteCollectionVersions({
          payload,
          id,
          slug: collectionConfig.slug,
        });
      }

      // /////////////////////////////////////
      // afterRead - Fields
      // /////////////////////////////////////

      result = await afterRead({
        depth,
        doc: result || doc,
        entityConfig: collectionConfig,
        overrideAccess,
        req,
        showHiddenFields,
        context: req.context,
      });

      // /////////////////////////////////////
      // afterRead - Collection
      // /////////////////////////////////////

      await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook) => {
        await priorHook;

        result = await hook({
          req,
          doc: result || doc,
          context: req.context,
        }) || result;
      }, Promise.resolve());

      // /////////////////////////////////////
      // afterDelete - Collection
      // /////////////////////////////////////

      await collectionConfig.hooks.afterDelete.reduce(async (priorHook, hook) => {
        await priorHook;

        result = await hook({
          req,
          id,
          doc: result,
          context: req.context,
        }) || result;
      }, Promise.resolve());

      // /////////////////////////////////////
      // 8. Return results
      // /////////////////////////////////////

      return result;
    } catch (error) {
      errors.push({
        message: error.message,
        id: doc.id,
      });
    }
    return null;
  });

  const awaitedDocs = await Promise.all(promises);

  // /////////////////////////////////////
  // Delete Preferences
  // /////////////////////////////////////

  if (collectionConfig.auth) {
    preferences.Model.deleteMany({
      user: { in: docs.map(({ id }) => id) },
      userCollection: collectionConfig.slug,
    });
  }
  preferences.Model.deleteMany({ key: { in: docs.map(({ id }) => `collection-${collectionConfig.slug}-${id}`) } });

  return {
    docs: awaitedDocs.filter(Boolean),
    errors,
  };
}

export default deleteOperation;
