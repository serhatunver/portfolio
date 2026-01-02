import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { projectType } from './projectType';
import { educationType } from './educationType';
import { experienceType } from './experienceType';
import { techStackType } from './techStackType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    projectType,
    educationType,
    experienceType,
    techStackType,
  ],
};
