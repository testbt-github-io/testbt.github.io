import { Config as GeneratedTypes } from 'payload/generated-types';
import { Payload } from '../../../payload';
import { Document, Where } from '../../../types';
import { PaginatedDocs } from '../../../mongoose/types';
import { TypeWithVersion } from '../../../versions/types';
import { PayloadRequest, RequestContext } from '../../../express/types';
import findVersions from '../findVersions';
import { getDataLoader } from '../../dataloader';
import i18nInit from '../../../translations/init';
import { APIError } from '../../../errors';
import { setRequestContext } from '../../../express/setRequestContext';

export type Options<T extends keyof GeneratedTypes['collections']> = {
  collection: T
  depth?: number
  page?: number
  limit?: number
  locale?: string
  fallbackLocale?: string
  user?: Document
  overrideAccess?: boolean
  showHiddenFields?: boolean
  sort?: string
  where?: Where
  draft?: boolean
  /**
   * context, which will then be passed to req.context, which can be read by hooks
   */
  context?: RequestContext,
}

export default async function findVersionsLocal<T extends keyof GeneratedTypes['collections']>(
  payload: Payload,
  options: Options<T>,
): Promise<PaginatedDocs<TypeWithVersion<GeneratedTypes['collections'][T]>>> {
  const {
    collection: collectionSlug,
    depth,
    page,
    limit,
    where,
    locale = null,
    fallbackLocale = null,
    user,
    overrideAccess = true,
    showHiddenFields,
    sort,
    context,
  } = options;

  const collection = payload.collections[collectionSlug];
  const defaultLocale = payload?.config?.localization ? payload?.config?.localization?.defaultLocale : null;

  if (!collection) {
    throw new APIError(`The collection with slug ${String(collectionSlug)} can't be found. Find Versions Operation.`);
  }

  const i18n = i18nInit(payload.config.i18n);
  const req = {
    user,
    payloadAPI: 'local',
    locale: locale ?? defaultLocale,
    fallbackLocale: fallbackLocale ?? defaultLocale,
    payload,
    i18n,
  } as PayloadRequest;
  setRequestContext(req, context);

  if (!req.t) req.t = req.i18n.t;
  if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);

  return findVersions({
    where,
    page,
    limit,
    depth,
    collection,
    sort,
    overrideAccess,
    showHiddenFields,
    req,
  });
}
