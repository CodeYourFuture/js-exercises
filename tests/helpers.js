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

function importSourceAndRead(req, path) {
  return new Promise(resolve => {
    beforeAll(() => {
      req(path);
      const pathToExercise = req.resolve(path);
      return readFile(pathToExercise).then(resolve);
    });
  });
}

module.exports = {
  importSourceAndRead
};
