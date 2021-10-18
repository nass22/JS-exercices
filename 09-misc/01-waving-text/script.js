/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const text = document.getElementById('target');
    const letter = Array.from(text.textContent);

    text.innerHTML = ' ';
    const newText = Array.from(text);



    for (i = 0; i < letter.length; i++) {
        letter[i] = "<span>" + letter[i] + "</span>";
        newText.push(letter[i]);
    }


    text.innerHTML = newText.join('');

    const span = document.querySelectorAll('#target span');
    


        for (i = 0; i < span.length; i++) {
            let number = [i].toString();
            let reste = number % 10;
            let dizaine = (number - reste) / 10;
            

            
            
            if ([i] < 10) {
                span[i].setAttribute('style', 'font-size:' + [20 + reste] + 'px');
                
            } else {
                if (dizaine % 2 == 0) {
                    span[i].setAttribute('style', 'font-size:' + [20 + reste] + 'px');
                   
                } else if (dizaine % 2 != 0) {
                    span[i].setAttribute('style', 'font-size:' + [20 - reste] + 'px');
                    
                }
            }
            console.log(span[i]);
        }
    }) ();
