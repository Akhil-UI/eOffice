import { Component, AfterViewInit } from '@angular/core';
import { DirectionService } from '../shared/services/direction.service';

import { Router, RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements AfterViewInit{

  //active = 1;
  constructor(public directionService: DirectionService, public router: Router) {
  }
  
  ngAfterViewInit() {}
}
