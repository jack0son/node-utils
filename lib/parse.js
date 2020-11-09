const parse_bool = (str) => {
  switch (str) {
    case "t":
    case "T":
    case "yes":
    case "y":
    case "on":
    case "true":
    case true:
      return true;
    case "f":
    case "F":
    case "no":
    case "n":
    case "off":
    case "false":
    case false:
    default:
      return false;
  }
};

module.exports = { parse_bool };
