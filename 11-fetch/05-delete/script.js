/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let btn = document.getElementById('run');

    btn.addEventListener('click', () => {
        let idInput = document.getElementById('hero-id').value;
        const removeObject={id:idInput}
        
        fetch('http://localhost:3000/heroes/'+idInput, {
            method: 'DELETE',

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

            body: JSON.stringify(removeObject)
        })
        
        .then(response => {
            return response.json()

        })
        .then(data => console.log(data));

    })
})();
