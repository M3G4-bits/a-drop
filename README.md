This project is built with:

- a-drop

## Overview

a-drop is a component-driven landing web app and UI toolkit built with modern frontend tooling. Its aim is to provide a clean, responsive, and accessible marketing site and a set of reusable UI components that can be reused or adapted in other projects.

## Deliverables

- A responsive marketing/landing site implemented in TypeScript + React.
- A library of reusable, accessible UI components (buttons, forms, navigation, cards, modals, toasts, etc.).
- A consistent Tailwind CSS-based theme and layout for rapid iteration.
- A basic test suite for core UI behaviors.
- Documentation and examples illustrating component usage and page composition.

## Technology Stack

- Framework: React + TSX components
- Bundler / Dev Server: Vite
- Language: TypeScript
- Styling: Tailwind CSS + PostCSS
- UI primitives: shadcn-ui (component primitives) and project-specific components
- Testing: Vitest
- Tooling: ESLint, TypeScript config, and Vite config for builds and development

Project sources live under `src/` with components in `src/components` and pages in `src/pages`.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Contributing

- Keep components small and composable.
- Add or update tests when changing behavior.
- Follow existing TypeScript and linting conventions.

If you'd like, I can add a `CONTRIBUTING.md`, CI configuration, or Storybook examples next.

## License

Check repository settings or contact the project owner for license details.

