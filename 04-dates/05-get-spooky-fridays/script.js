/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn = document.getElementById('run');
    const mois = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const jour = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    btn.addEventListener('click', function () {
        var input = document.getElementById('year').value;

        for (i = 0; i < 12; i++) {
            var date = new Date();
            date.setFullYear(input, i, 13);
            console.log(date);
            var jourAnnee = jour[date.getDay()];

            if (jourAnnee == 'Fri') {
                document.write(mois[i] + " ");
            }
        }
    })
})();
