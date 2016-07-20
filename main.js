var facts = ["It's the 201st day of the year.", " The United States and Cuba resume full diplomatic relations after five decades.", "It's Alexander the Great's birthday.", "Drummer for the Sex Pistols, Paul Cook's birthday.", "Pope Leo XIII died in 1903", "In 1801, Elisha Brown Jr pressed a 1,235 pound cheese ball at his farm", "In 1969 Neil Armstrong and Buzz Aldrin landed on the moon", "In 2012, it was National Lollipop Day", "In 2012 it was Cleat Dancing Day, a day to see how much fun it is, if any, to tap dance while wearing baseball cleats.", "1940 - Billboard Magazine's first \"Music Popularity Chart.\"", "In 1976, The American Viking 1 lander successfully landed on Mars.", "In 1940, Denmark left the League of Nations."];

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/cake.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/dog.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/shoe.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/light.png';
imgArray[0] = new Image();
imgArray[0].src = 'images/mtn.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/mountain.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/plane.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/plant.png';
imgArray[0] = new Image();
imgArray[0].src = 'images/rain.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/comp.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/alien.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/leaf.jpg';
imgArray[0] = new Image();
imgArray[0].src = 'images/brain.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/teepee.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/speach.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/world.png';


function generate() {
    return Math.floor(Math.random() * facts.length);
}

function generateImg() {
    return Math.floor(Math.random() * imgArray.length);
}

// getting the current date
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate());
$('.day').html(dayNames[newDate.getDay()] +" </br> " + monthNames[newDate.getMonth()] + " " + newDate.getDate() + ', ' + newDate.getFullYear());

$("button").on('click', function(){
  $("#fact h2").html(facts[generate()]);
})

$("button").on('click', function(){
  $("#icon").html(imgArray[generateImg()]);
})
