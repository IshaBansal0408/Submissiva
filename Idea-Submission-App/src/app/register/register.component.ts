import { UserService } from './../Service/user.service';

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submissiva-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private uService: UserService, private router: Router) {}

  ngOnInit(): void {}

  register(form: NgForm) {
    console.log(form.value);
    if (form.value.userName === 'IshaBansal0408') {
      form.value.role = 'admin';
    } else {
      form.value.role = 'user';
    }
    this.uService.addNewUser(form.value);
    window.alert('You have registered successfully!');
    this.router.navigate(['/login']);
  }
}
