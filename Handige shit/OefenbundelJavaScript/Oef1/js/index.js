// Om deel te nemen aan de spelen van de Natiknale Loterij moet je minimum 18 jaar oud zijn.
// Ontwerp een consoletoepassing waarmee je de leeftijd van de gebruiker opvraagt.
// Als de ingevoerde leeftijd minimum 18 jaar bedraagt, krijgt de gebruiker toegang tot de site van de nationale loterij en verschijnt de tekst:
// "Je bent x jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.". Indien niet voldaan is aan deze voorwaarde verschijnt de tekst:
// "Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.".
// let leeftijd = parseInt(window.prompt("Geef hier u leeftijd in"))
// if (leeftijd >= 18)
// {
//     alert(`Je bent ${leeftijd} jaar oud, je mag deelnemen aan de spelen van de Nationale Loterij.`)
// }
// else
// {
//     alert(`om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.`)
// }

// 1.1.2. Oefening 2
// Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.
// Ontwerp een consoletoepassing waarmee je de leeftijd van de gebruiker opvraagt.
// Als de ingevoerde leeftijd minimum 18 jaar bedraagt, krijgt de gebruiker toegang tot de site van de nationale loterij en verschijnt de tekst:
// "Je bent x jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.". Indien niet voldaan is aan deze voorwaarde verschijnt de tekst:
// "Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.".
// Wanneer men 18 jaar of ouder is dient men te vragen of ze een volledig bulletin van 12 vakjes willen spelen.
// Bij een volledig bulletin toon je de kostprijs van 20 euro.
// Voor 2 vakjes is de kostprijs 4 euro. Voor 4 vakjes 8 euro. Voor 6 vakjes 12 euro. Voor 8 vakjes 16 euro. Voor 10 vakjes 18 euro.

// let leeftijd = parseInt(window.prompt("Geef hier u leeftijd in"))
// if (leeftijd >= 18)
// {
//     alert(`Je bent ${leeftijd} jaar oud, je mag deelnemen aan de spelen van de Nationale Loterij.`)
// }
// else
// {
//     alert(`om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.`)
// }

// 1.2. Rubriek Iteraties
// 1.2.1. Oefening 1 - For Loop
// Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
//     De totale som van x getallen is x.
//     Voorbeeld:
// Hoeveel getallen?: 3
// Geef getal 1 in: 4
// Geef getal 2 in: 3
// Geef getal 3 in: 2
// De totale som van 3 getallen is 9.

// let getallen = parseInt(window.prompt("Geef het aantal getallen in"))
// let som = 0
// let aantal = getallen
//
// while (getallen >= 1)
//
// {
//    let getal = parseInt(window.prompt("Geef hier een getal in"))
//     som = som + getal
//     getallen--
//
// }
//
// console.log(`De totale som van de ${aantal} getallen is ${som}`);

// 1.2.2. Oefening 2 - For Loop
// • Schrijf een programma die het volgende op het scherm weergeeft:
//     • De gebruiker geeft het maximum aantal sterren in: (bijv. 5)
// *
// **
// ***
// ****
// *****

// let aantalsterren = parseInt(window.prompt("Geef het aantal sterren in"));
// let ster = ""
// let teller = 1
//
// while (teller <= aantalsterren)
// {
//     aantalsterren--
//     ster = ster + "*"
//     console.log(ster)
//
// }



// 1.2.3. Oefening 3 - For Loop
// • Schrijf een programma die het volgende op het scherm weergeeft:
//     •De gebruiker geef een even aantal even lijnen in.
// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *

// let aantalsterren = parseInt(window.prompt("Geef het aantal sterren in"))
// let ster = ""
// let teller1 = 1
// let teller = aantalsterren
//
// while (teller1 <= aantalsterren)
// {
//     aantalsterren--
//     ster = ster + "*"
//     console.log(ster)
//
// }
//
// while (teller > 0) {
//     let ster = ""
//     let getal = 0
//     while (getal < teller) {
//         ster = ster + "*"
//         getal++
//     }
//
//     console.log(ster)
//     teller--
// }

// 1.2.4. Oefening 4 - For Loop
// • Schrijf een programma die de facultateit van een getal weergeeft.
// • De faculteit van 5 is bijvoorbeeld:
//     • 5x4x3x2x1 = 120
// • Vraag dit getal aan de gebruiker

