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
    var hour = this.date.getHours() > 12 ? this.date.getHours() / 2 : this.date.getHours();
    if (hour >= 6 && this.date.toLocaleTimeString().includes('PM'))
      return "Good Evening";
    if (hour <= 5 && this.date.toLocaleTimeString().includes("PM"))
      return "Good Afternoon";
    return 'Good Morning';
  }

}
