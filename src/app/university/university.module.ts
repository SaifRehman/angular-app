import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUniversitiesComponent } from './list-universities/list-universities.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { ViewUniversityComponent } from './view-university/view-university.component';
import {RouterModule} from '@angular/router';
import {universityRoutes} from './university.routes';
import {UniversityService} from "./university.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(universityRoutes),
    FormsModule
  ],
  declarations: [ListUniversitiesComponent, AddUniversityComponent, ViewUniversityComponent],
  providers: [UniversityService]
})
export class UniversityModule { }
