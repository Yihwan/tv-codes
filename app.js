var inputs = [];
const mrRobot = 'mrrobot';

function checkShows() {
  var parsed = inputs.filter((str) => /\S/.test(str)).join('').toLowerCase();

  if (parsed.includes(mrRobot)) {
    cornify_add();
    inputs = [];
  }
}

window.addEventListener('keyup', (e) => {
  inputs.push(e.key);
  checkShows();
  console.log(inputs);
});
