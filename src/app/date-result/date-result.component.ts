import {Component, Input, ViewEncapsulation} from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date-result',
  templateUrl: './date-result.component.html',
  styleUrls: ['./date-result.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DateService]
})
export class DateResultComponent {

  @Input() parsedDate;

}