// let getal = parseInt(window.prompt("Geef hier een getal in"))
// let facultiet = 1
// while (getal >= 1){
//     facultiet *= getal
//     getal--
//
// }
// console.log(facultiet)

// 1.2.5. Oefening 4 - For Loop
// Schrijf een programma die je alle potentiële mogelijk combinaties geeft in een 2-decimale vorm uitgeprint met een komma ertussen tot en met 99.
// • Voorbeeld van de output:
//     • 00,01,02,03,04,05,06,08,09,10,11 .. 99

// const getallen = [];
// const getal = parseFloat(prompt("Geef hier een getal in"));
//
// for (let i = 0; i <= getal; i++) {
//     if(i<10) {
//         getallen.push("0"+i);
//     }
//     else {
//         getallen.push(""+i)
//     }
// }
// console.log(getallen);


// 1.2.6. Oefening 6 - For Loop
// • Schrijf een programma die een karakter telt in een tekenreeks(string).
// • Tip: maak hierbij gebruik van een built-in functie.

// const tekst = prompt("Geef een tekst in:");
// const karakter = prompt("Welk karakter wil je tellen?");
//
// // split de string op het gekozen karakter
// // het aantal keren = aantal stukken - 1
// const aantal = tekst.split(karakter).length - 1;
//
// console.log(aantal);


// 1.2.7. Oefening 7 - For Loop
// • Schrijf een programma waar je de gebruiker naar een getal vraagt.
// Controleer ieder getal tussen O en het ingegeven getal en druk de even getallen af op het scherm.


// const getallen = []
// let getal = parseInt(prompt("Geef hier een getal in"))
// let i = 1
// while (getal>i)
// {
//     if(i % 2 === 0)
//     getallen.push(i)
//     i++
// }
// alert(getallen)


// 1.2.8. Oefening 8 - For Loop
// • Schrijf een programma die de volgende reeks horizontaal op het scherm schrijft:
//     • Voorbeeld:
//     • Vraag een getal aan de gebruiker:
//     • Wanneer dit getal bijvoorbeeld 100 is dan is de volgende reeks de uitkomst:
//     • 1,2, 4, 8, 16, 32, 64
// • Wanneer dit getal bijvoorbeeld 130 is dan is de volgende reeks de uitkomst:
//     • 1,2, 4, 8, 16, 32, 64, 128


// const getallen = []
// let limiet = parseInt(prompt("Geef hier een limiet in"))
// for(let i = 1;i<=limiet;i=i*2){
//     getallen.push(i)
// }
// console.log(getallen);


// 1.2.9. Oefening 9 - For Loop
//
// • Schrijf een programma die alle priemgetallen in een rij afdrukt.
//
// • Voorbeeld:
//
// • Vraag een eindgetal aan de gebruiker: Alle getallen gelijk aan en lager dan het eindgetal dienen te worden getest. Zijn ze een priemgetal of niet.
//
// • Een priemgetal is enkel deelbaar door 1 en zichzelf.


// const getallen = []
// let eindgetal = parseInt(prompt("Geef hier het eindgetal in"))
// let primgetal = 2;
//
// while (primgetal <= eindgetal) {
//     let prime = true;
//
//     let i = 2;
//
//     while (i < primgetal) {
//         if (primgetal % i === 0) {
//             prime = false;
//             break;
//         }
//         i++;
//     }
//
//     if (prime) {
//         getallen.push(primgetal)
//     }
//     primgetal++;
// }
//
// console.log(getallen);

// const getallen = [];
// let eindgetal = parseInt(prompt("Geef hier het eindgetal in"));
//
// for (let primgetal = 2; primgetal <= eindgetal; primgetal++) {
//     let prime = true;
//
//     for (let i = 2; i < primgetal; i++) {
//         if (primgetal % i === 0) {
//             prime = false;
//             break;
//         }
//     }
//
//     if (prime) {
//         getallen.push(primgetal);
//     }
// }
//
// console.log(getallen);


// 1.2.10. Oefening 10 - For Loop

// • Schrijf een programma dat de tafels van vermenigvuldiging afdrukt:
// • Voorbeeld: Je vraagt aan de gebruiker de tafel: 1
// • Je vraagt aan de gebruiker het eindgetal: 12
// • Weergave: (onderstaande weergave dient exact op deze manier op het schem te verschijnen)
// • 1 x 1 = 1, 1 x 2 = 2, 1 x 3 = 3
// • 1 x 4 = 4, 1 x 5 = 5, 1 х 6 = 6
// • 1 x 7 = 7, 1 x 8 = 8, 1 x 9 = 9
// • 1 x 10 = 10, 1 x 11 = 11, 1 x 12 = 12

