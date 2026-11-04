# [Marco Rodriguez | Portfolio](https://marcotbcreator.dev/)

### Technologies used:

- Framework: [Next.js](https://nextjs.org/)
- Styling: [TailwindCSS](https://tailwindcss.com/)
- Internationalization: [Next-intl](https://next-intl-docs.vercel.app/)
- UI Components: [Aceternity UI](https://ui.aceternity.com/)
- Motion Effects: [Framer Motion](https://www.framer.com/motion/)
- Global State Management: [Zustand](https://zustand-demo.pmnd.rs/)
- Hosting: [Vercel](https://vercel.com/)

### Runtime and verification

Use Node.js 24.22.2 or a newer patched 24.x LTS release (see .nvmrc).
Install the locked dependencies with npm ci and use Node 24 in the deployment.

- npm run build compiles the app for production.
- npm run lint checks ESLint separately from the build.
- npm run typecheck generates Next.js route types and checks TypeScript without
  an incremental cache. Ambient types are explicit to avoid types leaking in
  from parent directories.
- npm run test:smoke checks both languages, all published project pages, localized
  metadata, 404 responses, language redirects, compiled assets and native sharp
  processing. Start npm start first; set SMOKE_BASE_URL for another local port.
- npm audit --omit=dev checks production dependencies; npm audit checks all packages.

The update migrates Next.js/React and next-intl, async locale/slug parameters,
proxy routing, and ESLint. Sharp is patched and the image quality allowlist
preserves the existing quality=100 images. The language buttons use full-page
navigation to retain the project path, query string and section fragment.

The complete audit still reports the ESLint plugins using minimatch 3.x under
[GHSA-g3hv-75wg-m249](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249).
npm marks all versions below 11.0.1 as affected, while the upstream report concerns
10.2.6 preprocessing with optimizationLevel >= 2, absent from 3.x. Keep this
discrepancy under review. The TypeScript parser uses patched minimatch 11.x;
a global override would break the callable 3.x API used by the other plugins.
