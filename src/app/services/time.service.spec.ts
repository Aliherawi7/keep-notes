import { TestBed } from '@angular/core/testing';

import { TimeService } from './time.service';

describe('TimeService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe("it sould gives the time in string format", () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TimeService);
  })
  it('it sould return the date string', () => {
    var dateTime = new Date();
    var time = dateTime.getTime()
    console.log(time)

    expect(service.getTimeMessage()).toEqual("Good Afternoon")
  })


})
