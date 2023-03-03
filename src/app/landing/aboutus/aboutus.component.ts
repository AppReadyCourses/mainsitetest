import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }

  itsDark = false
  darkMode$ = this.darkModeService.darkMode$

  ngOnInit(): void {
  }

  onToggle(): void {
    this.darkModeService.toggle()
    this.itsDark = !this.itsDark
  }

}
