"use strict";
class Person {
    constructor(name, height, weight, age) {
        this.name = name;
        this._weight = weight;
        this.height = height;
        this._age = age;
    }
    getWeight() {
        return this._weight;
    }
    // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
    get age() {
        return this._age;
    }
    set age(newValue) {
        if (newValue >= 0 && newValue < 200)
            this._age = newValue;
    }
    birthday() {
        this._age += 1;
    }
}
const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);
p1.name = 'Mariah';
console.log(p1.name);
console.log(p1.getWeight());
console.log(p2.birthday());
