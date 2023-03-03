import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.scss'],
})
export class NavbarProfileComponent implements OnInit {
  // firstName = 'Jack';
  lastName = 'Smith';
  interestedIn = 'UI/UX Designer';
  profileJson: any;

  constructor() {}

  ngOnInit(): void {}
}
