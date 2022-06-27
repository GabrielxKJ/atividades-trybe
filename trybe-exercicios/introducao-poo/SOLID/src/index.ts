/* eslint-disable no-tabs */
/* eslint-disable complexity */
type Discipline = {
	name: string;
	grade: number;
	letterGrade?: string;
};

type Student = {
	name: string;
	disciplines: Discipline[];
};
// converter // função que converte os valores da notas em letras
const percentageGradesIntoLetters = (
	{ name: studentName, disciplines }: Student,
): { name: string, disciplines: Discipline[] } => ({
	name: studentName,
	disciplines: disciplines.map(({ name, grade }) => {
		let letterGrade;

		if (grade >= 0.9) letterGrade = 'A';
		else if (grade >= 0.8) letterGrade = 'B';
		else if (grade >= 0.7) letterGrade = 'C';
		else if (grade >= 0.6) letterGrade = 'D';
		else if (grade >= 0.1) letterGrade = 'E';
		else letterGrade = 'F';

		return { name, grade, letterGrade };
	}),
});

// determianar // função que busca todos os alunos com a média maior que 7
const approvedStudents = ({ disciplines }: Student): boolean => disciplines.every(
	({ grade }) => grade > 0.7,
);

// atualizar // atualiza o banco de dados
const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
	console.log(`A pessoa com nome ${studentName} foi aprovada!`);

	disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
	students.map(percentageGradesIntoLetters)
		.filter(approvedStudents)
		.map(updateApprovalData);
}

// const Students = [
	// {
		// name: 'Lee',
		// disciplines: [
			// { name: 'matemática', grade: 0.8 },
			// { name: 'história', grade: 0.6 },
		// ],
	// },
	// {
		// name: 'Clementine',
		// disciplines: [
			// { name: 'matemática', grade: 0.8 },
			// { name: 'história', grade: 0.9 },
		// ],
	// },
// ];

// Agora não precisamos ler todo o código para saber exatamente o que a função faz! Além disso, nosso 
// código está mais testável, podemos escrever testes unitários para cada função muito 
// mais facilmente.

export {
	percentageGradesIntoLetters,
	approvedStudents,
	updateApprovalData,
	setApproved,
};