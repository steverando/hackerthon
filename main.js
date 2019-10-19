$(document).ready(function(){

    function generate() {
        $('#l1').text(Math.floor(Math.random() * 7) +1);
      }
      setInterval(generate, 1000);
      cossole.log("l1")

      $("r1").css({"background-color": "yellow", "font-size": "200%"});

});

// A function to return a random number between a min and a max value
// function randomNumber(min, max) {
//     number = Math.floor((Math.random() * (max - min)) + min);
//     return number;
// }

// //Initialise starting values
// var purple, blue, cyan, green, yellow, orange, red;
// purple = 10;
// blue = 10;
// green = 10;
// orange = 10;

// //To start with the equalizer is paused
// var playing = false;

// // A Function to change the height of a column more or less randomly
// function changeHeight(column, height) {
//     height -= randomNumber(-20, 20);
//     if (height > 200) height = 200;
//     if (height < 5) height = 5;
//     column.style.height = height + "px";
//     return height;
// }


// //A Function that will be run every 50ms to animate the equalizer
// function animate() {
//     if (playing) {
//         purple = changeHeight(document.getElementById("purple"), purple);
//         blue = changeHeight(document.getElementById("blue"), blue);
//         green = changeHeight(document.getElementById("green"), green);
//         orange = changeHeight(document.getElementById("orange"), orange);

//         //Repeat this function every 50 ms
//         setTimeout(animate, 100);
//     }
// }

// //A Function to play or pause the animation
// function play() {
//     if (playing) {
//         playing = false;
//         document.getElementById("button").value = "Play";
//     } else {
//         playing = true;
//         document.getElementById("button").value = "Pause";
//         animate();
//     }
// }