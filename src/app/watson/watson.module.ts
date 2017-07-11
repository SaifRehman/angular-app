import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WatsonNLPComponent} from './watson-nlp/watson-nlp.component';
import {WatsonVisionComponent} from './watson-vision/watson-vision.component';
import {WatsonSpeechToTextComponent} from './watson-speechtotext/watson-speechtotext.component';
import {PI} from './watson-PI/watson-PI.component';


import {WatsonService} from './watson.service';
import {RouterModule} from '@angular/router';
import {watsonRoutes} from './watson.routes';
import {FormsModule} from '@angular/forms';
import { NvD3Component } from 'ng2-nvd3';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(watsonRoutes),
    FormsModule,
    ChartModule,
  ],
  declarations: [
    WatsonNLPComponent,
    WatsonVisionComponent,
    WatsonSpeechToTextComponent,
    PI,

  ],
  exports: [
  ],
  providers: [
    WatsonService,
  ],
})

export class WatsonModule {
}