import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss'],
})
export class UserDashComponent implements OnInit {
  constructor() {}
  user = JSON.parse(localStorage.getItem('user')!);
  uName = this.user.firstName + ' ' + this.user.lastName;

  ngOnInit(): void {}
}
