// Om deel te nemen aan de spelen van de Natiknale Loterij moet je minimum 18 jaar oud zijn.
// Ontwerp een consoletoepassing waarmee je de leeftijd van de gebruiker opvraagt.
// Als de ingevoerde leeftijd minimum 18 jaar bedraagt, krijgt de gebruiker toegang tot de site van de nationale loterij en verschijnt de tekst:
// "Je bent x jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.". Indien niet voldaan is aan deze voorwaarde verschijnt de tekst:
// "Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.".
// let leeftijd = parseInt(window.prompt("Geef hier u leeftijd in"))
// if (leeftijd >= 18)
// {
//     alert(`Je bent ${leeftijd} jaar oud, je mag deelnemen aan de spelen van de Nationale Loterij.`)
// }
// else
// {
//     alert(`om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.`)
// }

// 1.1.2. Oefening 2
// Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.
// Ontwerp een consoletoepassing waarmee je de leeftijd van de gebruiker opvraagt.
// Als de ingevoerde leeftijd minimum 18 jaar bedraagt, krijgt de gebruiker toegang tot de site van de nationale loterij en verschijnt de tekst:
// "Je bent x jaar oud. Je mag deelnemen aan de spelen van de Nationale Loterij.". Indien niet voldaan is aan deze voorwaarde verschijnt de tekst:
// "Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.".
// Wanneer men 18 jaar of ouder is dient men te vragen of ze een volledig bulletin van 12 vakjes willen spelen.
// Bij een volledig bulletin toon je de kostprijs van 20 euro.
// Voor 2 vakjes is de kostprijs 4 euro. Voor 4 vakjes 8 euro. Voor 6 vakjes 12 euro. Voor 8 vakjes 16 euro. Voor 10 vakjes 18 euro.

let leeftijd = parseInt(window.prompt("Geef hier u leeftijd in"))
if (leeftijd >= 18)
{
    alert(`Je bent ${leeftijd} jaar oud, je mag deelnemen aan de spelen van de Nationale Loterij.`)
}
else
{
    alert(`om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar oud zijn.`)
}