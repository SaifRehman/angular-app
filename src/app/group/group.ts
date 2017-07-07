// Defines the Group entity for strong typing in TypeScript
import {Advisor} from '../advisor/advisor';
import {Student} from '../student/student.model/student';

export class Group {
    id: number;
    ajyalId: string;
    name: string;
    description: string;
    advisor: Advisor;
    students: Student[];
}
