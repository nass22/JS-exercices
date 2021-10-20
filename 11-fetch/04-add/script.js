/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn = document.getElementById('run');
    let btnName=document.getElementById('hero-name');
    let btnEgo=document.getElementById('hero-alter-ego');
    let btnPowers=document.getElementById('hero-powers');

    btnName.setAttribute('required', '');
    btnEgo.setAttribute('required', '');
    btnPowers.setAttribute('required', '');

    


    btn.addEventListener('click', () => {
        let inputName = document.getElementById('hero-name').value;
        let inputEgo = document.getElementById('hero-alter-ego').value;
        let inputPower = document.getElementById('hero-powers').value;
        

        if (inputName=="" || inputEgo=="" || inputPower==""){
            alert("Veuillez renseigner tout les champs!");
        } else {
            let idHeroes;
            fetch('http://localhost:3000/heroes')
            .then(result => result.json())
            .then (data => idHeroes=JSON.stringify(data.length))
            
            fetch('http://localhost:3000/heroes', {
                method: "POST",
                body: JSON.stringify({
                    id: idHeroes,
                    name: inputName,
                    alterEgo: inputEgo,
                    abilities: [inputPower]
                }),
                
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
               
            })
            .then (response => response.json())
            .then (data => console.log(data))
        }
        
    })


})();
