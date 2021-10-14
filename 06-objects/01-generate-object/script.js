/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn=document.getElementById('run');

    btn.addEventListener('click', function (){
        var newObjet= new Object();

        newObjet.firstname="Samir";
        newObjet.lastname="Nacer";
        newObjet.age=30;
        newObjet.city="Zaventem";
        newObjet.country="Belgique";

        console.log(newObjet);
    })
})();
