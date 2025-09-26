// 1. Print priemgetallen: Gebruik een for-loop om alle priemgetallen tussen 1 en 100 te printen.

// let primgetal = 1
//
// while (primgetal <= 100)
// {
//     if (primgetal % primgetal === 0)
//     if (primgetal % 1 === primgetal)
//     {
//         console.log(primgetal);
//         primgetal++;
//     }
// }

let primgetal = 2;

while (primgetal <= 100) {
    let prime = true;
    let i = 2;

    while (i < primgetal) {
        if (primgetal % i === 0) {
            prime = false;
            break;
        }
        i++;
    }

    if (prime) {
        console.log(primgetal);
    }
    primgetal++;
}


// 2. Bereken de faculteit van een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om de faculteit (factorial) van dat getal te berekenen.
// 3. Print getallen die een bepaald patroon volgen: Print de getallenreeks 1, 2, 4, 8, 16, 32,...., totdat de waarde groter is dan een door de gebruiker opgegeven getal.
// 4. Tel de cijfers in een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om het aantal cijfers in dat getal te tellen.
// 5. Bereken de som van de cijfers in een getal: Vraag een getal aan de gebruiker en bereken de som van de cijfers in dat getal (bijv. bij 1234 is de som 1+2+3+4=10).
// 6. Vind de grootste deler van een getal: Vraag cen getal aan de gebruiker en gebruik cen for-loop om de grootste deler van dat getal (anders dan het getal zelf) te vinden.
// 7. Print de Fibonacci-reeks: Gebruik een for-loop om de eerste 10 getallen van de Fibonacci-reeks te printen (bijv. 1, 1, 2, 3, 5, 8,...).
// 8. Som van de Fibonacci-reeks: Bereken de som van de eerste n getallen in de Fibonacci-reeks, waarbij n door de gebruiker wordt ingevoerd.
// 9. Controleer of een getal een priemgetal is: Vraag een getal aan de gebruiker en gebruik een for-loop om te controleren of het een priemgetal is.
// 10. Print een driehoek van sterretjes: Gebruik een for-loop om een driehoek van sterretjes te printen, waarbij het aantal rijen door de gebruiker wordt opgegeven. Bijvoorbeeld, voor 5