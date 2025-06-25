# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

### Deployment

This project can be deployed to GitHub Pages using the provided script:

```bash
npm run deploy
```

### Odometer feature & Google Maps API

The latest version introduces an odometer feature that integrates with the Google Maps API. To enable it, copy `.env.example` to `.env` and define your API key:

```bash
VITE_GOOGLE_MAPS_API_KEY=your-key-here
```

Make sure the key has the appropriate permissions for Maps JavaScript usage.

API keys can be restricted by HTTP referrers to protect against unwanted use. If you apply this restriction, add development URLs such as `http://localhost:5173/*` and your GitHub Codespaces URL to the allowed list.

Example configuration in the Google Cloud console:

1. Open **APIs & Services** -> **Credentials** and select your key.
2. Under **Application restrictions** choose **HTTP referrers (web sites)**.
3. Add entries like `http://localhost:5173/*` and your Codespaces domain, then save.

## License
This project is licensed under the [MIT License](LICENSE).

