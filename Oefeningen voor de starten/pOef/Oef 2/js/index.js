var geboorteJaar = window.prompt("Geef je geboortejaar in:");
var huidigeJaar = window.prompt("Geef je huidige jaar in:");
if(huidigeJaar - geboorteJaar >= 18){
    console.log(`u bent ${huidigeJaar - geboorteJaar} jaar u mag deelnemen`);
}else{
    console.log(`u bent ${huidigeJaar - geboorteJaar} jaar u mag NIET deelnemen`);}




