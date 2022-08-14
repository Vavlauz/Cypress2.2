const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ig6dy6',
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern:
      "cypress/{e2e,integration}/{**,*}/*{.cy.{js,jsx,ts,tsx},.spec.js}",
  },
});
