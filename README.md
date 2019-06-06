# Directus Starter for Gridsome

## Guide

Update the directus info in the plugin options.

```js
// gridsome.config.js
module.exports = {
  siteName: 'Gridsome with Directus',
  plugins: [
    {
      use: '@pienter/gridsome-source-directus',
      options: {
        url: 'YOUR URL',
        project: 'YOUR PROJECT', // default = '_'
        email: 'DIRECTUS USER EMAIL',
        password: 'DIRECTUS USER PASSWORD', // or use token instead
        camelCase: true, // transform field names to camel case
        routes: {}, // add custom routes here
      },
    },
  ]
};
```
