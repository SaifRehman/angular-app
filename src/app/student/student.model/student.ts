import {StudentAcademics} from './student-academics';
import {Program} from '../../university/university.model/program';
import {University} from '../../university/university.model/university';

export class Student {
    id: number;
    ajyalId: string;
    title: string;
    firstName: string;
    secondName: string;
    thirdName: string;
    lastName: string;
    arabicName: string;
    gender: string;
    dateOfBirth: Date;
    placeOfBirth: string;
    nationality: string;
    maritalStatus: string;
    email: string;
    uaePhoneNumber: string;
    internationalPhoneNumber1: string;
    internationalPhoneNumber2: string;
    emergencyPhoneNumber: string;
    // Complex types
    studentAcademics: StudentAcademics;
    // Inherited types
    program: Program;
}
