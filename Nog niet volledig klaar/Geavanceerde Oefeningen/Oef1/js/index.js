// 1. Print priemgetallen: Gebruik een for-loop om alle priemgetallen tussen 1 en 100 te printen.

// let primgetal = 1
//
// while (primgetal <= 100)
// {
//     if (primgetal % primgetal === 0)
//     if (primgetal % 1 === primgetal)                 Fout
//     {
//         console.log(primgetal);
//         primgetal++;
//     }
// }
//
// let primgetal = 2;
//
// while (primgetal <= 100) {
//     let prime = true;
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
//         console.log(primgetal);
//     }
//     primgetal++;
// }


// 2. Bereken de faculteit van een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om de faculteit (factorial) van dat getal te berekenen.

// let getal = parseInt(window.prompt("Geef hier een getal in"))
// let facultiet = 1
// while (getal >= 1){
//     facultiet *= getal
//     getal--
//     console.log(facultiet)
//
// }

// let getal = parseInt(window.prompt("Geef hier een getal in"))
// for(var i = 1 ;getal >= 1 ;getal--){
//     i *= getal
// }
// console.log(i)

// let getal = parseInt(window.prompt("Geef hier een getal in"))
// let getal2 = 1;
// for(let i = 1;i<=getal;i++){
//     getal2 = getal2 *i;
// }
// console.log(getal2)



// 3. Print getallen die een bepaald patroon volgen: Print de getallenreeks 1, 2, 4, 8, 16, 32,...., totdat de waarde groter is dan een door de gebruiker opgegeven getal.

// let maximaal = parseInt(window.prompt("Geef hier het maximaal waarde"))
// let i = 1
// console.log(i)
//
// while (i <= maximaal){
//     i = i * 2
//     console.log(i)
// }
// let limiet = parseInt(prompt("Geef hier een limiet in"))
// for(let i = 1;i<=limiet;i=i*2){
//     console.log(i);
// }

// 4. Tel de cijfers in een getal: Vraag een getal aan de gebruiker en gebruik een for-loop om het aantal cijfers in dat getal te tellen.

// let number = parseInt(prompt("Voer een getal in:"));
// let reversed = 0;
// for (let i = number; i > 0; i = (i - (i % 10)) / 10) {
//     reversed ++
// }
// console.log(reversed);


// 5. Bereken de som van de cijfers in een getal: Vraag een getal aan de gebruiker en bereken de som van de cijfers in dat getal (bijv. bij 1234 is de som 1+2+3+4=10).

// let number = parseInt(prompt("Voer een getal in:"));
// let reversed = 0;
// for (let i = number; i > 0; i = (i - (i % 10)) / 10) {
//     let som = i % 10;
//     reversed = som + reversed
// }
// console.log(reversed);


// 6. Vind de grootste deler van een getal: Vraag cen getal aan de gebruiker en gebruik en for-loop om de grootste deler van dat getal (anders dan het getal zelf) te vinden.

// let getal = parseInt(prompt("Geef hier een getal in"))
// let deler = getal - 1
//
// while (deler !== % getal )
//
// {
//     deler--
// }
// console.log(deler)

// let number = parseInt(prompt("Voer een getal in:"));
// let grootsteDeler =1;
// for (let i = 1; i < number; i++)
// {
//     if (number % i === 0) {
//         grootsteDeler = i;
//     }
// }

// let i = 1;
// while (i < number){
//     if (number % i === 0) {
//         grootsteDeler = i;
//     }
//     i++
// }
// console.log(grootsteDeler);

// 7. Print de Fibonacci-reeks: Gebruik een for-loop om de eerste 10 getallen van de Fibonacci-reeks te printen (bijv. 1, 1, 2, 3, 5, 8,...).
// let b = 1
// let c = 1
// let d = 2
// let i = 0
// let a = 2
// console.log(b)
// console.log(c)
// console.log(d)                          //Fucked up oplossing
// while (i <= 6){
//     i++
//     a = a + i
//     console.log(a)
// }


let limiet = parseInt(prompt("Geef hier een getal in"))
let a = 1, b = 1;
for(let i =3;i<=limiet;i++) {
    if (a <= limiet) {
        console.log(a)
        let volgende = a + b;
        a = b;
        b = volgende;
    }
}

// 8. Som van de Fibonacci-reeks: Bereken de som van de eerste n getallen in de Fibonacci-reeks, waarbij n door de gebruiker wordt ingevoerd.

// let getal = parseInt(prompt("Geef hier een getal in"))
// let b = 1
// let c = 1
// let d = 2
// let i = 0
// let a = 2
// console.log(b)
// console.log(c)
// console.log(d)                          //Fucked up oplossing
// while (i <= getal){
//     i++
//     a = a + i
//     console.log(a)
// }
// 9. Controleer of een getal een priemgetal is: Vraag een getal aan de gebruiker en gebruik een for-loop om te controleren of het een priemgetal is.

// let getal = parseInt(prompt("Geef hier een getal in"))
// let i = 2;
// let isPrim = true;
//
//
// while (getal % i === 0 ) {
//     isPrim = false;
// break;
// }
// i++
// {
//     if (isPrim) {
//         console.log(getal + " is een primgetal!")
//     } else {
//         console.log(getal + " is geen primgetal")
//     }
// }

// let number = parseInt(prompt("Voer een getal in:"));
// let isprime = true;
// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         isprime = false;
//         break;
//     }
//     if (isprime) {
//         console.log(number + " is een priemgetal.");
//     } else {
//         console.log(number + " is geen priemgetal.");
//     }
// }
    // Uitleg: De loop controleert of het getal deelbaar is door een getal kleiner dan zichzelf.
    // Als dat zo is, is het geen primgetal
// 10. Print een driehoek van sterretjes: Gebruik een for-loop om een driehoek van sterretjes te printen, waarbij het aantal rijen door de gebruiker wordt opgegeven. Bijvoorbeeld, voor 5


// let rij = parseInt(prompt("Geef het het aantal rijen in"))
// let i = 1
// let ster = "*"
// let space = " "
//
// while (rij >= 1)
// {
//     i++
// }
// {
//     space = space + space
//     console.log(space+ster+space)
// }

