import { Router } from '@angular/router';
import { User } from './../Service/shared/user';
import { Observable } from 'rxjs';
import { UserService } from './../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submissiva-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private uService: UserService, private router: Router) {}

  ngOnInit(): void {}
  allUsers$!: Observable<User[]>;
  allUsers: any;
  selectedUser: any;
  flag = 0;

  login(form: NgForm) {
    console.log(form.value);
    this.allUsers$ = this.uService.getAllUsers();
    this.allUsers$.subscribe((response) => {
      // console.log(response);
      this.allUsers = response;
      // console.log(typeof this.allUsers[0]);
      if (Object.keys(this.allUsers).length == 0) {
        window.alert('No Users in Records!\nPlease Register!');
        this.router.navigate(['/register']);
      } else {
        var tempKeys = Object.keys(
          this.allUsers
        ) as (keyof typeof this.allUsers)[];
        for (const element of tempKeys) {
          var tempUser = this.allUsers[element];
          // console.log(tempUser);

          if (
            tempUser.userName === form.value.userName &&
            tempUser.userPassword === form.value.userPassword
          ) {
            console.log('Good to Go!');
            this.selectedUser = tempUser;
            window.alert('Login Successful!');
            localStorage.setItem('user', JSON.stringify(this.selectedUser));
            if (this.selectedUser.role === 'admin') {
              this.router.navigate(['/admin-dash']);
            } else {
              this.router.navigate(['/user-dash']);
            }
            this.flag = 1;
            break;
          } else {
            console.log('Did Not Match!');
          }
        }
        if (this.flag == 0) {
          window.alert('invalid');
          // location.reload();
        }
      }
    });
  }
}
