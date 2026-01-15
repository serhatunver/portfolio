// lib/getIcon.ts
import type { SimpleIcon } from 'simple-icons';
import * as icons from 'simple-icons';
import { siSimpleicons } from 'simple-icons';

/**
 * CMS slug → SimpleIcon export key
 * fallback siSimpleicons
 */
export function getIconBySlug(slug?: string | null): SimpleIcon {
  if (!slug) return siSimpleicons;

  const clean = slug.replace(/[-_]/g, '');
  if (!clean) return siSimpleicons;

  const key = 'si' + clean[0].toUpperCase() + clean.slice(1);

  // @ts-expect-error: dynamic access
  const icon = icons[key];

  return icon ?? siSimpleicons;
}
