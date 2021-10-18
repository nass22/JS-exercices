/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    //problème de 0 qui reste pas lorsqu'on ajoute un autre numéro

    let btnOne=document.getElementById('part-one');
    let btnTwo=document.getElementById('part-two');
    let btnThree=document.getElementById('part-three');
    let btnFour=document.getElementById('part-four');

    let dataMinOne=btnOne.getAttribute('data-min');
    let dataMaxOne=btnOne.getAttribute('data-max');
    let numValue=document.getElementById('target');
    

    btnOne.addEventListener('click', () => {

        if (dataMinOne>dataMaxOne){
            dataMinOne=460;
        } else {
            dataMinOne++;
            numValue.textContent="+"+dataMinOne;
        }       
    })

    let dataMinTwo=btnTwo.getAttribute('data-min');
    let dataMaxTwo=btnTwo.getAttribute('data-max');
    

    btnTwo.addEventListener('click', () => {
        if (dataMinTwo>dataMaxTwo){
            dataMinTwo=00;
        } else if (dataMinTwo>=0 && dataMinTwo<9){
            dataMinTwo++;
            numValue.textContent="+" + dataMinOne.toString()+" " + (0+dataMinTwo.toString());
        } else {
            dataMinTwo++;
            numValue.textContent="+" + dataMinOne.toString() + " " +dataMinTwo.toString();
        } 
    })
    
    let dataMinThree=btnThree.getAttribute('data-min');
    let dataMaxThree=btnThree.getAttribute('data-max');

    btnThree.addEventListener('click', () => {
        if (dataMinThree>dataMaxThree){
            dataMinThree=00;
        } else if (dataMinThree>=0 && dataMinThree<9){
            dataMinThree++;
            numValue.textContent="+" + dataMinOne.toString()+ " " + dataMinTwo.toString() + " " +(0+dataMinThree.toString());
        } else {
            dataMinThree++;
            numValue.textContent="+" + dataMinOne.toString() + " " +dataMinTwo.toString() + " " + dataMinThree.toString();
        } 
    })

    let dataMinFour=btnFour.getAttribute('data-min');
    let dataMaxFour=btnFour.getAttribute('data-max');

    btnFour.addEventListener('click', () => {
        if (dataMinFour>dataMaxFour){
            dataMinFour=00;
        } else if (dataMinFour>=0 && dataMinFour<9){
            dataMinFour++;
            numValue.textContent="+" + dataMinOne.toString()+" " + dataMinTwo.toString() + " " + dataMinThree.toString() + " " +(0+dataMinFour.toString());
        } else {
            dataMinFour++;
            numValue.textContent="+" + dataMinOne.toString() + " " +dataMinTwo.toString() + " " + dataMinThree.toString() + " " + dataMinFour.toString();
        } 
    })
    






})();
