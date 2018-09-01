import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DateService} from '../date.service';
import {DateRequest} from "../date.model";

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

  constructor(private dateService: DateService) { }

  ngOnInit() {
  }

  parseDate() {
    this.dateService.callDate(new DateRequest(this.dateToParse, this.pattern));
  }
}
