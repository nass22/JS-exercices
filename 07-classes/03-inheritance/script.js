/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn = document.getElementById('run');
    class Animal {
        constructor(name) {
            this.name = name;
        }

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Dog extends Animal {
        static greeting = "Hello ";
    }

    class Cat extends Animal {
        static greeting = "Hello ";
    }


    btn.addEventListener('click', function () {
    var dog = new Dog('Charlie');
    var cat = new Cat('Kira');
    console.log(dog.sayHello());
    console.log(cat.sayHello());
})
}) ();
