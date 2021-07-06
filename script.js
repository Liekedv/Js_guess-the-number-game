let person = prompt("Welkom! Wat is je naam?");
let text;{
alert("Hey " + person);
}

var answer = Math.floor(Math.random() * 25) + 1
var guess = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");

for (i=0; i<10; i++){

 if (answer == guess){
   alert("Gefeliciteerd je hebt gewonnen");
   break;
 } else {
   guess = prompt("Dat is niet correct. Probeer het nog eens")
   break;
 }
};
document.write("Dag" + person);