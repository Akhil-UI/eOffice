import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


const ngboostrapModules = [
  NgbDropdownModule,
  NgbNavModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbCarouselModule,
  NgbTooltipModule,
  NgbAlertModule
]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...ngboostrapModules
  ],
  exports: [
    ...ngboostrapModules
  ]
})
export class NgBootstrapModule { 

  model: NgbDateStruct;
	date: { year: number; month: number };

	constructor(private calendar: NgbCalendar) {}

	selectToday() {
		this.model = this.calendar.getToday();
	}
}
