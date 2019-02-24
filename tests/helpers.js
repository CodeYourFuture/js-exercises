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

function importSourceAndRead(req, path, res) {
  beforeAll(() => {
    req(path);
    const pathToExercise = req.resolve(path);
    return readFile(pathToExercise).then(
      fileContents => (res.contents = fileContents)
    );
  });
}

module.exports = {
  importSourceAndRead
};
