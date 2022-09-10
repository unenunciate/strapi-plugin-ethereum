import server from "./server";
import contentTypes from "./content-types";

module.exports = () => ({
  ...server,
  contentTypes,
  config: {
    ...server.config,
    default: () => ({
      ...server.config.default,
    }),
    validator: (config) => {

      
    },
  },
});
