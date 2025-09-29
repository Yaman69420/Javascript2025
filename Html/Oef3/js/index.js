// function isEven(getal){
//     return getal%2===0;
// }
//
// let getal = parseInt(prompt("Geef een getal in"));
// let resultaat = isEven(getal);



// function tafel(getal){
//     let i = 1
//     while(i <= 10) {
//         i++
//         document.querySelector('#resultaat').innerHTML += `<p>${i} x ${getal} = ${i * getal}</p>`;
//         }
//     }
//
// let getal = parseInt(prompt("Geef hier een getal in"))
// tafel(getal)



// function gelijk(woord){
//     omgekeerd = woord.split("").length
//     omgekeerd = woord
//     return gelijk
//
// }
// let woord = prompt("Geef hier een woord in")
// let resultaat = gelijk(woord)



// function gelijk(woord) {
//     let omgekeerd = woord.split("").length - 1
//
//
//     return woord === omgekeerd;                      NIET JUIST
// }
//
// let woord = prompt("Geef hier een woord in");
// let resultaat = gelijk(woord);
//         document.querySelector('#resultaat').innerHTML += `<p>${resultaat}</p>`;

function isPalindroom(woord){
    let omgekeerd = "";
    for (let i = woord.length - 1; i >= 0; i--){
        omgekeerd += woord[i];
    }
    return woord === omgekeerd;
}

let woord = prompt("Geef een woord in:");


document.querySelector("#resultaat").innerHTML =
isPalindroom(woord)
    ? `"${woord}" is een palindroom`
    : `"${woord}" is geen palindroom`


// function isPalindroom(woord) {
//     let omgekeerd = "";
//     for (let i = woord.length - 1; i >= 0; i--) {
//         omgekeerd += woord.charAt(i); // charAt ipv []
//     }
//     return woord === omgekeerd;
// }