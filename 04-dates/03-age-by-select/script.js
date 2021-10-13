/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    var btn=document.getElementById("run");
    var todayDate= new Date();
    var todayJour=todayDate.getDate();
    var todayMois=todayDate.getMonth();
    var todayAnnee=todayDate.getFullYear();

    btn.addEventListener("click", function(){
        var inputJour=document.getElementById('dob-day').value;
        var inputMois=document.getElementById('dob-month').value;
        var inputAnnee=document.getElementById('dob-year').value;

        var ans = todayAnnee-inputAnnee;
        var mois = todayMois-inputMois;
        console.log(todayJour,inputJour);
        

        if (todayJour<inputJour){
            document.write("Vous avez: " + ans + " ans et " + (mois) + " mois");
        } else {
            document.write("Vous avez: " + ans + " ans et " + (mois+1) + " mois");
        }
        
    })
})();
