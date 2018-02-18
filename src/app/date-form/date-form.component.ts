import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DateService} from '../date.service';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DateService]
})
export class DateFormComponent implements OnInit {

  dateToParse = {};

  constructor(private http: HttpClient, private dateService: DateService) { }

  ngOnInit() {
  }

  parseDate() {
    this.http.post('api/date', this.dateToParse)
      .subscribe(res => {
        console.log(res);
        this.dateService.changeDate(<JSON> res);
      }, (err) => {
        console.log(err);
      });
  }
}
