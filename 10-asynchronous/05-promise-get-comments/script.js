/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn=document.getElementById('run');

    btn.addEventListener('click', () => { 
        window.lib.getPosts()
        .then((articles) => {
            for(elem in articles){
                window.lib.getComments(elem)
                .then((comments => {
                    articles[elem].comments=comments;
                    console.log(articles[elem]);
                    elem--;
                }))
                
            }
                    
        })
    })
})();
