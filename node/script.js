var assemble = require('./assemble')

var input = assemble.current_run.input
var block_name = assemble.current_run.block_name

console.log("Hello!")
console.log("We're up and running with block " + block_name)

console.log("Received input:")
console.log(input)
