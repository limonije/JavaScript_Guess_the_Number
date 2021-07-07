let name = prompt ("Welkom! Wat is je naam?");
alert (`Hey ${name}`);

let number = prompt ("Voer een nummer in van 0 tot 25 om te beginnen met raden");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const randomNumber = getRandomInt(0,25);

if (number == randomNumber) {
        alert ('Gefeliciteerd je hebt gewonnen');
        alert (`Dag ${name}. Tot de volgende keer`)
    } else {
        alert (`Dat is niet correct, het goede nummer was ${randomNumber}`);
        alert (`Wil je nog een keer raden?`);
    }





