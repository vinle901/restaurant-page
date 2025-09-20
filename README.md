# Thaicoon Restaurant (Single-Page App)

A simple Webpack-powered single-page site that dynamically renders Home, Menu, and About sections for a Thai restaurant using vanilla JavaScript and CSS.

## Features
- SPA-style navigation (no full page reloads)
- Modular JS: `home.js`, `menu.js`, `about.js`
- Development server with live reload (webpack-dev-server)
- HTML template via `html-webpack-plugin`
- CSS bundling with `style-loader` + `css-loader`

## Tech Stack
- Node.js + npm
- Webpack 6, Webpack Dev Server 5
- Vanilla JS (ES Modules)
- CSS

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run the dev server
Add these scripts (optional but recommended) to `package.json` → `scripts`:
```json
{
  "scripts": {
    "dev": "webpack serve --open --mode development",
    "build": "webpack --mode production"
  }
}
```
Then run:
```bash
npm run dev
```
This starts a local server and opens the app in your browser.

### 3) Build for production
```bash
npm run build
```
Outputs static assets to `dist/`.

## Project Structure
```
restaraunt-page/
├── package.json
├── webpack.config.js
├── src/
│   ├── index.js           # Entry – binds buttons and routes
│   ├── template.html      # HTML template used by HtmlWebpackPlugin
│   ├── styles.css         # Global styles
│   ├── home.js            # Home screen content
│   ├── menu.js            # Menu screen content
│   └── about.js           # About screen content
└── dist/                  # Build output (generated)
```

## How It Works
- `index.js` wires up click handlers for `Home`, `Menu`, and `About` buttons and swaps the content inside `#content`.
- Each module (`home.js`, `menu.js`, `about.js`) appends its DOM nodes into the shared `#content` container.
- `styles.css` provides a themed look; no SCSS is used.

## Notes
- Footer is non-fixed and participates in normal document flow. A flex-based layout keeps it at the bottom on short pages while allowing natural scroll on long pages.
- If vertical centering is adjusted, see `main` and `#content` rules in `styles.css`.

## License
ISC
