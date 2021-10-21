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

    let input=document.getElementById('pass-one');
    
    
    
    
    
    input.addEventListener('change', () => {
        const valueInput=document.getElementById('pass-one').value;
        const regex=/[0-9a-zA-Z_]{8,}/g;
        const regex2=/[0-9]/g;
        const mdpValide=regex.test(valueInput);
        const mdpValide2=valueInput.match(regex2);
        
        
        if (mdpValide==true && mdpValide2.length>=2){
            document.getElementById('validity').innerHTML='Ok';
        } else {
            alert('Votre mot de pass doit contenir au minimum 8 caractères dont 2 chiffres!');
        }
    })
    
})();
