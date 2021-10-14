/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn=document.getElementById('run');

    class Person{
        constructor(firstname,lastname) {
            this.firstname=firstname;
            this.lastname=lastname;            
        }

        get fullName(){
            return this.firstname + this.lastname;
        }

        set fullName(value){
            const espace=value.split(" ");
            this.firstname= espace[0];
            this.lastname=espace[1];
        }
    }



    btn.addEventListener('click', () => {
        var test=new Person('Samir', 'Nacer');
        console.log(test.fullName);
    })
})();
