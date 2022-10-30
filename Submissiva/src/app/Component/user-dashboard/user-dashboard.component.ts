import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  newIdea() {
    this.router.navigate(['/create-idea']);
  }
  allIdea() {
    this.router.navigate(['/all-idea']);
  }
  activePoll() {
    this.router.navigate(['/all-polls']);
  }
  showCat() {
    this.router.navigate(['/categories']);
  }
}
