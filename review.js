const fs = require("fs")
const path = require("path")

const BASE_DIRECTORY = process.argv[2] || './';


console.log('\n... scanning for all .js files\n');

const registerDirectory = function (dirPath, oldPath) {
  paths = fs.readdirSync(dirPath)

  const thisFileName = __filename.split(__dirname).join('');
  const arrayOfFiles = [];
  const arrayOfDirs = [];
  for (let nextPath of paths) {
    if ('/' + nextPath === thisFileName) continue;

    const isDirectory = fs.statSync(dirPath + '/' + nextPath).isDirectory();
    if (!isDirectory && path.extname(nextPath) !== '.js') continue;

    if (isDirectory) {
      if (nextPath[0] === '.') continue; // ignore hidden folders
      const subDirs = registerDirectory(dirPath + '/' + nextPath, dirPath);
      arrayOfDirs.push(subDirs);
    } else {
      arrayOfFiles.push(path.join(nextPath))
    }
  }

  return {
    path: dirPath
      .split(oldPath).join('')
      .split('/').join('')
      + '/',
    files: arrayOfFiles.length > 0
      ? arrayOfFiles
      : null,
    dirs: arrayOfDirs.length > 0
      ? arrayOfDirs
      : null
  }
}

const allJsFiles = registerDirectory(BASE_DIRECTORY);
// console.log(JSON.stringify(allJsFiles, null, '  '));


console.log('\n... evaluating .js files & building report\n');

/* statuses
  0: pass
  1: fail
  2: error
  3: syntax error
*/
const evaluateFile = (path) => {
  console.log('\n... ' + path + '\n');
  let report = [];
  const nativeAssert = console.assert;
  let hasFailed = false;
  console.assert = function () {
    arguments = Array.from(arguments);
    nativeAssert(...arguments);
    report.push({
      assertion: arguments
    });
    if (!arguments[0] || hasFailed) {
      status = 1;
    } else {
      status = 0;
    }
  }
  let status = -1;
  try {
    require(path); // using require for cleaner callstack
    // const code = fs.readFileSync(path, 'utf-8');
    // eval(code);
  } catch (err) {

    if (err.stack.includes('SyntaxError')) {
      status = 3;
    } else {
      status = 2;
    };
    report.push({
      error: err.stack
        .split(__dirname).join(' [...] ')
    });
  }
  console.assert = nativeAssert;
  const source = fs.readFileSync(path, 'utf-8');

  return { path, status, source, report };
}

const evaluateDirectory = (toReport, path) => {
  path = path || toReport.path || './';
  console.log('\n... ' + path);

  const files = toReport.files
    ? toReport.files
      .map(fileName => evaluateFile(path + fileName))
    : toReport.files;

  const dirs = toReport.dirs
    ? toReport.dirs
      .map(dir => evaluateDirectory(dir, path + dir.path))
    : toReport.dirs;

  const statusOf = entries => entries
    ? entries
      .reduce((stat, entry) => entry.status > stat
        ? entry.status
        : stat,
        -1)
    : -1;

  const dirsStatus = statusOf(dirs);
  const filesStatus = statusOf(files);

  const status = dirsStatus >= filesStatus
    ? dirsStatus
    : filesStatus;

  return {
    path,
    status,
    time: (new Date()).toJSON(),
    files,
    dirs,
  };
}


const evaluation = evaluateDirectory(allJsFiles);

// fs.writeFileSync('report.json', JSON.stringify(evaluation, null, '  '));
// console.log(JSON.stringify(evaluation, null, '  '));




console.log('\n... generating report.json\n');


const writeJsonReportsRecursive = (report) => {

  if (report.dirs) {
    report.dirs
      .forEach(report => writeJsonReports(report));
  }

  fs.writeFile(
    report.path + 'report.json',
    JSON.stringify(report, null, ''),
    (err) => { if (err) { console.log(err) } }
  );

};



const writeJsonReportsLight = (report) => {

  const strippedReport = JSON.stringify(
    report,
    (key, value) => key === 'report'
      ? undefined
      : value,
    '  ');

  fs.writeFile(
    report.path + 'report.json',
    strippedReport,
    (err) => { if (err) { console.log(err) } }
  );
}

writeJsonReportsLight(evaluation);


console.log('\n... generating REVIEWs\n');


const interpret = (key, value) => key === 'status'
  ? value === -1 ? ''
    : value === 0 ? 'pass'
      : value === 1 ? 'fail'
        : value === 2 ? 'error'
          : value === 3 ? 'syntaxError'
            : 'unknown status'
  : value;



