//
document.body.style.backgroundColor = "red"

let getal1 =parseFloat(window.prompt('Geef hier je eerste getal in'));
let getal2 =parseFloat(window.prompt('Geef hier je tweede getal in'));
let getal3 =parseFloat(window.prompt('Geef hier je derde getal in'));

let som = getal1+getal2+getal3;
let gemiddelde = som / 3;

alert(`Het gemiddelde van je getalen is ${gemiddelde}`);