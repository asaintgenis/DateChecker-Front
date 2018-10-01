export class DateResponse {
  public static fromJson(json: Object): DateResponse {
    return new DateResponse(
      json['year'],
      json['month'],
      json['day']
    );
  }

  constructor(public year: string,
              public month: string,
              public day: string) {
  }
}

export class DateRequest {
  constructor(public dateToParse: string,
              public pattern: string) {
  }
}
