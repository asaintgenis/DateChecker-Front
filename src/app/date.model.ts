export class DateResponse {
  public static fromJson(json: Object): DateResponse {
    return new DateResponse(
      json['year'],
      json['month'],
      json['dayOfMonth']
    );
  }

  constructor(public year: string,
              public month: string,
              public dayOfMonth: string) {
  }
}

export class DateRequest {
  constructor(public dateToParse: string,
              public pattern: string) {
  }
}
