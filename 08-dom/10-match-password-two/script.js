/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn = document.getElementById('run');

    btn.addEventListener('click', function () {
        var pw1 = document.getElementById('pass-one').value;
        var pw2 = document.getElementById('pass-two').value;
        var input1 = document.getElementById('pass-one');
        var input2 = document.getElementById('pass-two');


        if (pw1 === pw2) {
            console.log('mdp correct');
        } else {
            input1.classList.add('error');
            input2.classList.add('error');
        }
        console.log(input1,input2);
    })
})();
