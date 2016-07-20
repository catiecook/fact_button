var facts = ["It's the 201st day of the year.", " The United States and Cuba resume full diplomatic relations after five decades.", "It's Alexander the Great's birthday.", "Drummer for the Sex Pistols, Paul Cook's birthday.", "Pope Leo XIII died in 1903", "In 1801, Elisha Brown Jr pressed a 1,235 pound cheese ball at his farm", "In 1969 Neil Armstrong and Buzz Aldrin landed on the moon", "In 2012, it was National Lollipop Day", "In 2012 it was Cleat Dancing Day, a day to see how much fun it is, if any, to tap dance while wearing baseball cleats.", "1940 - Billboard Magazine's first \"Music Popularity Chart.\"", "In 1976, The American Viking 1 lander successfully landed on Mars.", "In 1940, Denmark left the League of Nations."];

function generate() {
    return Math.floor(Math.random() * facts.length);
}

$("button").on('click', function(){
  $("#fact h2").html(facts[generate()]);
})
