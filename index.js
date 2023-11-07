var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;
      
      case "g":
        var guitar1 = new Audio("guitar1.wav");
        guitar1.play();
        break;
  
      case "h":
        var guitar2 = new Audio("guitar2.wav");
        guitar2.play();
        break;
  
      case "i":
        var guitar3 = new Audio('guitar3.wav');
        guitar3.play();
        break;
  
      case "e":
        var guitar4 = new Audio('guitar4.wav');
        guitar4.play();
        break;
  
      case "f":
        var guitar5 = new Audio('guitar5.wav');
        guitar5.play();
        break;
  
      case "n":
        var flute = new Audio('flute.wav');
        flute.play();
        break;
  
      case "u":
        var chbell = new Audio('chbell.wav');
        chbell.play();
        break; 
        
        case "c":
          var thriller = new Audio('thriller.mp3');
          thriller.play();
          break;
    
        case "v":
          var tone = new Audio('tone.mp3');
          tone.play();
          break;
    
        case "b":
          var clt = new Audio('clocktick.mp3');
          clt.play();
          break;
    
        case "m":
          var crash = new Audio('crash.mp3');
          crash.play();
          break;
    
        case "x":
          var drum = new Audio('drum.wav');
          drum.play();
          break;    


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  activeButton.classList.add("extra");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
    activeButton.classList.remove("extra");
  }, 100);

}
