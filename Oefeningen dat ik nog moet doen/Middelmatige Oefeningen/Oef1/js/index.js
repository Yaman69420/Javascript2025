// 1. Print machten van 2: Gebruik een for-loop om de machten van 2 te printen, beginnend bij 1, totdat de macht groter is dan 1000.

// for (let i = 1; i <= 1000; i=i+1) {
//     if (i ** 2 < 1000) {
//         console.log(i)
//     }
// }


// 2. Tel af van een gegeven getal: Vraag een getal aan de gebruiker en tel af naar 0 met een for-loop.

// let getal1 = parseInt(window.prompt("geef een getal in"));
// for (let i = 0; getal1 >= 0; i=i-1)
// {
//     console.log(getal1)
//     getal1=getal1-1;
// }

// 3. Print een reeks van 1 tot n: Vraag een getal n aan de gebruiker en print alle getallen van 1
// tot n.

// let getal1 = parseInt(window.prompt("geef een getal in"));
// let getal2 = 1;
// for (let i = 1; getal2 <= getal1; i=i+1)
// {
//     console.log(getal2)
//     getal2=getal2+1;
// }

// 4. Som van de eerste n getallen: Vraag een getal n aan de gebruiker en bereken de som van de getallen van 1 tot n.

// let getal1 = parseInt(window.prompt("geef een getal in"));
// let som = 0
// for (let i = 1; i <= getal1; i=i+1)
// som = som + i
// {
//     console.log(som)
// }


// 5. Print de veelvouden van een gegeven getal: Vraag een getal aan de gebruiker en print de veelvouden van dat getal tot 100.

// let getal1 = parseInt(window.prompt("Geef een getal in"));
// let veelvoud = 0;
//
//     while (veelvoud <= 100) {
//         console.log(veelvoud);
//         veelvoud = veelvoud + getal1
//     }

// 6. Som van de even getallen: Gebruik een for-loop om de som van de even getallen van 1 tot 100 te berekenen.

// let even = 1
// let som = 0
//
//     while (even <= 100)
//     {
//         if (even % 2 == 0)
//         {
//             som = som + even
//         }
//         even++;
//     }
//     console.log(som);


// 7. Som van de oneven getallen: Gebruik een for-loop om de som van de oneven getallen van 1 tot 100 te berekenen.

// let oneven = 1
// let som = 0
//
// while (oneven <= 100)
// {
//     if (oneven % 2 !== 0)
//     {
//         som = som + oneven
//     }
//     oneven++;
// }
// console.log(som);

// 8. Print de kwadraten van getallen: Gebruik en for-loop om de kwadraten van de getallen van 1 tot 10 te printen (bijv. 1, 4, 9, 16, ..., 100).

// let getal = 1;
// let kwadraten = 1
//     while (getal <= 10)
//     {
//         kwadraten = getal * getal
//         getal++
//         console.log(kwadraten)
//     }


// 9. Print getallen tussen 1 en n die deelbaar zijn door 5: Vraag cen getal n aan de gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5.

// let getal = parseInt(window.prompt("Geef een getal in"));
// let i = 1;
//
//     while (getal >= i)
//     {
//         if (i % 5 == 0)
//         {
//             console.log(i);
//         }
//         i++
//     }

// 10. Print het omgekeerde van een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om het omgekeerde van dat getal te printen (bijv. 1234 wordt 4321)

// let getallen = [parseInt(window.prompt("Geeft een getal in"))];
//     getallen.reverse();
// for (let getal of getallen)
//     console.log(getal);

let number = parseInt(prompt("Voer een getal in:"));
let reversed = 0;

while (number > 0) {
    let laatsteCijfer = number % 10;      // Pak het laatste cijfer
    reversed = reversed * 10 + laatsteCijfer; // Voeg toe aan reversed
    number = (number - (number % 10)) / 10;   // Verwijder het laatste cijfer
}

console.log(reversed);


// let number = parseInt(prompt("Voer een getal in:"));
// let reversed = 0;
// for (let i = number; i > 0; i = (i - (i % 10)) / 10) {
//     let laatsteCijfer = i % 10; // Haal het laatste cijfer
//     reversed = reversed * 10 + laatsteCijfer; // Voeg het laatste cijfer toe aan reversed
// }
// console.log(reversed);


// Uitleg:
//     De initiatiefase in de for-loop begint met let i = number, wat ervoor zorgt dat de loop begint met het ingevoerde getal.
//     De voorwaarde is i > 0, wat betekent dat de loop doorgaat totdat i gelijk is aan 0.
// In de updatefase wordt i verminderd door telkens het laatste cijfer te verwijderen: (i - (i % 10)) / 10. Dit haalt het laatste cijfer weg.
//     Binnen de loop wordt het omgekeerde getal opgebouwd door reversed telkens te vermenigvuldigen met 10 en het laatste cijfer (i % 10) toe te voegen.
//     Op deze manier wordt het omgekeerde van het getal berekend met een volledige for-loop.
//     Start
//     number = 1234
// reversed = 0
// i = 1234
// Iteratie 1
// laatsteCijfer = 1234 % 10 = 4
// reversed = 0 * 10 + 4 = 4
// i = (1234 - 4) / 10 = 1230 / 10 = 123
// Status:
//     reversed = 4
// i = 123
// Iteratie 2
// laatsteCijfer = 123 % 10 = 3
// reversed = 4 * 10 + 3 = 43
// i = (123 - 3) / 10 = 120 / 10 = 12
// Status:
//     reversed = 43
// i = 12
// Iteratie 3
// laatsteCijfer = 12 % 10 = 2
// reversed = 43 * 10 + 2 = 432
// i = (12 - 2) / 10 = 10 / 10 = 1
// Status:
//     reversed = 432
// i = 1
// Iteratie 4
// laatsteCijfer = 1 % 10 = 1
// reversed = 432 * 10 + 1 = 4321
// i = (1 - 1) / 10 = 0 / 10 = 0
// Status:
//     reversed = 4321
// i = 0
// Stop
// De for-loop stopt omdat i > 0 niet meer waar is.
//     Het resultaat is 4321.