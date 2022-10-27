import { Router } from '@angular/router';
import { EmployeeService } from './../../Service/Employee/employee.service';
import { Employee } from './../../Class/Employee/employee.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  public loginUser!: FormGroup;
  allUsers!: Employee[];
  constructor(private userService: EmployeeService, private router: Router) {
    this.loginUser = new FormGroup({
      userName: new FormControl(''),
      userPassword: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.userService.getUserList().subscribe((res) => {
      // console.log(res);

      this.allUsers = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Employee;
      });

      // console.log(this.allUsers);
    });
  }

  login() {
    var tempUser = this.loginUser.value;

    this.allUsers.forEach((e) => {
      // console.log();
      if (
        e.userName === tempUser.userName &&
        e.userPassword === tempUser.userPassword
      ) {
        console.log('Success!');
        localStorage.setItem('user', JSON.stringify(e));
        window.alert('Login Successful!');
        // this.router.navigate(['/home']);
        if (e.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      } else {
        console.log('Denied!');
      }
    });
  }
}
