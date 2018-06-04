var inputs = [];
const mrRobot = 'mrrobot';
const got = 'gameofthrones';

function checkShows() {
  var parsed = inputs.filter((str) => /\S/.test(str)).join('').toLowerCase();

  if (parsed.includes(mrRobot)) {
    inputs = [];
    addImage(mrRobot);
  }

  if (parsed.includes(got)) {
    inputs = [];
    addImage(got);
  }
}

function addImage(show) {
  var image = document.createElement('img');
  var [docWidth, docHeight] = [document.body.clientWidth, document.body.clientHeight];

  image.setAttribute('src', `assets/images/${show}.gif`);

  document.body.appendChild(image);

  image.addEventListener('load', function() {
    var randX = (Math.random() * docWidth) - image.width;
    var randY = (Math.random() * docHeight) - image.height;

    randX = randX < 0 ? 0 : randX;
    randY = randY < 0 ? 0 : randY;

    var randPos = [ randX, randY ];

    image.style.position = 'absolute';
    image.style.left = `${randPos[0]}px`;
    image.style.top = `${randPos[1]}px`;
  });
}

window.addEventListener('keyup', (e) => {
  inputs.push(e.key);
  checkShows();
});
