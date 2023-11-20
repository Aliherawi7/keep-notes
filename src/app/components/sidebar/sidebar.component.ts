import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Paths } from '../../constants/Paths';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  route?: Router;
  number?: number;
  activePath?: string;
  displayName: string = '';

  constructor(private router: Router, private firebaseService: FirebaseService) {
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


  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.url;
      }
    });
    this.displayName = localStorage.getItem('keepNotesUserName') || ''
  }

  logout() {
    this.firebaseService.logOut()

  }


}
