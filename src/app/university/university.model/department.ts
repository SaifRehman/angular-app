import {College} from './college';
export class Department {
    id: number;
    name: string;
    chairPerson: string;
    // Complex types
    college: College;
}
