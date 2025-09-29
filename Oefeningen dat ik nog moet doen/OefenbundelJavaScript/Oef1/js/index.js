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

let aantalsterren = parseInt(window.prompt("Geef het aantal sterren in"))
let ster = ""
let teller1 = 1
let teller = aantalsterren

while (teller1 <= aantalsterren)
{
    aantalsterren--
    ster = ster + "*"
    console.log(ster)

}

while (teller > 0) {
    let ster = ""
    let getal = 0
    while (getal < teller) {
        ster = ster + "*"
        getal++
    }

    console.log(ster)
    teller--
}

// 1.2.4. Oefening 4 - For Loop
// • Schrijf een programma die de facultateit van een getal weergeeft.
// • De faculteit van 5 is bijvoorbeeld:
//     • 5x4x3x2x1 = 120
// • Vraag dit getal aan de gebruiker

// let getal = parseInt(window.prompt("Geef hier een getal in"))
// let teller = 1
// while

