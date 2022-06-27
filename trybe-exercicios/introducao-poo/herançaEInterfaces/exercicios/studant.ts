import Person from './Person'

export default class Student extends Person {
    private _enrollment: number;
    private _examsGrades: number;
    private _workGrades: number;

    get getEnrollment() { return this._enrollment;}
    set setEnrollment( value: number) { this._enrollment = value }
    get getExamesGrade() { return this._enrollment; }
    set setExamesGrade( value: number) { this._examsGrades = value }
    get getWorkGrades() { return this._workGrades;}
    set setWorkGrades( value: number) {this._workGrades = value}

    constructor(name: string, data: Date, enroll: number, exams:number ) {
        super(name, data);
    }

} 