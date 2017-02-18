var assemble_dir = process.env.ASSEMBLE_DIR;
var block_name = process.env.ASSEMBLE_BLOCK_NAME;

var fs = require('fs');

var input = require(assemble_dir + "/input.json")

module.exports = {
  current_run: {
    assemble_dir: assemble_dir,
    block_name: block_name,
    input: input,
    output: function(data) {
      fs.writeFile(assemble_dir + "/output.json", JSON.stringify(data), function(err) {
        if(err) {
          return console.log(err);
        }

        console.log("The file was saved!");
      });
    }
  }
}
