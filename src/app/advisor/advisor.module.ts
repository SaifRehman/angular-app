import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdvisorComponent } from './add-advisor/add-advisor.component';
import { ViewAdvisorComponent } from './view-advisor/view-advisor.component';
import { ListAdvisorsComponent } from './list-advisors/list-advisors.component';
import {RouterModule} from '@angular/router';
import {advisorRoutes} from './advisor.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(advisorRoutes),
  ],
  declarations: [AddAdvisorComponent, ViewAdvisorComponent, ListAdvisorsComponent]
})
export class AdvisorModule { }
