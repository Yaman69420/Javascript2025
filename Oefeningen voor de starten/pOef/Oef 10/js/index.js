// let werk = parseFloat(window.prompt('bent U 1, Zelfstandig 2, arbeider 3, bediende of 4, ambtenaar?'));
//
// if
//     (werk === 1)
// {
//         alert("wertk zeer veel");
// }
// else if
//     (werk === 2)
// {
//         alert("wert veel");
// }
// else if
//     (werk === 3)
// {
//         alert("werkt");
// }
// else if
//     (werk === 4)
// {
//         alert("duhhh")
// }
// else
// {
//     alert("shut up")
// }

let werk = parseInt(window.prompt('bent U 1, Zelfstandig 2, arbeider 3, bediende of 4, ambtenaar?'));

switch(werk){
    case 1:
        alert("werkt zeer veel")
        break;
    case 2:
        alert("werkt veel");
        break;
    case 3:
        alert("werkt");
        break;
    case 4:
        alert("duh");
        break;
    default:
        alert("stop stupid")
}