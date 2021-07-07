let name = prompt ("Welkom! Wat is je naam?");
alert (`Hey ${name}`);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const randomNumber = getRandomInt(0, 25);

let number;

for (let i = 0; i <= 4; i++) {
  number = prompt(`Voer een nummer in van 0 tot 25`);
  console.log(number);
  if (number == randomNumber) {
        alert ('Gefeliciteerd je hebt gewonnen');
        alert (`Dag ${name}. Tot de volgende keer`);
        i = 5;
    } else if (i < 4) {
        alert (`Dat is niet correct. Wil je nog een keer raden? Je hebt nog ${4 - i} poging(en).`);
    } else {  
        alert (`Helaas, je hebt het nummer niet geraden. Het goede nummer was ${randomNumber}. Hopelijk lukt het een volgende keer!`)
    }
}






