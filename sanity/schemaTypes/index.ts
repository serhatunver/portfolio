import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { blogPostType } from './blogPostType';
import { categoryType } from './categoryType';
import { educationType } from './educationType';
import { experienceType } from './experienceType';
import { iconType } from './iconType';
import { projectType } from './projectType';
import { siteSettingsType } from './siteSettingsType';
import { techStackType } from './techStackType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    projectType,
    educationType,
    experienceType,
    techStackType,
    blogPostType,
    siteSettingsType,
    iconType,
  ],
};
