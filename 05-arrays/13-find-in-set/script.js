/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    var btn=document.getElementById('run');

    btn.addEventListener('click', function (){
        console.log("Il y a " + people.size + " personnes dans le tableau.");
        if(people.has('Alexandre')==true){
            console.log("Alexandre est présent dans le tableau.");
        } else {
            console.log("Alexandre n'est pas présent dans le tableau.");
        }
    })
})();
