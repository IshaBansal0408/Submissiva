import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}
  user: any;
  ngOnInit(): void {}
  login_btn() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      // console.log(this.user.role);

      if (this.user.role == null) {
        this.router.navigate(['/login']);
      } else {
        window.alert('You are already Logged In to an account!');
        if (this.user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      }
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }
  register_btn() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      // console.log(this.user.role);

      if (this.user.role == null) {
        this.router.navigate(['/register']);
      } else {
        window.alert('You are already Logged In to an account!');
        if (this.user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      }
    } catch (error) {
      this.router.navigate(['/register']);
    }
  }
}
