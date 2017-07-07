import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGuardianComponent } from './add-guardian/add-guardian.component';
import { ViewGuardianComponent } from './view-guardian/view-guardian.component';
import { ListGuardiansComponent } from './list-guardians/list-guardians.component';
import {RouterModule} from '@angular/router';
import {guardianRoutes} from './guardian.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(guardianRoutes),
  ],
  declarations: [AddGuardianComponent, ViewGuardianComponent, ListGuardiansComponent]
})
export class GuardianModule { }
