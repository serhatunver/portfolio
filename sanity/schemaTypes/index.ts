import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { projectType } from './projectType';
import { educationType } from './educationType';
import { experienceType } from './experienceType';
import { techStackType } from './techStackType';
import { blogPostType } from './blogPostType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    projectType,
    educationType,
    experienceType,
    techStackType,
    blogPostType,
  ],
};
