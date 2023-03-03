import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-newnavbar',
  templateUrl: './newnavbar.component.html',
  styleUrls: ['./newnavbar.component.scss']
})
export class NewnavbarComponent implements OnInit {

  constructor( private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  itsDark = false
  darkMode$ = this.darkModeService.darkMode$

  onToggle(): void {
    this.darkModeService.toggle()
    this.itsDark = !this.itsDark
  }

}
