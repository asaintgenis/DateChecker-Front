import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateFormComponent } from '../date-form/date-form.component';

@Component({
  selector: 'app-date-result',
  templateUrl: './date-result.component.html',
  styleUrls: ['./date-result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DateResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
