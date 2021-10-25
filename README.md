# matt-design-system

[![Netlify Status](https://api.netlify.com/api/v1/badges/aae4bffd-684e-4a05-b162-de6e4162fd6d/deploy-status)](https://app.netlify.com/sites/boring-goodall-d5136f/deploys)

## Installation

First, make sure to install the package via either NPM or Yarn

```bash
# npm
npm i @m4thieulavoie/design-system
# yarn
yarn add @m4thieulavoie/design-system
```

Next, make sure to register the components in your app index JavaScript/TypeScript file.

```js
import bootstrap from "@m4thieulavoie/design-system";

bootstrap();
```

Lastly, you'll want to wrap your app with the theme provider component in order for the custom properties to be registered.

```html
<body>
  <matt-theme-provider>insert your app content here</matt-theme-provider>
</body>
```
