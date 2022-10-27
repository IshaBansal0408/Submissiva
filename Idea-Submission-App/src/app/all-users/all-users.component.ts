import { User } from './../Service/shared/user';
import { Observable } from 'rxjs';
import { UserService } from './../Service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  constructor(private uService: UserService) {}
  allUsers$!: Observable<User[]>;
  ngOnInit(): void {
    this.allUsers$ = this.uService.getAllUsers();
  }
}
