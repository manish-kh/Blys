const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
module.exports = defineConfig({
  projectId: 'b98hkk',
  viewportWidth: 1900,
  viewportHeight: 1000,
  e2e: {

    testIsolation:false,
    scrollBehavior: false,
    chromeWebSecurity: true,
    hideXHRInCommandLog: true,
    setupNodeEvents(on, config) {
      //To Use lighthouse
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on('task', {
        lighthouse: lighthouse(),
        // pa11y: pa11y(console.log.bind(console)),
      });
    },
  },
});
