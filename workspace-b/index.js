var A = require("workspace-a");

console.log(`I'm workspace-b`);

const message = "Hello World!";

module.exports = {
  helloLower: () => A.lowerCase(message),
  helloUpper: () => A.upperCase(message),
};
