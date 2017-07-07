import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewGroupComponent} from './view-group/view-group.component';
import {AddGroupComponent} from './add-group/add-group.component';
import {ListGroupsComponent} from './list-groups/list-groups.component';
import {ReportingGroupComponent} from './reporting-group/reporting-group.component';
import {GroupService} from './group.service';
import {RouterModule} from '@angular/router';
import {groupRoutes} from './group.routes';
import {FormsModule} from '@angular/forms';
import { NvD3Component } from 'ng2-nvd3';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(groupRoutes),
    FormsModule,
    ChartModule,
  ],
  declarations: [
    ViewGroupComponent,
    AddGroupComponent,
    ListGroupsComponent,
    ReportingGroupComponent,
    NvD3Component
  ],
  exports: [
  ],
  providers: [
    GroupService,
  ],
})
export class GroupModule {
}