# E-Commerce Landing Page

A production-minded, responsive e-commerce landing page implemented from the provided Figma design.

The project demonstrates a clean React + TypeScript architecture, reusable components, Vanilla CSS, Redux Toolkit, RTK Query, responsive layout techniques, and paginated product loading from the DummyJSON Products API.

> **Assessment scope:** This implementation focuses on the supplied landing-page experience. The complete checkout/cart flow is intentionally outside the current landing-page scope.

## Live Demo

**Netlify:** _To be added after deployment_

[View the live application](#)

---

## Project Overview

This project was built as a frontend engineering assessment with emphasis on:

- Accurate implementation of the supplied Figma design
- Responsive behavior across desktop, tablet, and mobile
- Reusable and composable React components
- Strong TypeScript typing
- Server-state management with RTK Query
- Application state management with Redux Toolkit
- Product retrieval from DummyJSON
- Progressive product loading using API pagination
- Loading and error states
- Semantic HTML and accessible interactive elements
- Vanilla CSS instead of a UI component framework
- Maintainable project structure and incremental Git history

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React | UI development |
| TypeScript | Static typing and maintainability |
| Vite | Development server and production build tooling |
| Vanilla CSS | Styling and responsive design |
| Redux Toolkit | Client/application state |
| RTK Query | Server-state management and API integration |
| DummyJSON | Product data source |
| Netlify | Production deployment |

## Requirements

Before running the project locally, install:

- Node.js 18+
- npm
- Git

Check versions:

```bash
node --version
npm --version
git --version
```

## Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### 2. Enter the project directory

```bash
cd ecommerce-landing-page
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server with hot module replacement.

### Production build

```bash
npm run build
```

Creates an optimized production build in the `dist` directory.

### Preview production build

```bash
npm run preview
```

Serves the generated production build locally for final verification.

## Production Build Verification

Before deployment:

```bash
npm run build
npm run preview
```

The application should be checked using the production build rather than relying only on the development server.

## API Integration

Product data is retrieved from:

```text
https://dummyjson.com/products
```

The integration is implemented with Redux Toolkit Query.

### Data flow

```text
DummyJSON API
      |
      v
productsApi
      |
      v
RTK Query cache
      |
      v
useGetProductsQuery
      |
      v
ProductSection
      |
      v
ProductCard
```

RTK Query handles request lifecycle, loading state, error state, cached API data, refetching, and pagination requests.

## Product Pagination

The product section uses the API's `limit` and `skip` parameters.

The first request retrieves the initial product set. When the user selects **Load More Products**, the next batch is requested using an updated `skip` value.

Previously loaded products remain visible while new products are appended.

The implementation uses the API's `total` value to determine when all available products have been loaded.

## State Management

The application separates server state from client/application state.

### Server state

Product data belongs to server state and is handled by RTK Query.

```text
API
 |
 v
RTK Query
 |
 +-- cache
 +-- loading state
 +-- error state
 +-- pagination
```

### Application state

Redux Toolkit is used for application-level state where persistent client-side state is required.

The Redux store is configured in:

```text
src/app/store.ts
```

Typed Redux hooks are provided through:

```text
src/app/hooks.ts
```

## Project Architecture

```text
src/
├── app/
│   ├── hooks.ts
│   ├── shopSlice.ts
│   └── store.ts
│
├── assets/
│
├── components/
│   ├── common/
│   │   ├── BasketModal/
│   │   └── Container/
│   │
│   └── layout/
│       ├── Footer/
│       └── Header/
│
├── features/
│   ├── posts/
│   └── ProductCard/
│
├── sections/
│   ├── CtaSection/
│   ├── Hero/
│   ├── ProductSection/
│   ├── Services/
│   └── Testimonials/
│
├── services/
│   └── productsApi.ts
│
├── styles/
│
├── types/
│
├── App.tsx
└── main.tsx
```

### Architecture responsibilities

- **`app/`** — Redux configuration, typed hooks, and client state.
- **`components/common/`** — reusable UI primitives.
- **`components/layout/`** — global Header and Footer.
- **`features/`** — feature-oriented UI and functionality.
- **`sections/`** — major landing-page sections.
- **`services/`** — external API and RTK Query configuration.
- **`types/`** — shared TypeScript domain models.
- **`styles/`** — global styling and design tokens.

## Landing Page Sections

The page is composed of:

1. Header
2. Hero / promotional categories
3. Bestseller products
4. Services
5. Featured posts
6. Testimonials and gallery
7. Call-to-action
8. Footer

## Design System

The project uses CSS custom properties for shared design tokens covering:

- Brand colors
- Text and background colors
- Typography
- Font weights
- Spacing
- Container widths
- Border radii
- Shadows
- Transitions

The primary typeface is **Montserrat**.

### Container strategy

| Area | Maximum width |
| --- | ---: |
| Header | `1280px` |
| Main content | `1200px` |
| Footer content | `1200px` |

The layout becomes fluid on smaller screens while maintaining responsive horizontal padding.

## Responsive Design

The implementation follows a mobile-first responsive strategy using:

- CSS Grid
- Flexbox
- Fluid widths
- Responsive spacing
- Media queries
- Flexible image sizing
- Content-aware wrapping

The layout is designed for mobile, tablet, and desktop without unnecessary fixed widths that could create horizontal scrolling.

## Component Design

Components are kept focused on a single responsibility.

For example:

```text
ProductSection
    |
    +-- consumes product data
    +-- handles loading/error states
    +-- controls pagination
    +-- renders ProductCard components
```

While:

```text
ProductCard
    |
    +-- receives Product
    +-- renders product presentation
```

This keeps data orchestration separate from reusable product presentation.

## Styling Approach

The project uses **Vanilla CSS**.

No Tailwind CSS, Bootstrap, Material UI, or other UI component framework is used.

Vanilla CSS was selected to maintain precise control over the Figma implementation and demonstrate strong CSS fundamentals.

CSS custom properties are used for repeated values instead of scattering hard-coded values throughout the codebase.

## Accessibility

The implementation follows basic accessibility practices, including:

- Semantic HTML elements
- Descriptive image `alt` attributes
- Appropriate button elements for actions
- Keyboard-accessible interactive elements
- Focus states for interactive controls
- Meaningful heading hierarchy
- Avoiding clickable non-interactive elements where a button or link is appropriate

## Error and Loading States

The product section handles:

- Initial loading
- API errors
- Successful data rendering
- Additional product loading
- End-of-results handling

When additional products are requested, existing products remain visible while the next request is processed.

## Development Workflow

Development was performed incrementally using focused Git commits.

Example commit convention:

```text
feat: build hero section
feat: integrate products api
feat: build product section
feat: add paginated product loading
feat: build services section
feat: build featured posts section
feat: build testimonials section
feat: build cta and footer sections
refactor: standardize responsive container widths
docs: add project documentation
```

Common commit types:

- `feat` — new functionality
- `fix` — bug fix
- `refactor` — restructuring without changing behavior
- `docs` — documentation
- `style` — formatting/styling-only changes
- `chore` — maintenance

## Design Decisions

### React + TypeScript

React provides component-based UI composition while TypeScript provides compile-time guarantees around product data, component props, and application state.

### RTK Query

Product data is remote/server state. RTK Query provides fetching, caching, request lifecycle management, and API-driven state.

### Redux Toolkit

Redux Toolkit provides predictable application state management with less boilerplate than traditional Redux.

### Vanilla CSS

The assessment requires Vanilla CSS. It also provides direct control over the Figma implementation and demonstrates CSS fundamentals.

### Reusable Container

The shared `Container` component prevents inconsistent max-width and horizontal-padding rules across sections.

## Assumptions and Implementation Notes

- The supplied Figma design is treated as the primary visual reference.
- The implementation is scoped to the landing-page experience.
- Product information comes from DummyJSON as required by the assessment.
- Static promotional/editorial imagery is handled separately from API product data.
- DummyJSON is a public demo API and may change independently of this application.
- Navigation items without destination pages are treated as presentation/navigation placeholders.
- A complete checkout flow is outside the landing-page scope.
- Product pagination uses the API response metadata rather than a hard-coded number of pages.
- No frontend UI framework is used for styling.

## Deployment

The application is intended for deployment on Netlify.

### Netlify configuration

```text
Build command:
npm run build

Publish directory:
dist
```

### Deploy using Netlify Git integration

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Create/import a site in Netlify.
3. Select the repository.
4. Select the production branch.
5. Set the build command to `npm run build`.
6. Set the publish directory to `dist`.
7. Deploy.

### Production URL

Replace this placeholder after deployment:

```text
https://<YOUR-NETLIFY-SITE>.netlify.app
```

## Deployment Checklist

- [ ] `npm install` succeeds
- [ ] `npm run build` succeeds
- [ ] Production preview works
- [ ] Desktop layout matches the design
- [ ] Mobile layout matches the design
- [ ] Product API loads correctly
- [ ] Loading state works
- [ ] Error state works
- [ ] Load More functionality works
- [ ] No horizontal overflow on mobile
- [ ] Images have appropriate alt text
- [ ] No console errors
- [ ] Git working tree is clean
- [ ] Repository URL is added
- [ ] Netlify URL is added
- [ ] Production deployment has been tested

## Known Limitations

Because the project is intentionally scoped to the landing page, the following are not part of the current implementation:

- Full checkout flow
- Payment processing
- Authentication
- Product detail pages
- Product search
- Product filtering
- Backend order management

These can be added later without fundamentally changing the current component architecture.

## Future Improvements

Potential future improvements include:

- Unit tests
- Component tests
- End-to-end testing
- Visual regression testing
- Product filtering
- Product search
- Product detail routes
- Persistent shopping cart
- Authentication
- Improved API retry handling
- Performance profiling
- Image optimization
- CI checks for type checking and production builds

## Final Verification

Before submission:

```bash
npm install
npm run build
npm run preview
```

Then verify:

- Browser console
- Network requests
- Responsive breakpoints
- Image loading
- API failure behavior
- Product pagination
- Keyboard navigation
- Production deployment

## License

This project was created for educational and assessment purposes.

The visual design and supplied assessment assets remain subject to their respective ownership and usage terms.
