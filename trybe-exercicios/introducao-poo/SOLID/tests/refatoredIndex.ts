type Discipline = {
	name: string;
	grade: number;
	letterGrade?: string;
};

type Student = {
	name: string,
	disciplines: Discipline[],
	school?: string;
}

const GRADE_DICT = {
	numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
	letters: ['A', 'B', 'C', 'D', 'E']
};

// função menor para remover o uso excessivo de if/else's

const getGradeLetter = (gradeNumber: number): string => {
	const gradeNumbers = GRADE_DICT.numbers;
	const gradeLetters = GRADE_DICT.letters;
	for (let i = 0; i < gradeNumbers.length; i += 1) {
		if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
	}
	return 'F';
};

// coletar notas
const getLetterGrade = ( discipline: Discipline): Discipline => ({
	...discipline,
	letterGrade: getGradeLetter(discipline.grade)
});

// determinar
const approvedStudents = ({	disciplines }: Student): boolean => disciplines
.every(({ grade }) => grade > 0.7);

// atualizar 

const updateApprovalData = ( student: Student): void => {
	console.log(`Pessoa com o nome ${student.name} foi aprovada!`);

	student.disciplines.forEach(({ name, letterGrade}) =>
	 console.log(`${name}: ${letterGrade}}`))
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};

