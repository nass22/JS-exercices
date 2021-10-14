/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn = document.getElementById('run');

    class person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        sayHello() {
            console.log("Hello " + this.firstname + " " + this.lastname);
        }
    }

    btn.addEventListener('click', () => {
        var test=new person('Samir', 'Nacer');
        test.sayHello();
    })
})();
