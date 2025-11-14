// let som = 0;
// for (let i=1;i<=10;i = i + 1){
//     let getal = parseInt(window.prompt(`Geef getal ${i} in`))
//     som = som + getal;
//     alert(som);
// }

// let product = 1;
// for (let i=1;i<=5;i = i + 1){
//     let getal = parseInt(window.prompt("Geef een getal in"))
//     product = product * getal;
// }
// alert(product);

// let som = "";
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0) {
//         if (i === 30) {
//             som = som + i
//         }
//         else {
//             som = som + i + ","
//         }
//     }
// }
// console.log(som);

// let getal1 = prompt("geef een getal in");
// for (let i = 1; i <= 10; i=i+1){
//     console.log(`${getal1} x ${i} = ${getal1 * i}`);
// }

// let getal = parseInt(window.prompt(`Geef een getal in`));
// let som = ""
// for (let teller=1;teller<=getal;teller = teller + 1){
//     som = som + "W ";
//     console.log(som);
// }

// let zijde = parseFloat(window.prompt("Geef hier de zijde van de kubus in"));
// let volume = zijde **3;
//
// alert(`de volume van je kubus is ${volume}`);
//

// let getal1 =parseFloat(window.prompt('Geef hier je eerste getal in'));
// let getal2 =parseFloat(window.prompt('Geef hier je tweede getal in'));
// let getal3 =parseFloat(window.prompt('Geef hier je derde getal in'));
//
// let som = getal1+getal2+getal3;
// let gemiddelde = som / 3;
//
// alert(`Het gemiddelde van je getalen is ${gemiddelde}`);


// let werk = parseInt(window.prompt('bent U 1, Zelfstandig 2, arbeider 3, bediende of 4, ambtenaar?'));
//
// switch(werk){
//     case 1:
//         alert("werkt zeer veel")
//         break;
//     case 2:
//         alert("werkt veel");
//         break;
//     case 3:
//         alert("werkt");
//         break;
//     case 4:
//         alert("duh");
//         break;
//     default:
//         alert("stop stupid")
// }

// let onderwijs = "vdab";
//
// switch(onderwijs){
//     case "vdab":
//         alert("gegeven door de vdab");
//         break;
//     case "syntra":
//         alert("gegeven door de syntra");
//         break;
//     default:
//         alert("gegeven door een andere instelling");
// }

// let getal1 = 1000;
// let getal2 = 1
// for (let i = 0; getal2 <= getal1*2; i++)
// {
//     console.log(getal2);
//     getal2=getal2*2;
// }

// for(let i=1;i<100;i=i+2){
//     if(i%2!==0)
// {
//     console.log(i);
// }
//     }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
//
// console.log(matrix[2][2]); // → 9

// var getal1 = parseInt(prompt("Geef hier het eerst getal in"))
// var getal2 = parseInt(prompt("Geef hier de tweede getal in"))
//
// console.log(`de som van ${getal1} + ${getal2} = ${getal1+getal2}`);
// console.log(`de som van ${getal1} - ${getal2} = ${getal1-getal2}`);
// console.log(`de som van ${getal1} * ${getal2} = ${getal1*getal2}`);
// console.log(`de som van ${getal1} / ${getal2} = ${getal1/getal2}`);
// //Rest van een deling
// console.log(`de som van ${getal1} % ${getal2} = ${getal1%getal2}`);
// //machtsverheffing
// console.log(`de som van ${getal1} ** ${getal2} = ${getal1**getal2}`);


// let getalen = [9,7,3,4,5]
// let som = 0;
// for (let i = 0; i < getalen.length; i=i+1)
// {
//     som += getalen[i];
// }
//     console.log(`de som van de ${getalen.length} getalen is ` + som)


// let antwoord = parseInt(prompt("Geef hier een getal in"))
// function isEven(getal) {
//     if (getal % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isEven(antwoord))


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
//     if (hoogste < element)
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


// let getallen = [9,7,3,4,5,2,6,2,1,2];
// let getal1 = parseInt(window.prompt("Geef een getal in"));
// let gevonden = false;
//
// for (let getal of getallen) {
//     if (getal1 === getal) {
//         alert("Gevonden");
//         gevonden = true
//     }
// }
//
// if (!gevonden) {
//     alert("Niet Gevonden");
// }
