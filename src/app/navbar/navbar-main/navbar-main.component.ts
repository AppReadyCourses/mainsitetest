import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss'],
})
export class NavbarMainComponent implements OnInit {
  constructor(private apollo: Apollo) {}
  users: any;
  ngOnInit(): void {}

  getUsers() {
    console.log('query runs');
    return this.apollo
      .query({ query: users })
      .pipe(map((res) => console.log('res', res.data)));
  }
}

const users = gql`
  query {
    getUsers {
      id
      created
      username
      role
    }
  }
`;
