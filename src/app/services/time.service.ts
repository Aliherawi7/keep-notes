import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  date: Date
  constructor() {
    this.date = new Date();
  }

  getTimeAndDateString(): string {
    let daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "SaturDay"]
    let monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]
    return daysName[this.date.getDay()] + ", " + monthsName[this.date.getMonth()] + " " + this.date.getDate() + ", " + this.date.getFullYear()
  }

  getTimeMessage(): string {
    var hour = this.date.getHours()
    console.log(hour, this.date.getHours())
    if (hour < 12)
      return 'Good Morning';

    if (hour >= 12 && hour <= 18)
      return "Good Afternoon";

    return "Good Evening";
  }

}
