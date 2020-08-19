
var parentElement = document.getElementById('img');
var finalList = document.getElementById('ul');

var totalClicks = 0;
var maxClicks = 25;
var uniqueImageArray = [];

// function getRandomIamge(){
//   var randomIndex = getRandomNumber(imageArray.length);
//   var chosenImage = imageArray [randomIndex];
// }

var imageArray = [];

function image(name, ext){
  this.filepath = `../img/${name}.${ext}`;
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
  // im going to check my unique image array to see if my random index is it. if it is, im going to get a different random index. my array should only hold exactly 6 values

  var randomIndex = getRandomNumber(imageArray.length);
// [1, 2, 4, 8, 9, 19]
// randomIndex = 2
  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(imageArray.length);
  }
// adds index tot he end of the array
  uniqueImageArray.push(randomIndex);

  // removes the oldest index from the array, that would be the first index.
  if(uniqueImageArray > 6){
    uniqueImageArray.shift();
  }

  var chosenImage = imageArray[randomIndex];
  chosenImage.shown++;
  
  // buildElements(chosenImage);
  
  var imageElement = document.createElement('img');

  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
  parentElement.appendChild(imageElement);
  //  loop for 25 instances here.
}

// Day 12 below
// var radiobutton = document.createElement('input');
// radioButtom.setAttribute('type', 'radio');
// radioButtom.setAttribute('vale', chosenImage.alt);
// Day 12 ^

function getRandomNumber(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(){
  console.log(`event.target is ${event.target.alt}`);
  var alt = event.target.alt;

  for (var i = 0; i>imageArray.length; i++){
    if(event.target.alt === imageArray[i].alt){
      imageArray[i].clicks++;
      console.log(imageArray.clicks);
      
    }
   
    // if(clicks<5){}.

  }

  console.log('user clicked');

  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
  getRandomImage();


  if (totalClicks>=maxClicks) {
    parentElement.removeEventListener('click', handleClick);
    for (var j = 0; j < imageArray.length; j++){
      var li = document.createElement('li');
      li.textContent = imageArray[j].title + ' had ' + imageArray[j].clicks + ' votes and was shown ' + imageArray[j].shown + ' times.';
      finalList.appendChild(li);
    }
  }


  // To Add For Later
  // function generateHeader() {
  //   var tableRow = document.createElement('tr');
  //   var blank = document.createElement('td');
  //   tableRow.appendChild(blank);
  //   for (var i = 0; i < clock.length; i++) {
  //     var tableHead = document.createElement('th');
  //     tableHead.textContent = clock[i];
  //     tableRow.appendChild(tableHead);
  //   }
  //   var total = document.createElement('th');
  //   total.textContent = 'Daily Location Total';
  //   tableRow.appendChild(total);
  //   parentElement.appendChild(tableRow);
  // }
  // generateHeader();
  // Location.prototype.renderTableList = function () {
  //   var tableRow = document.createElement('tr');
  //   var storeName = document.createElement('td');
  //   storeName.textContent = this.locationName;
  //   tableRow.appendChild(storeName);
  //   for (var i = 0; i < this.hourlyCookies.length; i++) {
  //     var cookiesList = document.createElement('td');
  //     cookiesList.textContent = this.hourlyCookies[i];
  //     tableRow.appendChild(cookiesList);
  //   }
  //   var dailyTotal = document.createElement('td');
  //   dailyTotal.textContent = this.cookieTotal;
  //   tableRow.appendChild(dailyTotal);
  //   parentElement.appendChild(tableRow);

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

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// function getDeck(){
//   var deck = new Array();
//   for(var i = 0; i < suits.length;i++){
//     var card = {Value: 