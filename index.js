// Oppgave 1
let tekst1 = "Ka"
let tekst2 = "is"

console.log(tekst1);
console.log(tekst2);

console.log(tekst1 + tekst2);
console.log(tekst1, tekst2);

// Oppgave 2

let talli = Number(prompt("Skriv et tall"))
console.log(talli);
console.log(typeof(talli));

if (tall1 > 0) {
console.log(`Tall ${talli} er et positivt tall`);

} else if (talli < 0) {
console.log(`Tall ${talli} er et negativt tall`);

} else {
console.log(`Tall ${talli} er 0`);    
}

// Oppgave 4
let number1 = Number(prompt("Skriv inn tall nummer 1"))
let number2 = Number(prompt("Skriv inn tall nummer 2"))
let number3 = Number(prompt("Skriv inn tall nummer 3"))


if (number1 > number2 && number1 > number3) {
    console.log("Tallet", number1,"Er størst");
} else if (number2 > number1 && number2 > number3) {
    console.log("Tallet", number2, "Er størst");
} else {
    console.log("Tallet", number3, "Er størst");
}

// Oppgave 5

let karakter = Number(prompt("Skriv inn elevens karakter"))

if (karakter >= 50) {
    console.log("Bestått");
} else {
    console.log("Ikke bestått");
}

// oppgave 6

let mandag = 1
let tirsdag = 2
let onsdag = 3
let torsdag = 4
let fredag = 5
let lørdag = 6
let søndag = 7

let ukedag = prompt("Hvilken dag er det idag")

if (ukedag == "mandag") {
    console.log("idag er den", mandag, "dagen i uken");  
} else if (ukedag =="tirsdag") {
    console.log("idag er den", tirsdag, "dagen i uken");
} else if (ukedag =="onsdag") {
    console.log("idag er den", onsdag, "dagen i uken");
} else if (ukedag =="torsdag") {
    console.log("idag er den", torsdag, "dagen i uken");
} else if (ukedag =="fredag") {
    console.log("idag er den", fredag, "dagen i uken");
} else if (ukedag =="lørdag") {
    console.log("idag er den", lørdag, "dagen i uken");
} else if (ukedag =="søndag") {
    console.log("idag er den", søndag, "dagen i uken");
} else {
    console.log("vennligst skriv en av dagene i uken!");
    
}

// oppgave 7

cels = prompt("Hva er tempraturen (oppgi i Celsius.)")

fahren = cels*1.8+32

console.log(fahren, "Fahrenheit");

// oppagave 8 

kar1= Number(prompt("Karakter nummer 1"))
kar2= Number(prompt("Karakter nummer 2"))
kar3= Number(prompt("Karakter nummer 3"))

Gjennomsnitt = (kar1 + kar2 + kar3)/3

if (Gjennomsnitt >= 50) {
    console.log("Bestått med gjennomsnitt på", Gjennomsnitt);
    
} else {
    console.log("Ikke bestått med gjennomsnitt på", Gjennomsnitt);
    
}

// oppgave 9

let tall1 = Number(prompt("Skriv inn tall nummer 1"))
let tall2 = Number(prompt("Skriv inn tall nummer 2"))
let tall3 = Number(prompt("Skriv inn tall nummer 3"))


if (tall1 < tall2 && tall1 < tall3) {
    console.log("Tallet", tall1,"Er minst");
} else if (tall2 < tall1 && tall2 < tall3) {
    console.log("Tallet", tall2, "Er minst");
} else {
    console.log("Tallet", tall3, "Er minst");
}


// oppgave 10 

let bokstav = prompt("Skriv inn en bokstav")

if (bokstav = "a" && "e" && "i" && "o" && "u" && "y" && "æ" && "ø" && "å") {
    console.log("Vokal");
} else {
    console.log("Konstant");
}