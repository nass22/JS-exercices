/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(() => {

    let para=document.getElementById('target');
    let text=document.getElementById('target').textContent;
    const arrayLetters=text.split("");
    
    
    para.innerHTML=' ';
    
    let interval;

    function loop(){
        if(arrayLetters.length>0){
            para.innerHTML+=arrayLetters.shift();
        } else {
            clearTimeout(interval);
        }
        interval = setTimeout(loop, 130);
    }
    
    loop();

})();
