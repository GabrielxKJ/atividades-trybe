export default class Person {
	private _name: string;
	private _birthDate: Date;

	constructor(nome: string, birthDate: Date) {
		if(nome.length < 3) {
			console.log('O nome deve conter no mínimo 3 caracteres')
		}
		this._name = nome;
		this._birthDate = birthDate;
	}

	get getName() {
		return this._name
	}
	set setName(value: string) {
		this.validateName(value);
		this._name = value;
	}
	get getBirthDate() {
		return this._birthDate;
	}
	set setBirthDate(newbirthDate: Date) {
		this.validateBirthDate(newbirthDate);
		this._birthDate = newbirthDate;
	}

	static getAge(value: Date): number {
		const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
		const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
		return Math.floor(diff / yearMs);
	  }

	private validateName(value: string): void {
		if(value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres');
	}

	private validateBirthDate(value: Date): void {
		if(value.getTime() > new Date().getTime()) throw new Error(`
		A data de nascimento não pode ser uma data do futuro`);
		if(Person.getAge(value) > 120) throw new Error(' A pessoa deve ter no máximo 120 anos ')
	}
}