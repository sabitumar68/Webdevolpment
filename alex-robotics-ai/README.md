# Alex Robotics AI

A React + Vite robotics workshop prototype in `alex-robotics-ai/`. This is deliberately isolated from the existing HTML/CSS exercises and React examples in the repository.

## Current capabilities

- Responsive dark/light workspace with navigation and a contextual Alex panel.
- Natural-language project creation and saved project list.
- Browser-local project and inventory persistence using localStorage.
- Component inventory search, categories, quantities, ownership/order status, and custom parts.
- Project tabs for overview, research/source references, BOM, circuit preview, code, assembly, testing, and troubleshooting.
- Editable starter Arduino sketch, copy/download actions, JSON project export and workspace backup.
- Illustrative circuit scene with selectable sample wires and a connection table.
- Mac/Windows Arduino IDE written setup steps linking to official Arduino pages.
- Rule-based assistant responses that disclose demo mode.
- Basic checklists, project completion state, and mobile layout.

## Important limitations

This is an initial frontend implementation, not yet the complete engineering system described in the product brief.

- **AI is not live.** Alex uses local rule-based demo replies. `.env.example` documents future server-side integration placeholders; this frontend does not read them.
- **Research is not live.** Links are official reference starting points. The app does not claim it searched or verified a particular project.
- **Circuit Lab is illustrative.** Its SVG scene and example wiring are not generated from the active project's netlist and are not electrically validated. Do not use the sample as a real wiring plan.
- **No true 3D CAD, schematic engine, or circuit validator is connected.**
- **Arduino code is a starter heartbeat sketch.** It has not been compiled or tested on hardware and does not control a robot.
- **No compiler sandbox, authentication, cloud database, cloud sync, or image understanding is configured.**
- Local data exists only in the current browser profile. Clearing browser storage may delete it. Export a JSON backup to preserve work.
- Supplier prices and shopping links are not provided because no current price/search integration is connected.

## Requirements

- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally

From the repository root:

```bash
cd alex-robotics-ai
npm install
npm run dev
```

Vite prints the local development URL. To create a production bundle:

```bash
npm run build
npm run preview
```

## Deploy

The app is a static Vite frontend. Build from the `alex-robotics-ai` directory and publish the generated `dist/` directory on GitHub Pages, Netlify, Cloudflare Pages, or another static host. Configure the host's project root as `alex-robotics-ai` and build command as `npm run build`; output directory is `dist`.

For GitHub Pages, configure the correct Vite `base` path if deploying under a repository subpath. No deployment has been performed by this commit.

## AI and research integration plan

Add a backend (for example, server routes or a separate API service) before connecting providers:

1. Keep provider API keys in server-only environment variables. Never expose them as `VITE_*` variables.
2. Add request validation, response limits, rate limiting and clear provider/quota error handling.
3. Use an actual web search integration and preserve source titles, URLs, and timestamps in project records.
4. Have the model return a typed project plan and structured circuit netlist; validate the result before rendering.
5. Generate code from the same structured pin map as the circuit display.
6. Run Arduino CLI only in an isolated, resource-limited backend environment. Report compilation only when real compiler output exists.
7. Use manufacturer datasheets and explicit hardware assumptions for electrical checks. Software checks are not a substitute for physical inspection.
8. Add authentication and a database only when cloud sync is needed.

The `.env.example` file contains empty placeholders only; no secrets are included.

## Testing status

- Repository files and the existing React/Vite setup were inspected before adding this app.
- Changes are isolated in the `feature/alex-robotics-ai` branch.
- No browser end-to-end test, local `npm install`, production build, Arduino compile, physical hardware test, or deployment has been run from this GitHub-only editing session.
- A successful production build should be confirmed by running `npm install && npm run build` locally or through CI before deployment.

## Repository preservation

Existing files at the repository root and under `reactjs/` were not replaced. The application lives in its own directory.
