import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date-result',
  templateUrl: './date-result.component.html',
  styleUrls: ['./date-result.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DateService]
})
export class DateResultComponent implements OnInit {

  dateResult: JSON;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    console.log(this.dateResult);
    this.dateService.currentDate.subscribe(dateResult => this.dateResult = dateResult);
  }

  changeDateResult() {
    console.log('change result 1:' + JSON.stringify(this.dateResult));
    if (this.dateResult == null || Object.keys(this.dateResult).length === 0) {
      return false;
    }
    console.log('change result 2:' + JSON.stringify(this.dateResult));
    return true;
  }

}
