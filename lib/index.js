const configure = require("./configure");

module.exports = {
  configure,
  ...require("./time"),
  ...require("./merge"),
  ...require("./parse"),
};
