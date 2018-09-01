import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateService } from '../date.service';
import {DateResponse} from "../date.model";

@Component({
  selector: 'app-date-result',
  templateUrl: './date-result.component.html',
  styleUrls: ['./date-result.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DateService]
})
export class DateResultComponent implements OnInit {

  dateResult: DateResponse;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.dateService.subscribeDate()
      .subscribe(dateResult => this.dateResult = dateResult);
  }

  changeDateResult() {
    console.log('change result 1:' + this.dateResult);
    if (this.dateResult == null) {
      return false;
    }
    console.log('change result 2:' + this.dateResult);
    return true;
  }

}
