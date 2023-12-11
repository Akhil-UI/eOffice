import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Tabledata, data } from '../../../../assets/data';
import { API, Columns, APIDefinition, DefaultConfig, Config } from 'ngx-easy-table';
import {  NgbDate, NgbDateStruct, NgbCalendar, NgbDatepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  
export class MainsectionComponent implements OnInit {
  @ViewChild('table') table: APIDefinition;

  public configuration: Config;
  public columns: Columns[];
  public data: Tabledata[] = [];
  public selected = new Set();

  constructor(private cdr: ChangeDetectorRef, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {

  
  }

  ngOnInit(): void {
    this.columns = [
      { key: '', title: '', searchEnabled: false, width: '2%' },
      { key: '', title: '', searchEnabled: false, width: '2%' },
      { key: '', title: '', searchEnabled: false, width: '2%' },
      { key: 'user', title: 'User' },
      { key: 'subject', title: 'Subject' },
      { key: 'project', title: 'Document Type' },
      { key: 'timestamp', title: 'Submitted Date & Time'},
      { key: 'reference', title: 'Reference No' },
    ];
    this.data = data;

    this.configuration = { ...DefaultConfig };
    //this.configuration.infiniteScroll = true;
    this.configuration.paginationEnabled = false;
    this.configuration.searchEnabled = true;
    this.configuration.rows = 100;
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;
    //this.configuration.checkboxes = true;
    
  }


  onChange(row: any): void {
    const index = this.data.indexOf(row);
    if (this.selected.has(index)) {
      this.selected.delete(index);
    } else {
      this.selected.add(index);
    }
  }

  model1: string;
  model2: string;
  
  

  // model: NgbDateStruct;
  // hoveredDate: NgbDate | null = null;

  // fromDate: NgbDate | null;
	// toDate: NgbDate | null = null;

  // onDateSelection(date: NgbDate) {
	// 	if (!this.fromDate && !this.toDate) {
	// 		this.fromDate = date;
	// 	} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
	// 		this.toDate = date;
	// 	} else {
	// 		this.toDate = null;
	// 		this.fromDate = date;
	// 	}
	// }

  // isHovered(date: NgbDate) {
	// 	return (
	// 		this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
	// 	);
	// }

	// isInside(date: NgbDate) {
	// 	return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	// }

	// isRange(date: NgbDate) {
	// 	return (
	// 		date.equals(this.fromDate) ||
	// 		(this.toDate && date.equals(this.toDate)) ||
	// 		this.isInside(date) ||
	// 		this.isHovered(date)
	// 	);
  // }

  // validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
	// 	const parsed = this.formatter.parse(input);
	// 	return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	// }


}
