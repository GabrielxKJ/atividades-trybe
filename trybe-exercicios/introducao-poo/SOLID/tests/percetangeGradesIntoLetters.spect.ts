import { expect } from "chai";
import { percentageGradesIntoLetters } from "../src";

const disciplinesDict = {
	mathematics: 'matemática',
};

describe('Testando a função "percentageGradesIntoLetters"', function () {
	describe('quando a nota é maior ou igual a 9.0', function () {
		it('retorna "A"', function () {
			const student = {
				name: 'Lee',
				disciplines: [
					{ name: disciplinesDict.mathematics, grade: 0.9 },
				],
			}
			const {
				disciplines: [{letterGrade}] } = percentageGradesIntoLetters(student);
				expect(letterGrade).to.be.equal('A');
		});
	});
});
