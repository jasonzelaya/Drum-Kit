// --------------EVENT LISTENERS---------------------

// Trigger event listeners on click
$('.drum').click(function() {
  // The button clicked
  var buttonClicked = $(this).html();

  // Play a sound for each button
  playSound(buttonClicked);

  // Trigger the fade in/out animation when a button is clicked
  btnAnimation(buttonClicked);
});


// Trigger event listeners on keypress
$(document).keypress(function(evt) {

  // Play a sound for each button
  playSound(evt.key);

  // Trigger the fade in/out animation when a button is clicked
  btnAnimation(evt.key);
});


// --------------FUNCTIONS---------------------


// Play a sound contingent upon the relative button/key event fired
function playSound(key) {
  // Switch statement
  switch (key) {
    // Play tom-1.mp3 sound if the "w" button event is fired
    case "w":
      var tom1 = new Audio("assets/sounds/tom-1.mp3");
      tom1.play();
      break;

    // Play tom-2.mp3 sound if the "a" button event is fired
    case "a":
      var tom2 = new Audio("assets/sounds/tom-2.mp3");
      tom2.play();
      break;

    // Play tom-3.mp3 sound if the "s" button event is fired
    case "s":
      var tom3 = new Audio('assets/sounds/tom-3.mp3');
      tom3.play();
      break;

    // Play tom-4.mp3 sound if the "d" button event is fired
    case "d":
      var tom4 = new Audio('assets/sounds/tom-4.mp3');
      tom4.play();
      break;

    // Play snare.mp3 sound if the "j" button event is fired
    case "j":
      var snare = new Audio('assets/sounds/snare.mp3');
      snare.play();
      break;

    // Play crash.mp3 sound if the "k" button event is fired
    case "k":
      var crash = new Audio('assets/sounds/crash.mp3');
      crash.play();
      break;

    // // Play kick-bass.mp3 sound if the "w" button event is fired
    case "l":
      var kick = new Audio('assets/sounds/kick-bass.mp3');
      kick.play();
      break;

    // If none of the above events are fired print the pressed key to the console
    default: console.log(key);
    }
  }


// Button fade out/in animation when a button event is fired
function btnAnimation(btnEvent) {
  // Assign activeButton a class relative to the button event fired
  var activeButton = $("." + btnEvent);
  // Add a "pressed" class to activeButton to trigger the fade out
  activeButton.addClass("pressed");
  // Fade in 100 milliseconds after the fade out animation
  setTimeout(function() {
    // Remove the "pressed" class
    activeButton.removeClass("pressed");
    // Fade in after 100 milliseconds
  }, 100);
}
