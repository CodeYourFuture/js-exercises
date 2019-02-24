var fs = require("fs");

function readFile(path) {
  return new Promise(resolve => {
    fs.readFile(path, function(err, data) {
      if (err) {
        throw err;
      }
      resolve(data.toString());
    });
  });
}

module.exports = {
  readFile
};
