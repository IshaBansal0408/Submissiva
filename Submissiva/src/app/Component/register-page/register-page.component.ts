import { Router } from '@angular/router';
import { EmployeeService } from './../../Service/Employee/employee.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  public registerUser!: FormGroup;

  constructor(
    private userService: EmployeeService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {
    this.registerUser = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      userEmail: new FormControl(''),
      userName: new FormControl(''),
      userPassword: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  register() {
    if (this.registerUser.value.userName === 'IshaBansal0408') {
      this.registerUser.value.role = 'admin';
    } else {
      this.registerUser.value.role = 'user';
    }
    console.log(this.registerUser.value);
    this.userService.createUser(this.registerUser.value);
    window.alert('Registration Successful!');
    this.router.navigate(['/login']);
  }
}
