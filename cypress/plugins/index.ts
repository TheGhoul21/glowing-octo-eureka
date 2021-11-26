const injectDevServer = require('@cypress/react/plugins/react-scripts');
module.exports = (on, config) => {
  require('@cypress/react/plugins/react-scripts')(on, config); // IMPORTANT to return the config object
  // with the any changed environment variables


  return config;

  if (config.testingType === "component") {
    injectDevServer(on, config);
  }

  return config; // IMPORTANT to return a config
};