const fetcher = require("./fetcher");

const getRepos = function(repoName) {
  return fetcher(repoName).then(function(response) {
    return response.map(function(rep) {
      return rep.name;
    });
  });
};

module.exports = getRepos;
