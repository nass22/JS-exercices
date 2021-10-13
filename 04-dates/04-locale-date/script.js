/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    var btn=document.getElementById("target");

    btn.addEventListener('click', function(){
        const jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        const mois = new Array('Janvier','Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
        var today = new Date();
        var heure = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var result = jours[today.getDay()] + " " + today.getDate() + " " + mois[today.getMonth()] + " " + today.getFullYear();
        document.write(result + " " +  heure);
    })  
    
})();
