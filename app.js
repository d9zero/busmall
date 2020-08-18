
var parentElement = document.getElementById('lab-assets');


// function getRandomIamge(){
//   var randomIndex = getRandomNumber(imageArray.length);
//   var chosenImage = imageArray [randomIndex];
// }

var imageArray = [];

function image(name, ext){
  this.filepath = `../lab-assets/${name}.${ext}`;
  this.alt = name;
  this.title = name;
  this.clicks = 0;

  imageArray.push(this);
}

new image("bag","jpg");
new image("banana","jpg");
new image("bathroom","jpg");
new image("boots","jpg");
new image("breakfast","jpg");
new image("bubblegum","jpg");
new image("chair","jpg");
new image("cthulhu","jpg");
new image("dog-duck","jpg");
new image("dragon","jpg");
new image("pen","jpg");
new image("scissors","jpg");
new image("shark","jpg");
new image("sweep","png");
new image("tauntaun","jpg");
new image("unicorn","jpg");
new image("usb","gif");
new image("water-can","jpg");
new image("wine-glass","jpg");
new image("wireframe","png");

function getRandomImage(){
  var randomIndex = getRandomNumber(imageArray.length);
  var chosenImage = imageArray[randomIndex];
  
  var imageElement = document.createElement('img');

  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
  parentElement.appendChild(imageElement);
  //  loop for 25 instances here.
}

function getRandomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(){
  console.log(`event.target is ${event.target.alt}`);
  // var alt = event.target.alt;

  for (var i = 0; i>imageArray.length; i++){
    if(event.target.alt === imageArray[i].alt){
      imageArray[i].clicks++;
      console.log(imageArray.clicks);
      
    }
    
  }

  console.log('user clicked');

  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
  getRandomImage();

  // var alt = event.target.alt;

  // for(var i=0; i<imageArray.length; i++){
  //   if(alt === imageArray[i].alt){
  //     imageArray[i].clicks++;
  //   }
  // }
  // clears html element for new image
}

//  this.click display
// display to table, last part of salmon cookies



parentElement.addEventListener('click', handleClick);

getRandomImage();
getRandomImage();
getRandomImage();

// var pugbombButton = document.getElementById('pugbomb');
// pugbombButton.addEventListener('click', pugbombButtonHandler());

// function pugbombButtonHandler() {
//   alert('PUGBOMB!!!!');
// }