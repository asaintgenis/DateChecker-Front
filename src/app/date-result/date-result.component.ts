import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DateService } from '../date.service';
import {DateResponse} from "../date.model";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-date-result',
  templateUrl: './date-result.component.html',
  styleUrls: ['./date-result.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DateService]
})
export class DateResultComponent implements OnDestroy {

  dateResult: DateResponse;
  dateSubscription: Subscription;

  constructor(private dateService: DateService) {
    this.dateSubscription = this.dateService.getDate().subscribe(dateResponse => this.dateResult = dateResponse);
  }

  changeDateResult() {
    console.log('change result:' + this.dateResult);
    if (this.dateResult) {
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.dateSubscription.unsubscribe()
  }

}
