import { Component } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { notes } from '../../constants/Notes';
import { Note } from '../../constants/Notes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message: string
  dateMessage?: string
  recentNotes: Note[] = notes

  constructor(private timeService: TimeService) {
    this.message = this.timeService.getTimeMessage() + ", Herawi"
    this.dateMessage = this.timeService.getTimeAndDateString();
  }

}
