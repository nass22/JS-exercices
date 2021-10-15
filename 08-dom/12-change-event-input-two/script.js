/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    var input=document.getElementById('pass-one');
    var compteur=0;
    
    function hasNumber(x){
        return /\d/.test(x);
    }

    input.addEventListener('keydown', () => {
        compteur++;
        
        if ((compteur>=8) && ((hasNumber(input.value)))){
            document.getElementById('validity').innerHTML='Ok';
        }
        
    })
    
})();
