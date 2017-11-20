import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DateFormComponent implements OnInit {

  dateToParse = {};

  dateResult = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  parseDate() {
    this.http.post('api/date', this.dateToParse)
      .subscribe(res => {
        console.log(res);
        this.dateResult = res;
      }, (err) => {
        console.log(err);
      });
  }
}
