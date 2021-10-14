/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    var btn=document.getElementById('run');
    var btnTarget=document.getElementById('target');
    var tabAdjectives=Array.from(adjectives);
    

    function randomNumbers(){
        var min=1;
        var max=12;
        var nombre=Math.floor(Math.random() * (max-min))+min;
        return nombre;
    }

    function randomNumbersAdj(){
        var min=1;
        var max=11;

        var nombre=Math.floor(Math.random() * (max-min))+min;
        return nombre;
    }

    
    btn.addEventListener('click', function (){

        var randomBirds=birds[randomNumbers()];
        var randomAdj=tabAdjectives[randomNumbersAdj()];
        
        if (randomBirds.fem == true){
            btnTarget.innerHTML=randomBirds.name + " " + randomAdj + "e";
        } else {
            btnTarget.innerHTML=randomBirds.name + " " + randomAdj;
        }  
            
    })
    
})();
