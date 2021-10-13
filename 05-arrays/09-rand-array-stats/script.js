/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn=document.getElementById('run');
    var btnMin=document.getElementById('min');
    var btnMax=document.getElementById('max');
    var tabRandom=[];
    var minNbre;

    function randomNumbers(){
        var min=1;
        var max=100;
        var nombre=Math.floor(Math.random() * (max-min))+min;
        tabRandom.push(nombre);
        return nombre;
    }
    
    

    btn.addEventListener('click', function (){
        for(i=1; i<=10;i++){
            var tab = document.getElementById('n-'+i);
            tab.innerHTML=randomNumbers();
        }
        
        btnMin.innerHTML=Math.min(...tabRandom);
        btnMax.innerHTML=Math.max(...tabRandom);
        console.log();
    })
})();
