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
    if (this.date.getHours() >= 12 && this.date.toLocaleTimeString().includes("PM"))
      return "Good Afternoon";
    if (this.date.getHours() > 5 && this.date.toLocaleTimeString().includes('PM'))
      return "Good Evening";

    return 'Good Morning';
  }

}
