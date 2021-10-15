/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //A FINIR!!!

    var target = document.getElementById('target');
    var table = document.createElement("table");

    target.appendChild(table);

    var x = 2;
    var y = 2;
    var calcul = x * y;



    for (f = 0; f < 10; f++) {

        //création de 10 tableaux:
        var thead = document.createElement("thead");
        var th = document.createElement("th");

        var tr = document.createElement("tr");
        var tbody = document.createElement("tbody");
        var row = document.createElement("tr");
        var column = document.createElement("td");

        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        


        for (i = 0; i < 11; i++) {
            var ligne = document.createElement("td");
            row.appendChild(ligne);
            var row = document.createElement("tr");
            tbody.appendChild(row);
        }

        var td = document.getElementsByTagName("td");
        var multiple2 = 1;
        
        for (j = 1; j < 11; j++) {
            
            var multiple1 = [j];
            var result = multiple1 * multiple2;
            td[j - 1].innerHTML = multiple1 + "x" + multiple2 + "=" + result;
            
        }
        multiple2++;
        console.log(td);
        
    }



})();
