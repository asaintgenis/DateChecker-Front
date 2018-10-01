import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {DateRequest, DateResponse} from "./date.model";
import {map} from "rxjs/operators";

@Injectable()
export class DateService {

  private dataSource = new Subject<DateResponse>();


  constructor(private http: HttpClient) {
  }

  callDate(dateToParse: DateRequest): void {
    this.http.post('api/date', dateToParse)
      .pipe(
        map(
          (json: Object) => DateResponse.fromJson(json)
        )
      ).subscribe(dateResponse => {
        console.log(dateResponse);
        this.dataSource.next(dateResponse);
      })
  }

  getDate(): Observable<DateResponse> {
    return this.dataSource.asObservable();
  }

}
