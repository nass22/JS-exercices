/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var btn = document.getElementById("target");
    var today = new Date();

    var todayH = today.getHours();
    var todayM = today.getMinutes();
    var heureMinute = (todayH * 60) + todayM;
    
    if (heureMinute < 1050) {
        btn.textContent = "Bonjour";
    } else {
        btn.textContent = "Bonsoir";
    }



})();
