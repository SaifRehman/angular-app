import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ListAdminsComponent } from './list-admins/list-admins.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import {RouterModule} from '@angular/router';
import {adminRoutes} from "./admin.routes";

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(adminRoutes),
  ],
  declarations: [AddAdminComponent, ListAdminsComponent, ViewAdminComponent]
})
export class AdminModule { }
