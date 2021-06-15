var A = require("workspace-a");
var B = require("workspace-b");

console.log(A.upperCase(`I'm workspace-c`));
console.log(`B.helloLower`, B.helloLower());
console.log(`B.helloUpper`, B.helloUpper());

module.exports = {};
