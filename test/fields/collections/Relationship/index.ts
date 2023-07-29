import type { CollectionConfig } from '../../../../src/collections/config/types';

export const relationshipFieldsSlug = 'relationship-fields';

const RelationshipFields: CollectionConfig = {
  slug: relationshipFieldsSlug,
  fields: [
    {
      name: 'relationship',
      type: 'relationship',
      relationTo: ['text-fields', 'array-fields'],
      required: true,
    },
    {
      name: 'relationToSelf',
      type: 'relationship',
      relationTo: relationshipFieldsSlug,
    },
    {
      name: 'relationToSelfSelectOnly',
      type: 'relationship',
      relationTo: relationshipFieldsSlug,
      admin: {
        allowCreate: false,
      },
    },
    {
      name: 'relationWithDynamicDefault',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }) => user.id,
    },
    {
      name: 'relationHasManyWithDynamicDefault',
      type: 'relationship',
      relationTo: ['users'],
      defaultValue: ({ user }) => ({
        relationTo: 'users',
        value: user.id,
      }),
    },
    {
      name: 'relationshipWithMin',
      type: 'relationship',
      relationTo: 'text-fields',
      hasMany: true,
      minRows: 2,
    },
    {
      name: 'relationshipWithMax',
      type: 'relationship',
      relationTo: 'text-fields',
      hasMany: true,
      maxRows: 2,
    },
    {
      name: 'relationshipHasMany',
      type: 'relationship',
      relationTo: 'text-fields',
      hasMany: true,
    },
  ],
};

export default RelationshipFields;
