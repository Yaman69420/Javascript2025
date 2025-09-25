// Oefening 1: Som van alle elementen in een array
// Schrijf een programma dat een array van getallen neemt en de som van alle getallen in de array berekent.

// let getalen = [9,7,3,4,5,2,6,2,1,2]
// let som = 0;
// for (let i = 0; i < getalen.length; i=i+1)
// {
//     som += getalen[i];
// }
//     console.log(`de som van de ${getalen.length} getalen is ` + som)
//


// let elementen = [6,9,34,5,2,3,75];
// let som = 0;
// let teller = 0;
// for (element of elementen){
//     som = som + elementen[teller];
//     teller = teller + 1;
// }
// alert(`De totale som van ${teller} getalen is ${som}`);


// Oefening 2: Grootste getal in een array vinden
// Schrijf een programma dat het grootste getal in een array van getallen vindt.

// let elementen = [4,3,6,23,2];
// let hoogste = 0;
// for (let element of elementen){
//     if(hoogste < element)
//     {
//         hoogste = element;
//     }
// }
// console.log(hoogste)

// Oefening 3: Filter even getallen uit een array
// Schrijf een programma dat een array doorloopt en alle even getallen afdrukt.

// let elementen = [4,3,6,23,2];
// let even = 0;
//
// for (let element of elementen){
//         if (element % 2 == 0)
//         {
//             console.log(element)
//         }
// }


// Oefening 4: Omgekeerde array afdrukken
// Schrijf een programma dat de elementen van een array in omgekeerde volgorde afdrukt.

// let getallen = [9,7,3,4,5,2,6,2,1,2]
//     getallen.reverse();
// for (let getal of getallen)
//     console.log(getal);

// Oefening 5: Zoeken in een array
// Schrijf een programma dat controleert of een bepaald getal aanwezig is in een array en "Gevonden!" afdrukt als het aanwezig is, anders "Niet gevonden".

let getallen = [9,7,3,4,5,2,6,2,1,2]
let getal1 = 0;
for (let getal of getallen)
    while(getal1 !== getal)
        {
        getal1 = parseInt(window.prompt("geef een getal in"))
        if (getal1 == getal)
        {
            console.log("Gevonden")
        }
    }

//NIET OPGELOST