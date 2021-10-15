/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target=document.getElementById('target');
    var table=document.createElement("table");
    target.appendChild(table);
    

    
        for (i=0; i<10; i++){
            var row=document.createElement("tr");
            var ligne=document.createElement("td");
            row.appendChild(ligne);
            console.log(row);
            table.appendChild(row);
    }
})();
