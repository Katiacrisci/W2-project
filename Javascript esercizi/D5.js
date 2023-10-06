/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for (let i = pets.length - 1; i >= 0; i--) {
  const pet = pets[i];
  console.log(pet);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstElement = pets.shift();
pets.push(firstElement);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];

  car.licensePlate = generateString(7);
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const car = {
  brand: "Fiat",
  model: "500L",
  color: "gray",
  trims: ["sport", "echo"],
  licensePlate: generateString(7)
};
cars.push(car);
console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   delete car.trims;

// }
// console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  justTrims.push(car.trims.shift());
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const positionArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const character = charactersArray[i];

  switch (character) {
    case "a":
      positionArray.push(1);
      break;

    case "b":
      positionArray.push(2);
      break;

    case "c":
      positionArray.push(3);
      break;
    case "d":
      positionArray.push(4);
      break;

    case "e":
      positionArray.push(5);
      break;

    case "f":
      positionArray.push(6);
      break;

    case "g":
      positionArray.push(7);
      break;

    case "h":
      positionArray.push(8);
      break;
    case "i":
      positionArray.push(9);
      break;

    case "l":
      positionArray.push(10);
      break;

    case "m":
      positionArray.push(11);
      break;

    case "n":
      positionArray.push(12);
      break;

    case "o":
      positionArray.push(13);
      break;
    case "p":
      positionArray.push(14);
      break;

    case "q":
      positionArray.push(15);
      break;

    case "r":
      positionArray.push(16);
      break;

    case "s":
      positionArray.push(17);
      break;

    case "t":
      positionArray.push(18);
      break;
    case "u":
      positionArray.push(19);
      break;

    case "v":
      positionArray.push(20);
      break;

    case "z":
      positionArray.push(21);
      break;

    default:
      console.log(character, "is not an italian letter");
      break;
  }
}
console.log(positionArray);