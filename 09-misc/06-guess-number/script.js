/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var random;
    var valeur;
    var essai=0;

    function randomNumber(){
        random=Math.floor(Math.random() * 100);
        return random;
    }

    randomNumber();

    function question(){
        valeur=prompt("Entrez un nombre entre 1 et 100");
        console.log(valeur, random);
        if(valeur==random){
            essai++;
            alert("C\'est votre jour de change, vous avez trouvé le nombre aléatoire :D! Bien joué! Tout ça en: "+essai+" essai(s)");
    
        } else if(valeur<random){
            essai++;
            alert("Plus grand... Réessayez");
            question();
        } else if(valeur>random){
            essai++;
            alert("Plus petit... Réessayez");
            question();
        } else {
            essai++;
            alert("Est-ce bien un nombre?")
            question();
        }
    }
    question();
})();
