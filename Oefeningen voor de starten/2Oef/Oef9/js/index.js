// let product = 1;
// for (let i =1;i<=5;i=i+1) {
//     // console.log(i);
//     product = product * i;
// }
// console.log(product);
var som = "";
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        if (i == 30) {
            som = som + i
        }
        else {
            som = som + i + ","
        }
    }
}
        console.log(som);