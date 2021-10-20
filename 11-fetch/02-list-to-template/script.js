/* becode/javascript
 *
 * /11-fetch/02-createList-to-createTemplate/script.js - 11.2: createListe vers createTemplate
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn = document.getElementById('run');
    let target = document.getElementById('target');








    btn.addEventListener('click', () => {
        fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(data => {
                for (elem in data) {
                    let createLi = document.createElement('li');
                    createLi.setAttribute('class', 'hero');
                    target.appendChild(createLi);

                    let createH4 = document.createElement('h4');
                    createH4.setAttribute('class', 'title');
                    createLi.appendChild(createH4);

                    let strong = document.createElement('strong');
                    strong.setAttribute('class', 'name');
                    strong.innerHTML = data[elem].name;
                    createH4.appendChild(strong);

                    let createEm = document.createElement('em');
                    createEm.setAttribute('class', 'alter-ego');
                    createEm.innerHTML = data[elem].alterEgo;
                    createH4.appendChild(createEm);

                    let createP = document.createElement('p');
                    createP.setAttribute('class', 'powers');
                    createP.innerHTML = data[elem].abilities;
                    createLi.appendChild(createP);
                }
            })
    })
})();
