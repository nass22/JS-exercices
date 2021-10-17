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

    const text=document.getElementById('target');
    const letter=Array.from(text.textContent);

    text.innerHTML=' ';
    const newText=Array.from(text);
    


    for(i=0;i<letter.length;i++){
        letter[i]="<span>"+letter[i]+"</span>";
        newText.push(letter[i]); 
       }
       
       
    text.innerHTML=newText.join('');
    

    const span=document.querySelectorAll('#target span');

    
    
    for(i=0;i<span.length; i++){
        span[i].setAttribute('style', 'font-size:'+[i+10]+'px');
        let breakWave=Math.round(span.length/4);
        let breakWave2=breakWave*2;
        let breakWave3=breakWave*3;
        let breakWave4=breakWave*4;
        /*
        switch (i){
            case breakWave:
                span[i].setAttribute('style', 'font-size:'+[i-10]+'px');
    
                break;
            case breakWave2:
                span[i].setAttribute('style', 'font-size:'+[i+10]+'px');
                break;
            case breakWave3:
                span[i].setAttribute('style', 'font-size:'+[i-10]+'px');
                break;
            case breakWave4:
                span[i].setAttribute('style', 'font-size:'+[i+10]+'px');
                break;
            default:
                span[i].setAttribute('style', 'font-size:'+[i+10]+'px');
        }*/
        
        

        console.log(span[i]);
    }
    
    

    /*
    const textSize=newText.join(' ');
    text.innerHTML=textSize;
    */
    
   

        
})();
