import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss'],
})
export class AdminDashComponent implements OnInit {
  constructor() {}
  user = JSON.parse(localStorage.getItem('user')!);
  uName = this.user.firstName + ' ' + this.user.lastName;

  ngOnInit(): void {}
}
