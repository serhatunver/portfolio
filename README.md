# Personal Portfolio

A personal portfolio website built with Next.js and TypeScript, focused on clean architecture and maintainable content management with optional CMS integration.

## Project Overview

The project is built with Next.js App Router and uses TypeScript throughout. Content can be managed either through local TypeScript files or via Sanity CMS, with automatic fallback to local content when CMS is unavailable or disabled.

- **Decoupled architecture**: The UI layer is completely independent from the data source. Components don't know whether content comes from local files or a CMS.
- **Graceful degradation**: The system handles CMS failures and missing data without breaking, automatically falling back to local content.
- **CMS-agnostic design**: The adapter layer can be swapped out for different CMS providers without touching UI components.
- **Type safety**: Shared TypeScript types ensure consistency between local content and CMS data structures.

This approach reflects how content management might be handled in a production application where requirements can change over time.

## Architecture Overview

The project follows a three-layer architecture:

### UI Layer (`components/`, `app/`)

React components and Next.js pages that render the user interface. Components are unaware of where data comes from—they simply call functions like `getProjects()` or `getEducation()`.

### Content Layer (`content/`, `lib/cms/`)

The content layer consists of two parts:

1. **Local content files** (`content/`): TypeScript files that export typed data arrays. These serve as the default data source and are always available.

2. **CMS adapter** (`lib/cms/`): A thin abstraction layer that:
   - Checks the `USE_CMS` environment variable to determine the data source
   - Attempts to fetch from Sanity CMS when enabled
   - Automatically falls back to local content if:
     - CMS fetching fails (network errors, authentication issues)
     - CMS returns empty data
     - CMS is disabled via environment variable

The fallback logic is centralized in `lib/cms/index.ts`, so UI components never need to handle these cases directly.

### CMS Layer (`sanity/`, `app/studio/`)

Sanity CMS integration with schema definitions and an embedded Studio interface. The Studio is accessible at `/studio` when the project is running.

<img width="1920" height="879" alt="image" src="https://github.com/user-attachments/assets/ed6086d2-5e26-4f18-b69f-2ad8f3787bed" />

<img width="1920" height="879" alt="image" src="https://github.com/user-attachments/assets/03a94cae-84f5-4c9b-a7e8-d2e446e6b10d" />

## Key Features

- **Dual content sources**: Local TypeScript files as default, with optional Sanity CMS integration
- **Automatic fallback**: Graceful degradation when CMS is unavailable
- **Type-safe content**: Shared TypeScript types across local and CMS data
- **Component-based UI**: Reusable React components organized by concern
- **Server components**: Next.js App Router with async server components for data fetching
- **Embedded CMS**: Sanity Studio accessible within the application
- **Theme support**: Dark/light mode using next-themes
- **Responsive design**: Mobile-first approach with Tailwind CSS

## Tech Stack

### Core Framework

- **Next.js** 16.1.1 (App Router)
- **React** 19.2.3
- **TypeScript** 5

### Styling & UI

- **Tailwind CSS** 4
- **Radix UI** (Avatar, Navigation Menu, Slot primitives)
- **Lucide React** (Icons)
- **Motion** (Animations)
- **next-themes** (Theme switching)

### Content Management

- **Sanity** 5.1.0 (Optional CMS)
- **next-sanity** (Next.js integration)
- **@portabletext/react** (Rich text rendering)

### Development Tools

- **ESLint** (Code linting)
- **Prettier** (Code formatting)
- **Husky** (Git hooks)
- **lint-staged** (Pre-commit checks)
- **Commitlint** (Conventional commits)

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── (root)/            # Main application routes
│   │   ├── about/        # About page
│   │   ├── blog/         # Blog listing and detail pages
│   │   ├── projects/     # Projects listing and detail pages
│   │   └── page.tsx      # Home page
│   └── studio/           # Embedded Sanity Studio
│
├── components/            # React components
│   ├── common/           # Shared components (cards, badges, etc.)
│   ├── layout/           # Layout components (header, footer, sections)
│   ├── sections/         # Page sections (hero, projects, experience, etc.)
│   └── ui/               # Base UI components (buttons, cards, etc.)
│
├── content/              # Local content files (default data source)
│   ├── blogPosts.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── siteSettings.ts
│   └── tech-stack.ts
│
├── lib/                  # Utility libraries
│   ├── cms/              # CMS adapter layer
│   │   ├── client.ts     # Sanity client configuration
│   │   ├── fetch.ts      # CMS data fetching functions
│   │   └── index.ts      # Public API with fallback logic
│   └── utils/            # General utilities
│
├── sanity/               # Sanity CMS configuration
│   └── schemaTypes/      # Content schema definitions
│
└── types/                # TypeScript type definitions
    └── content.ts        # Shared content types
```

### Important Directories

- **`app/`**: Next.js App Router pages. Uses server components for data fetching.
- **`components/`**: React components organized by purpose. Section components fetch data using the CMS adapter.
- **`content/`**: Local TypeScript files that export typed data. These are the fallback when CMS is unavailable.
- **`lib/cms/`**: The CMS adapter layer. `index.ts` exports the public API (`getProjects()`, `getEducation()`, etc.) that components use.
- **`sanity/`**: Sanity schema definitions that match the TypeScript types in `types/content.ts`.
- **`types/`**: Shared TypeScript types ensuring consistency between local content and CMS data.

## Running the Project Locally

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. (Optional) Set up Sanity CMS:
   - Create a `.env.local` file in the root directory
   - Add the following variables if you want to use Sanity:

   ```env
   USE_CMS=true
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-dataset
   NEXT_PUBLIC_SANITY_API_VERSION=2026-01-02
   ```

   - If `USE_CMS` is not set or set to `false`, the application will use local content files

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

6. (Optional) Access Sanity Studio:
   - Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
   - This requires Sanity credentials to be configured

### Available Scripts

- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Environment Variables

The following environment variables are used:

- `USE_CMS` - Set to `"true"` to enable Sanity CMS integration. Omit or set to `"false"` to use local content files.
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID (required if `USE_CMS=true`)
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset name (required if `USE_CMS=true`)
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version (defaults to `2026-01-02`)

## Content Management

### Using Local Content

By default, the project uses local TypeScript files in the `content/` directory. Edit these files directly to update content:

- `content/projects.ts` - Project listings
- `content/experience.ts` - Work experience
- `content/education.ts` - Education history
- `content/blogPosts.ts` - Blog posts
- `content/tech-stack.ts` - Technology stack
- `content/siteSettings.ts` - Site-wide settings (hero, about, footer)

### Using Sanity CMS

When `USE_CMS=true`, content is fetched from Sanity. The CMS adapter automatically falls back to local content if:

- The CMS request fails
- The CMS returns empty data
- Required environment variables are missing

This ensures the application always has content to display, even if the CMS is unavailable.

## License

This project is licensed under the MIT License.
