const cucumber = require("cypress-cucumber-preprocessor").default;

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) 
    {
return on('file:preprocessor',cucumber())  
  },
  specPattern:"cypress/e2e/**/*.feature",
  supportFile:false
  },
});
