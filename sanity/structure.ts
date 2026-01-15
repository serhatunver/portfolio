import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('experience').title('Experience'),
      S.documentTypeListItem('education').title('Education'),
      S.documentTypeListItem('techStack').title('Tech Stack'),
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('siteSettings').title('Site Settings'),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'project',
        S,
        context,
        title: 'Orderable Project',
      }),
      orderableDocumentListDeskItem({
        type: 'experience',
        S,
        context,
        title: 'Orderable Experience',
      }),
      orderableDocumentListDeskItem({
        type: 'education',
        S,
        context,
        title: 'Orderable Education',
      }),
      orderableDocumentListDeskItem({
        type: 'techStack',
        S,
        context,
        title: 'Orderable Tech Stack',
      }),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['project', 'experience', 'education', 'techStack', 'blogPost', 'siteSettings'].includes(item.getId()!),
      ),
    ]);
