import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutes } from './widgets.routing';

@NgModule({
    imports: [
        RouterModule.forChild(WidgetsRoutes),
        CommonModule,
        FormsModule
    ],
    declarations: [WidgetsComponent]
})

export class WidgetsModule {}
