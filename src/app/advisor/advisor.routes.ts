import {Routes} from '@angular/router';
import {ListAdvisorsComponent} from './list-advisors/list-advisors.component';
import {AddAdvisorComponent} from './add-advisor/add-advisor.component';
import {ViewAdvisorComponent} from './view-advisor/view-advisor.component';

export const advisorRoutes: Routes = [
  {path: 'list', component: ListAdvisorsComponent},
  {path: 'add', component: AddAdvisorComponent},
  {path: 'view', component: ViewAdvisorComponent},
];
