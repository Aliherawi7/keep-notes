import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Paths } from '../../constants/Paths';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  route?: Router;
  number?: number;

  constructor() {
    let path = window.location.pathname;
    console.log(path)
    if (path.includes(Paths.notes)) {
      this.number = 1;
    } else if (path.includes(Paths.editNote) || path.includes(Paths.addNote)) {
      this.number = 1
    } else if (path.includes(Paths.home)) {
      this.number = 0;
    }
  }

  setActive(number: number) {
    this.number = number
  }


}
