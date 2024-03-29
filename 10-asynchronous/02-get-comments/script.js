/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    

    let btn=document.getElementById('run');

    btn.addEventListener('click', () => {
        window.lib.getPosts((error,articles) =>{
            if (error){
                throw error;
            } else {
                for (elem in articles){
                    window.lib.getComments(elem,(error, comments)=>{
                        if (error){
                            throw error;
                        } else {
                            articles[elem].comments=comments;
                        }
                        console.log(articles[elem]);
                    })
                }
            }
            
        })
    })    
    
})();
