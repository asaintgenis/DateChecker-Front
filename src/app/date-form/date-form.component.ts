import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DateService} from '../date.service';
import {DateRequest, DateResponse} from '../date.model';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DateService]
})
export class DateFormComponent implements OnInit {

  dateToParse: string = "";
  pattern: string = "";
  parsedDate: DateResponse;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.dateService.getDate().subscribe(dateResponse => {
      this.parsedDate = dateResponse;
    });
  }

  parseDate() {
    this.dateService.callDate(new DateRequest(this.dateToParse, this.pattern));
  }
}