const generateFileSectionMd = (fileReport) => {

  const divider = '---';

  const relPath = fileReport.path.split('/').pop();
  const header = `## [${relPath}](./${relPath}) - ${interpret('status', fileReport.status)}`;

  // const encoded = encodeURIComponent(fileReport.source);
  // const sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  // const deTabbed = sanitized.replace(/%09/g, '%20%20');
  // const jsTutorUrl = "http://www.pythontutor.com/live.html#code="
  //   + deTabbed
  //   + "&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
  // const jsTutorLink = `* [open in JS Tutor](${jsTutorUrl})`

  const renderedReport = fileReport.report
    .map(entry => {
      if (entry.error) {
        return entry.error.includes('SyntaxError')
          ? entry.error
          : 'x ' + entry.error;
      }
      if (entry.assertion) {
        const assertion = entry.assertion[0]
          ? '+ PASS: '
          : '- FAIL: ';
        const message = entry.assertion
          .slice(1)
          .toString();
        return assertion + message;
      }
    })
    .reduce((all, next) => all + next + '\n', '');

  const report = renderedReport
    ? '```txt\n' + renderedReport + '```\n\n'
    : '';

  const source = fileReport.source
    ? '```js\n' + fileReport.source + '\n```\n\n'
    : '';

  const topLink = '[TOP](#readme)';

  return divider + '\n\n'
    + header + '\n\n'
    // + jsTutorLink + '\n\n'
    + report
    + source
    + topLink + '\n';
}



