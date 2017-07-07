import {Routes} from '@angular/router';
import {ListAdminsComponent} from './list-admins/list-admins.component';
import {AddAdminComponent} from './add-admin/add-admin.component';
import {ViewAdminComponent} from './view-admin/view-admin.component';

export const adminRoutes: Routes = [
    {path: 'list', component: ListAdminsComponent},
    {path: 'add', component: AddAdminComponent},
    {path: 'view', component: ViewAdminComponent},
];
