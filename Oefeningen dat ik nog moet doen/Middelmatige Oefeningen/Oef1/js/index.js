// 1. Print machten van 2: Gebruik een for-loop om de machten van 2 te printen, beginnend bij
// 1, totdat de macht groter is dan 1000.

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

// 8. Print de kwadraten van getallen: Gebruik cen for-loop om de kwadraten van de getallen van 1 tot 10 te printen (bijv. 1, 4, 9, 16, ..., 100).

let getal = 1;
let kwadraten = 1
    while (getal <= 10)
    {
        kwadraten = kwadraten * getal
        getal++
        console.log(kwadraten)
    }



// 9. Print getallen tussen 1 en n die deelbaar zijn door 5: Vraag cen getal n aan de gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5.
// 10. Print het omgekeerde van een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om het omgekeerde van dat getal te printen (bijv. 1234 wordt