// let getal = parseInt(prompt("Geef hier het getal in"));
// let eindgetal = parseInt(prompt("Geef hier het eindgetal in"));
//
// for (let getal2 = 1; getal2 <= eindgetal; getal2++) {
//     let i = getal * getal2;
//     console.log(`${getal} x ${getal2} = ${i}`);
// }



// 1.2.11. Oefening 11 - For Loop
// • Schrijf een programma die de getallenreeks van Fibonacci opsomt.
// • Vraag aan de gebruiker hoeveel getallen er dienen te worden weergegeven.
// • Voorbeeld:
// • 0,1, 1, 2, 3, 5, 8, 13, 21, ....

// let limiet = parseInt(prompt("Geef hier een getal in"))
// let a = 1, b = 1;
// for(let i =1;i<=limiet;i++) {
//
//         console.log(a)
//         let volgende = a + b;
//         a = b;
//         b = volgende;
//
// }
            // Als je de som van die reeks nodig hebt kan je de volgende gebruiken

// let getallen = []
// let limiet = parseInt(prompt("Geef hier een getal in"))
// let a = 1, b = 1;
// let som = 0
// for(let i =1;i<=limiet;i++) {
//     getallen.push(a)
//     som = som + a
//     let volgende = a + b;
//     a = b;
//     b = volgende;
//
// }
// console.log(som)


// 1.2.12. Oefening 12 - For Loop
//
// • Schrijf een programma die de grootst gemene deler van 2 getallen op het scherm
//
// • Vraagaan de gebruiker de 2 getallen
//
// • Voorbeeld:
//
// • Getallen 75 en 105
//
// • Grootste gemene deler is 15
//
// • Weergave op het scherm:
//
// • De grootste gemene deler van 105 en 75 is: 15


// let getallen1 = []
// let getal1 = parseInt(prompt("Geef hier getal 1 in"))
// // let getal2 = parseInt(prompt("Geef hier getal 2 in"))
// let i = 0
//
//     while (getal1>i)
//
// {
//     if(getal1 % i === 0) {getallen1.push(getal1)
//     }
//     console.log(getallen1)
//     i++
//
// }

// const getal1 = parseInt(prompt("Geef het eerste getal in:"));
// const getal2 = parseInt(prompt("Geef het tweede getal in:"));
//
// // Vind het kleinste getal om de loop te beperken
// const minGetal = Math.min(getal1, getal2);
//
// let ggd = 1; // standaard ggd
//
// for (let i = 1; i <= minGetal; i++) {
//     if (getal1 % i === 0 && getal2 % i === 0) {
//         ggd = i; // sla de grootste deler op
//     }
// }
//
// console.log(ggd);


// 1.2.13. Oefening 13 - For Loop
// • Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft.
// • Vraagaan de gebruiker de 2 getallen
// • Voorbeeld:
// • Getallen 15 en 27 Weergave op het scherm:
// • Het kleinste gemene veelvoud van 15 en 27 is: 135

// const getal1 = parseInt(prompt("Geef het eerste getal in:"));
// const getal2 = parseInt(prompt("Geef het tweede getal in:"));
//
// // Vind het kleinste getal om de loop te beperken
// const minGetal = Math.min(getal1, getal2);
// let ggd = 1; // standaard ggd
//
// for (let i = 1; i <= minGetal; i++) {
//     if (getal1 % i === 0 && getal2 % i === 0) {
//         ggd = i; // sla de grootste deler op
//     }
// }
// const kgv = (getal1 * getal2) / ggd;
// console.log(`Het kleinste gemene veelvoud van ${getal1} en ${getal2} is: ${kgv}`);

                    //OF OP DIT MANIER KAN HET OOK

//
// const getal1 = parseInt(prompt("Geef het eerste getal in:"));
// const getal2 = parseInt(prompt("Geef het tweede getal in:"));
//
// // Begin bij het grootste van de twee getallen
// let maxGetal = Math.max(getal1, getal2);
// let kgv = maxGetal;
//
// while (true) {
//     if (kgv % getal1 === 0 && kgv % getal2 === 0) {
//         break; // gevonden
//     }
//     kgv++; // probeer het volgende getal
// }
//
// console.log(`Het kleinste gemene veelvoud van ${getal1} en ${getal2} is: ${kgv}`);
//

