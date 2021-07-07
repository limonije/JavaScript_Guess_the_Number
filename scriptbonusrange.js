let name = prompt ("Welkom! Wat is je naam?");
alert (`Hey ${name}! Laten we het spel gaan spelen.`);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let minNr = prompt ("Je bepaalt zelf eerst de reeks van nummers waaruit de computer een willekeurig nummer kiest. Dit nummer ga je daarna in 5 pogingen raden. Kies eerst het kleinste nummer.");
let maxNr = prompt ("Kies nu het grootste nummer.");
const randomNumber = getRandomInt(minNr, maxNr);

let number;

for (let i = 0; i <= 4; i++) {
  number = prompt(`Voer een nummer in van ${minNr} tot ${maxNr}.`);
  console.log(number);
  if (number == randomNumber) {
        alert ('Gefeliciteerd je hebt gewonnen!');
        alert (`Dag ${name}. Tot de volgende keer.`);
        i = 5;
    } else if (i < 4) {
        alert (`Dat is niet correct. Wil je nog een keer raden? Je hebt nog ${4 - i} poging(en).`);
    } else {  
        alert (`Helaas, je hebt het nummer niet geraden. Het goede nummer was ${randomNumber}. Hopelijk lukt het een volgende keer!`)
    }
}






