import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import {RouterModule} from '@angular/router';
import {studentRoutes} from './student.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes),
  ],
  declarations: [AddStudentComponent, ViewStudentComponent, ListStudentsComponent]
})
export class StudentModule { }
