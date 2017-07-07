import {Routes} from '@angular/router';
import {ListUniversitiesComponent} from './list-universities/list-universities.component';
import {AddUniversityComponent} from './add-university/add-university.component';
import {ViewUniversityComponent} from './view-university/view-university.component';
export const universityRoutes: Routes = [
  {path: 'list', component: ListUniversitiesComponent},
  {path: 'add', component: AddUniversityComponent},
  {path: 'view/:id', component: ViewUniversityComponent},
];
