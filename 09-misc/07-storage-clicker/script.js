/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn=document.getElementById('increment');
    let score=document.getElementById('target');
    let clique=0;
    
    window.onload= () => {
        if (localStorage.getItem('nbreClique')!=0){
            score.innerHTML=localStorage.getItem('nbreClique');
            clique=localStorage.getItem('nbreClique');
        } else {
            clique=0;
            score.innerHTML=clique;
            localStorage.setItem('nbreClique', clique);
        }
    }

    btn.addEventListener('click', () => {
        clique++;
        score.innerHTML=clique;
        localStorage.setItem('nbreClique', clique);
    })

    
})();
