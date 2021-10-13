/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
        

    const performOperation = operation => {
        var a=document.getElementById('op-one').value;
        var chiffre1=parseInt(a);
        var b=document.getElementById('op-two').value;
        var chiffre2=parseInt(b);     

        switch (operation){
            
            case 'addition':
                alert(chiffre1+chiffre2);
                break;
            case 'substraction':
                alert(chiffre1-chiffre2);
                break;
            case 'multiplication':
                alert(chiffre1*chiffre2);
                break;
            case 'division':
                alert(chiffre1/chiffre2);
                break;
            default:
                alert("Réessayez!");
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
