// let som = 0;
// for (let i =1;i<=10;i=i+1) {
//     // console.log(i);
//     som = som + i;
// }
// console.log(som);

var som = 0;
for (let teller=1;teller<=10;teller = teller + 1){
    let getal = parseInt(window.prompt(`Geef getal ${teller} in`))
    som = som + getal;
    alert(som);
}
// alert(som);