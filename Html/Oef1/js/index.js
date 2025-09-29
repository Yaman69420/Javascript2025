let cursisten = ["Tom", "Tim", "Jan", "Natan", "Yaman"];
// for(let i=0;i < cursisten.length;i++){
//     document.querySelector("#cursisten").innerHTML += `<li>${cursisten[i]}</li>`
// }
for (cursist of cursisten){
    document.querySelector("#cursisten").innerHTML += `<li>${cursist}</li>`

}

// let tekst = "Hallo"
// tekst.toUpperCase()
// 'HALLO'
// tekst.charAt(0)
// 'H'
// tekst.split(" ").length // geen space is letters, 1 space is woord
// 1
// tekst.replace("Hello","Hi")
// 'Hi'
// tekst.indexOf("Hallo")
// 0
// tekst.lastIndexOf("Hallo")
// 0
// let tekst2 = "developers"
// tekst.concat(tekst2)
// 'Hallodeveloper'
// let getal = 123.456
// getal.toFixed(2)
// '123.46'
// Math.pow(2,3)
// 8
// Math.random()
// Getal tussen 0 en 1
// Math.floor(Math.random() * 1000)
// Getal tussen 0 en 1000
// Math floor = geen coma getal
// Math.ceil(Math.random() * 1000)
// Math ceil = afronden naar boven
// Math.abs = absolute waarde van een getal
// const PI = altijd zo geschreven
// Math.PI.toFixed(3)
// '3.142'