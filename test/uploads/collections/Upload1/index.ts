import path from 'path';
import { CollectionConfig } from '../../../../src/collections/config/types';

export const Uploads1: CollectionConfig = {
  slug: 'uploads-1',
  upload: {
    staticDir: path.resolve(__dirname, './uploads'),
  },
  fields: [
    {
      type: 'upload',
      name: 'media',
      relationTo: 'uploads-2',
      filterOptions: {
        mimeType: {
          equals: 'image/png',
        },
      },
    },
    {
      type: 'richText',
      name: 'richText',
    },
  ],
};

export const uploadsDoc = {
  text: 'An upload here',
};
