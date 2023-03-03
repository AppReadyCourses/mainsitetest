import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-learning-detail',
  templateUrl: './my-learning-detail.component.html',
  styleUrls: ['./my-learning-detail.component.scss'],
})
export class MyLearningDetailComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
