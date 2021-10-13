/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var age=prompt("Quel âge avez-vous?");
    var sexe=prompt("Quel est votre sexe?");
    var ville=prompt("Dans quelle ville vivez-vous?");

    var confirmation=confirm("Vos informations sont: " + "\n Votre âge: " + age + " \n Votre sexe: " + sexe + "\n Votre ville: " + ville + "\n Si vos informations sont corrects, appuyez sur OK, sinon appuyez sur ANNULER." );

    if (confirmation==false){
        window.location.reload()
    }  
})();
