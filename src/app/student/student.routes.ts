import {Routes} from '@angular/router';
import {ListStudentsComponent} from './list-students/list-students.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {ViewStudentComponent} from './view-student/view-student.component';

export const studentRoutes: Routes = [
  {path: 'list', component: ListStudentsComponent},
  {path: 'add', component: AddStudentComponent},
  {path: 'view', component: ViewStudentComponent},
];
