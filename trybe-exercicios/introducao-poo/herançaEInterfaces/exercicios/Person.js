"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(nome, birthDate) {
        if (nome.length < 3) {
            console.log('O nome deve conter no mínimo 3 caracteres');
        }
        this._name = nome;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getBirthDate", {
        get: function () {
            return this._birthDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setBirthDate", {
        set: function (newbirthDate) {
            this.validateBirthDate(newbirthDate);
            this._birthDate = newbirthDate;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (value) {
        var diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        var yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    };
    Person.prototype.validateName = function (value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres');
    };
    Person.prototype.validateBirthDate = function (value) {
        if (value.getTime() > new Date().getTime())
            throw new Error("\n\t\tA data de nascimento n\u00E3o pode ser uma data do futuro");
        if (Person.getAge(value) > 120)
            throw new Error(' A pessoa deve ter no máximo 120 anos ');
    };
    return Person;
}());
exports.default = Person;
