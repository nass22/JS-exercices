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

    var target = document.getElementById('target');
    var table = document.createElement("table");
    table.setAttribute('id','table')
    target.appendChild(table);
    var nbre=0;
    
    for(i=0; i<10; i++){
        
        var tb=document.getElementById('table');
        var titreLigne=document.createElement('tr');
        tb.appendChild(titreLigne);
        var titreCol=document.createElement('th');
        titreCol.innerHTML="Table de "+(nbre+1);
        titreLigne.appendChild(titreCol);

        function table(nbre){
            for (j=1; j<11; j++){
                var createTr=document.createElement('tr');
                tb.appendChild(createTr);
                var createTd=document.createElement('td');
                createTd.innerHTML=j+"x"+nbre+"="+nbre*j;
                createTr.appendChild(createTd);
            }    
        }
        nbre++;    
        table(nbre);
    }

})();
