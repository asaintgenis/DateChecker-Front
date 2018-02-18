import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DateService {

  private dateSource = new BehaviorSubject<JSON>(JSON.parse('{}'));
  currentDate = this.dateSource.asObservable();

  constructor() {
  }

  changeDate(message: JSON) {
    this.dateSource.next(message);
    console.log(message);
  }

}
