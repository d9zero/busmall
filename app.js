var parentElement = document.getElementById('cat-container');

new Cat('../img/boxcat.jpg', 'cat in a box', 'cat');
new Cat('../img/chargingCat.jpg', 'charging car')
new Cat('../img/cuddleCars.jpg', )

function getRandomIamge(){
  var randomIndex = getRandomNumber(catArray.length);
  var chosenImage = catArray [randomIndex];
}

var catArray = [];

function Cat(filepath, alt, title){
  this.filepath =filepath;
  this.alt = alt;
  this.title = title;
  this.clicks = 0;

  catArray.push(this);
}

var carObject = new Cat('../img/boxcat.jpg', 'cat in a box');

var imageElement = document.createElement('img');

imageElement.setAttribute('src', catObject.filepath);

imageElement.setAttribute('alt', catObject.alt);

imageElement.setAttribute('title', catobject.title);

parentElement.appendChild(imageElement);

function getRandomNumber(max){
  return Math.floor(Math.random() * Math.floor)
}
function handleClick{
  console.log('an image was clicked')
  parentElement.innerHTML = '';
  getRandomIamge();
  getRandomIamge();

  var alt = event.target.alt;

  for(var i=0; i<catArray.length; i++){
    if(alt === catArray[i].alt){
      catArray[i].clicks++;
    }
  }
  // clears html element for new image
}

parentElement.addEventListener('cat', handleClick);

var pugbombButton = document.getElementById('pugbomb');
pugbombButton.addEventListener('click', pugbombButtonHandler());

function pugbombButtonHandler() {
  alert('PUGBOMB!!!!');
}