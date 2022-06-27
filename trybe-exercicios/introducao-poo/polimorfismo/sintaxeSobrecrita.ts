class Animal {
    constructor( public name: string) {}
    move() { console.log(`${this.name} está se movendo`);}
}
class Bird extends Animal {
    move() {
        // super.move(); sobre escreve o método da subclasse.
         console.log(`${this.name} está voando`);}
}

class Mammal extends Animal {
    move() { console.log(`${this.name} está andando`)}
}

const a = new Animal('Tubarão');
const b = new Bird('Andorinha');
const c = new Mammal('Urso');

const myMove = (animal: Animal) => {
    animal.move()
};

myMove(a);
myMove(b);
myMove(c);

// Conforme você viu na aula passada, sabe que podemos passar uma subclasse quando uma 
// superclasse é esperada, visto que ela possui todos os métodos que a superclasse possui.

// ------------------------------------------------------------------------------------------------

// CLASSES ABSTRATAS

abstract class AbstractAnimal {
    constructor(public name: string) { }
   // A ideia é que a superclasse,
   // não deve fazer ideia de como esse método deve funcionar,
   // apenas saber que ele existe.
    abstract move(): void 
  }

class Fish extends AbstractAnimal {
    move() { console.log(`${this.name} está nadando.`); }
}


// MÉTODOS E ATRIBUTOS ESTÁTICOS


