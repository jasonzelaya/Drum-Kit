// --------------EVENT LISTENERS---------------------

// Trigger event listeners on click
$('.drum').click(function() {
  // The button clicked
  var buttonClicked = $(this).html();

  // Play a sound for the button clicked
  playSound(buttonClicked);

  // Trigger the fade in/out animation when a button is clicked
  btnAnimation(buttonClicked);
});


// Trigger event listeners on keypress
$(document).keypress(function(evt) {

  // Play a sound for a button's keypress
  playSound(evt.key);

  // Trigger the fade in/out animation when a button is keypressed
  btnAnimation(evt.key);
});


// --------------FUNCTIONS---------------------


// Play a sound relative to the button event fired
function playSound(key) {
  // Switch statement
  switch (key) {
    // Play tom-1.mp3 sound if the "w" button event is fired
    case "w":
      // Assign tom1 the tom-1.mp3 audio file to be played when the "w" button event is fired
      var tom1 = new Audio('assets/sounds/tom-1.mp3');
      // Play the tom-1.mp3 audio file
      tom1.play();
      // Stop execution of switch statement if this case's code block was executed
      break;

    // Play tom-2.mp3 sound if the "a" button event is fired
    case "a":
      // Assign tom2 the tom-2.mp3 audio file to be played when the "a" button event is fired
      var tom2 = new Audio('assets/sounds/tom-2.mp3');
      // Play the tom-2.mp3 audio file
      tom2.play();
      // Stop execution of switch statement if this case's code block was executed
      break;

    // Play tom-3.mp3 sound if the "s" button event is fired
    case "s":
      // Assign tom3 the tom-3.mp3 audio file to be played when the "s" button event is fired
      var tom3 = new Audio('assets/sounds/tom-3.mp3');
      // Play the tom-3.mp3 audio file
      tom3.play();
      // Stop execution of switch statement if this case's code block was executed
      break;

    // Play tom-4.mp3 sound if the "d" button event is fired
    case "d":
      // Assign tom4 the tom-4.mp3 audio file to be played when the "d" button event is fired
      var tom4 = new Audio('assets/sounds/tom-4.mp3');
      // Play the tom-4.mp3 audio file
      tom4.play();
      // Stop execution of switch statement if this case's code block was executed
      break;

    // Play snare.mp3 sound if the "j" button event is fired
    case "j":
      // Assign snare the snare.mp3 audio file to be played when the "j" button event is fired
      var snare = new Audio('assets/sounds/snare.mp3');
      // Play the snare.mp3 audio file
      snare.play();
      // Stop execution of switch statement if this case's code block was executed
      break;

    // Play crash.mp3 sound if the "k" button event is fired
    case "k":
      // Assign crash the crash.mp3 audio file to be played when the "k" button event is fired
      var crash = new Audio('assets/sounds/crash.mp3');
      // Play the crash.mp3 audio file
      crash.play();
      // Stop execution of switch statement if this case's code block was executed
      break;

    // Play kick-bass.mp3 sound if the "l" button event is fired
    case "l":
      // Assign kick the kick-bass.mp3 audio file to be played when the "l" button event is fired
      var kick = new Audio('assets/sounds/kick-bass.mp3');
      // Play the kick-bass.mp3 audio file
      kick.play();
      // Stop execution of switch statement if this case's code block was executed
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