// 1.2.14. Oefening 14 - While Loop
// •Schrijf een programma die een aantal getallen inleest en eindigt wanneer de gebruiker
// een negatief getal ingeeft.
// •Schrijf daarna de som van de getallen op het scherm.

// const getallen = []
// var getal = parseInt(prompt("Geef hier een getal in"))
//
// while (getal >= 0){
//     getallen.push(getal)
//     var getal = parseInt(prompt("Geef hier een getal in"))
// }
//
// let som = 0;
// for (let i = 0; i < getallen.length; i++) {
//     som += getallen[i];
// }
// console.log(`De som van ${getallen} is ${som}`)


// 1.2.15. Oefening 15 - While Loop
// • Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
// • De totale som van x getallen is x.
// • Voorbeeld:
// • Hoeveel getallen?: 3
// • Geefgetal 1 in:
// • Geefgetal 2 in:
// • Geefgetal 3 in:
// • De totale som van 3 getallen is x.
// • Het gemiddelde van de 3 getallen is x

// const array = []
// var getallen = parseInt(prompt("Geef hier het aantal getallen in"))
// var hoeveel = getallen
// let i = 1
// while(getallen > 0){
//     let getal = parseInt(prompt(`Geef hier getal ${i} in`))
//     i++
//     getallen--
//     array.push(getal)
// }
// let som = 0;
// for (let i = 0; i < array.length; i++) {
//     som += array[i];
// }
// console.log(`De som van de ${hoeveel} getallen is ${som}`)
// console.log(`Het gemiddelde van de ${hoeveel} getallen is ${som/hoeveel}`)

// 1.2.16. Oefening 16 - While Loop
// Schrijf een programma die de facultateit van een getal weergeeft.
//     De faculteit van 5 is bijvoorbeeld:
//     • 5×4x3x2x1 = 120
// • Vraag dit getal aan de gebruiker

// let getal = parseInt(window.prompt("Geef hier een getal in"))
// let facultiet = 1
// while (getal >= 1){
//     facultiet *= getal
//     getal--
//
// }
// console.log(facultiet)

// let getal = parseInt(window.prompt("Geef hier een getal in"))
// for(var facultiet = 1; getal>=1; getal--)
// {
//     facultiet *= getal
// }
//
// console.log(facultiet)

// 1.2.17. Oefening 17 - While Loop
// • Schrijf een programma die ervoor zorgt dat ervoor zorgt dat je ieder derde getal in een reeks 2x weergeeft en ieder reëel 10de getal in een reeks weglaat maar wel een
//   spatie schrijft.
// • De gebruiker geeft het eindgetal in.
// • Voorbeeld van de output:
// • 1,2,3,3,4,5,6,6,7,8,9, ,11..99


// let getallen = []
// let getal = parseInt(prompt("Geef hier een getal in"))
// let i = 0
// while(getal>0){
//     i++
//     getal--
//     if(i % 10 === 0){
//         getallen.push(" ")}
//
//     else if(i % 3 === 0){
//         getallen.push(i)
//         getallen.push(i)
//
//     }
//
//     else{getallen.push(i)}
//
// }
// console.log(getallen)

// 1.2.18. Oefening 18 - While Loop
// • De gebruiker geeft een eindgetal in. Bijv. 100
// • Het programma kiest daarvan zelf een getal tussen 0 en 100 die de gebruiker niet kent.
// • Vervolgens dient de gebruiker het getal te raden.
// • Het programma antwoord telkens als volgt:
// • Het getal is kleiner of het getal is groter.
// • Het resultaat: Proficiat u hebt het getal in x aantal keer geraden.
// • Tip: Built-in function bekijken.

// let getal = parseInt(prompt("Geef hier een getal in"))
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// juistantwoord = (getRandomInt(getal));
//
// let i = 1
// let antwoord = null
// while (antwoord !== juistantwoord){
//     let antwoord = parseInt(prompt("Geef hier je antwoord in"))
//
//
//     if(antwoord > juistantwoord) {
//         alert("Het getal is kleiner")
//         i++
//     }
//
//
//     else if( antwoord < juistantwoord) {
//         alert("Het getal is groter")
//         i++
//     }
//
//     else{
//         alert(`Proficiat u hebt het getal ${juistantwoord} in ${i} keer geraden`)
//         break
//     }
//
// }