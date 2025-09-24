// let product = 1;
// for (let i =1;i<=5;i=i+1) {
//     // console.log(i);
//     product = product * i;
// }
// console.log(product);

var product = 1;
for (let teller=1;teller<=5;teller = teller + 1){
    let getal = parseInt(window.prompt("Geef een getal in"))
    product = product * getal;
}
alert(product);