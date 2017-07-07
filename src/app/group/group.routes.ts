import {Routes} from '@angular/router';
import {ListGroupsComponent} from './list-groups/list-groups.component';
import {AddGroupComponent} from './add-group/add-group.component';
import {ViewGroupComponent} from './view-group/view-group.component';
import {ReportingGroupComponent} from './reporting-group/reporting-group.component';

export const groupRoutes: Routes = [
  {path: 'list', component: ListGroupsComponent},
  {path: 'add', component: AddGroupComponent},
  {path: 'report', component: ReportingGroupComponent},
  {path: 'view/:id', component: ViewGroupComponent},
  {path: 'edit/:id', component: AddGroupComponent},
];