const generateREVIEWs = (report) => {

  if (report.dirs) {
    report.dirs
      .forEach(report => generateREVIEWs(report));
  }


  const NOW = new Date();

  const dirName = path => {
    const pathArr = path
      .slice(0, path.length - 1)
      .split('/');
    return pathArr[pathArr.length - 1] + '/';
  }

  const top = `# ${dirName(report.path)} - ${interpret('status', report.status)}\n\n`
    + `> ${NOW.toDateString()}, ${NOW.toLocaleTimeString()}`;

  const fileList = report.files
    ? report.files
      .map(file => {
        const relPath = file.path.split('/').pop();
        const localHref = relPath.split('.').join('');
        return `* [${relPath}](#${localHref}---${interpret('status', file.status)}) - ${interpret('status', file.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const exerciseIndex = fileList
    ? `### exercises\n\n` + fileList + '\n'
    : '';

  const dirList = report.dirs
    ? report.dirs
      .map(dir => {
        const relPath = dirName(dir.path);
        return `* [${relPath}](./${relPath}REVIEW.md) - ${interpret('status', dir.status)}`;
      })
      .reduce((list, li) => list + li + '\n', '')
    : '';

  const subDirIndex = dirList
    ? `### sub-directories\n\n` + dirList + '\n'
    : '';


  const index = '* [../REVIEW.md](../REVIEW.md)\n\n'
    + exerciseIndex
    + subDirIndex;

  const fileSections = !report.files
    ? ''
    : report.files
      .map(fileReport => generateFileSectionMd(fileReport))
      .reduce((body, section) => body + section + '\n', '');

  const newREVIEW = top + '\n\n'
    + index
    + fileSections;

  fs.writeFileSync(
    report.path + 'REVIEW.md',
    newREVIEW,
    // (err) => { if (err) { console.log(err) } }
  );

};

generateREVIEWs(evaluation);

const topLevelREVIEWSource = fs.readFileSync('./REVIEW.md', 'utf-8');
const cleanedTopLevelREVIEWSource = topLevelREVIEWSource
  .split('* [../REVIEW.md](../REVIEW.md)\n').join('');
fs.writeFile('./REVIEW.md',
  cleanedTopLevelREVIEWSource,
  (err) => { if (err) { console.log(err) } }
);



console.log('\n... generating index.html\'s\n');

const generateFileSectionHtml = (fileReport) => {

  const divider = '<hr>';

  const relPath = fileReport.path.split('/').pop();
  const header = `<h2>${relPath} - ${interpret('status', fileReport.status)}</h2>`;


  const debuggerButton = `<button onclick="inDebugger('${fileReport.path}')">step through in debugger</button>`;

  const jsTutorButton = `<button onclick="inJsTutor('${fileReport.path}')">open in JS Tutor</button>`


  const textArea = `<textarea id="${fileReport.path}">\n${fileReport.source}\n    </textarea>`;

  const topLink = `<a href='#top'>TOP</a>`;

  return `
  ${divider}

  <section  id="${relPath}">
    ${header}
    ${debuggerButton}
    ${jsTutorButton}
    <br>
    <br>
    ${textArea}
    <br>
    <br>
    ${topLink}
  </section>`;
}



const generateIndexHtml = (report) => {

  if (report.dirs) {
    report.dirs
      .forEach(report => generateIndexHtml(report));
  }


  const NOW = new Date();

  const dirName = path => {
    const pathArr = path
      .slice(0, path.length - 1)
      .split('/');
    return pathArr[pathArr.length - 1] + '/';
  }

  const textAreaStyle = `<style>
    textarea {
      height: 75vh;
      width: 95vw;
    }
  </style>`;

  const inJsTutorScript = `<script>
    function inJsTutor(id) {
      const source = document.getElementById(id).value;
      const encoded = encodeURIComponent(source);
      const sanitized = encoded.replace(/\\(/g, '%28').replace(/\\)/g, '%29');
      const deTabbed = sanitized.replace(/%09/g, '%20%20');
      const jsTutorUrl = "http://www.pythontutor.com/live.html#code="
        + deTabbed
        + "&cumulative=false&curInstr=2&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
      window.open(jsTutorUrl, '_blank');
    }
  </script>`

  const inDebuggerScript = `<script>
    function inDebugger(id) {
      const source = document.getElementById(id).value;
      const debuggered = "debugger; // injected by review.js\\n\\n" + source;
      eval(debuggered);
    }
  </script>`

  const head = '<head>\n'
    + "  <meta charset='utf8'>\n"
    + `  <title>${dirName(report.path)}</title>\n`
    + '  ' + textAreaStyle + '\n'
    + '  ' + inJsTutorScript + '\n'
    + '  ' + inDebuggerScript + '\n'
    + '</head>\n';

  const header = `<header>
    <h1 id='top'>${dirName(report.path)} - ${interpret('status', report.status)}</h1>
    <code>${NOW.toDateString()}, ${NOW.toLocaleTimeString()}</code>
  </header>`;


  const fileList = report.files
    ? report.files
      .map(file => {
        const relPath = file.path.split('/').pop();
        return `      <li><a href='#${relPath}'>${relPath}</a> - ${interpret('status', file.status)}</li>`;
      })
      .reduce((lis, li) => lis + li + '\n', '')
    : '';

  const exercisesIndex = fileList
    ? ('  <h3>exercises</h3\n'
      + "  <ul>\n"
      + fileList + '\n'
      + '  </ul>\n\n')
    : '';

  const dirList = report.dirs
    ? report.dirs
      .map(dir => {
        const relPath = dirName(dir.path);
        return `      <li><a href='./${relPath}index.html'>${relPath}</a> - ${interpret('status', dir.status)}</li>`;
      })
      .reduce((lis, li) => lis + li + '\n', '')
    : '';

  const subDirIndex = dirList
    ? ('  <h3>sub-directories</h3\n'
      + "  <ul>\n"
      + dirList + '\n'
      + '  </ul>\n\n')
    : '';


  const index = '<br>\n\n  <li><a href="../index.html">../index.html</a></li>\n\n'
    + exercisesIndex
    + subDirIndex;

  const fileSections = !report.files
    ? ''
    : report.files
      .map(fileReport => generateFileSectionHtml(fileReport))
      .reduce((body, section) => body + section + '\n  <br>\n', '');

  const body = '<body>\n\n'
    + '  ' + header + '\n\n'
    + '  ' + index + '<br>'
    + '  ' + fileSections + '\n'
    + '</body>\n';

  const newIndex = '<!DOCTYPE html>\n'
    + "<html lang='en'>\n\n"
    + head + '\n'
    + body + '\n'
    + "</html>";


  fs.writeFileSync(
    report.path + 'index.html',
    newIndex,
    // (err) => { if (err) { console.log(err) } }
  );

};

generateIndexHtml(evaluation);

const topLevelIndexSource = fs.readFileSync('./index.html', 'utf-8');
const cleanedTopLevelIndexSource = topLevelIndexSource
  .split('<br>\n\n  <li><a href="../index.html">../index.html</a></li>\n\n').join('');
fs.writeFile('./index.html',
  cleanedTopLevelIndexSource,
  (err) => { if (err) { console.log(err) } }
);

console.log('... done!\n');
