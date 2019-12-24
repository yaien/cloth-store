const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
};
