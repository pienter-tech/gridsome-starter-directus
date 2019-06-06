// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
