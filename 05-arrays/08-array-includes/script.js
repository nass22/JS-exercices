/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    var btn=document.getElementById('run');
    btn.addEventListener('click', function (){

        if(fruits.includes('pomme')==true){
            console.log("L'élément est présent!")
        } else {
            console.log("L'élément n'est pas présent!");
        }
        
        /*for(i=0;i<fruits.length;i++){
            if(fruits.indexOf("pomme") !== -1){
                console.log("Oui");
            } else {
                console.log("Non");
            }
        }*/
    })
})();
