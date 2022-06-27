class Employee{
    private static employeeCount = 0;

    constructor( public name: string) {
        Employee.addEmployees();
    }

    private static addEmployees() {
        this.employeeCount += 1;
    }

    static get employees() {
        return this.employeeCount;
    }
}

//Observe que o this no contexto de um método estático se refere à classe, não ao objeto.
//Em métodos não estáticos ou fora da classe você deve utilizar o nome da classe para referenciar
//seus atributos e métodos estáticos.

//Entretanto, é importante salientar que na maioria das vezes é preferível criar uma função normal,
//no mesmo módulo que a classe está sendo criada, exportando-as de forma separada.
//Isso facilita a vida de quem vai usar.