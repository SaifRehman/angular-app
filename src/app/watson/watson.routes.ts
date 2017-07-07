import {Routes} from '@angular/router';
import {WatsonNLPComponent} from './watson-nlp/watson-nlp.component'
import {WatsonVisionComponent} from './watson-vision/watson-vision.component'
import {WatsonSpeechToTextComponent} from './watson-speechtotext/watson-speechtotext.component'



export const watsonRoutes: Routes = [
  {path: 'nlp', component: WatsonNLPComponent},
  {path: 'vision', component: WatsonVisionComponent},
  {path: 'speechtotext', component: WatsonSpeechToTextComponent},

];
