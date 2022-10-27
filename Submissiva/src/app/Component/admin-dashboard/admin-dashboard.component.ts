import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user')!);
  uName = this.user.firstName + ' ' + this.user.lastName;

  ngOnInit(): void {
    // console.log(this.user.userName);
  }
}
