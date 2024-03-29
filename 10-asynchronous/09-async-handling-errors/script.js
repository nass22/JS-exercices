/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn=document.getElementById('run');

    btn.addEventListener('click', async() => {
        await window.lib.getPersons()

        .then((persons)=>{
            for(elem in persons){
                console.log(persons[elem]);
            }
        })    
        .catch((error)=>{
            console.error(error);
        })
        
    })
})();
