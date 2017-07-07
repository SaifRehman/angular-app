import {Routes} from '@angular/router';
import {ListGuardiansComponent} from './list-guardians/list-guardians.component';
import {AddGuardianComponent} from './add-guardian/add-guardian.component';
import {ViewGuardianComponent} from './view-guardian/view-guardian.component';

export const guardianRoutes: Routes = [
  {path: 'list', component: ListGuardiansComponent},
  {path: 'add', component: AddGuardianComponent},
  {path: 'view', component: ViewGuardianComponent},
];
