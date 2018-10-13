export class DateResponse {
  public static fromJson(json: Object): DateResponse {
    return new DateResponse(
      json['year'],
      json['month'],
      json['dayOfMonth'],
      json['hours'],
      json['minutes'],
      json['seconds'],
      json['milli'],
      json['timezone']
    );
  }

  constructor(public year: string,
              public month: string,
              public dayOfMonth: string,
              public hours: string,
              public minutes: string,
              public seconds: string,
              public milli: string,
              public timezone: string) {
  }
}

export class DateRequest {
  constructor(public dateToParse: string,
              public pattern: string,
              public dateType: DateType) {
  }
}

export enum DateType {
  LOCAL_DATE, LOCAL_DATETIME, ZONED_DATETIME, LEGACY
}
