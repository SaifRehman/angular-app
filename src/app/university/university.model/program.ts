import {Department} from './department';
export class Program {
    id: number;
    name: string;
    totalCreditHours: number;
    // Complex types
    department: Department;
}
