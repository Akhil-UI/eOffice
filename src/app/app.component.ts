import { Component } from '@angular/core';
import { DirectionService } from './shared/services/direction.service';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import Quill from 'quill'

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eOffice';
  password: string | undefined;

  blurred = false
  focused = false
  
  constructor(public directionService: DirectionService) { 

  }
  
   disabled = false;
  compact = true;
  invertX = false;
  invertY = false;

  shown: 'native' | 'hover' | 'always' = 'native';

  setShown() {
    if (this.shown === 'native') {
      this.shown = 'hover';
    } else if (this.shown === 'hover') {
      this.shown = 'always';
    } else {
      this.shown = 'native';
    }
  }


  
  
}
