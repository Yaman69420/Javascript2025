let leeftijd = parseInt(window.prompt('Geef hier je leeftijd in'));

if
    (leeftijd >= 18)
{
        alert("U bent een volwassen");
}
else if
    (leeftijd > 12 && leeftijd < 18)
{
        alert("U bent een tiener");
}
else
{
        alert("U bent een kind");
}