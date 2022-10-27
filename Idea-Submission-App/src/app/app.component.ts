import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Idea-Submission-App';
  constructor(private router: Router) {}
  user: any;
  logout_btn() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      if (this.user.role == null) {
        window.alert('Please Login First!');
        this.router.navigate(['/login']);
      } else {
        localStorage.clear();
        window.alert('Logout Successful!');
        this.router.navigate(['/home']);
      }
    } catch (error) {
      window.alert('Please Login First!');
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
          this.router.navigate(['/admin-dash']);
        } else {
          this.router.navigate(['/user-dash']);
        }
      }
    } catch (error) {
      this.router.navigate(['/register']);
    }
  }
  login_btn() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      // console.log(this.user.role);

      if (this.user.role == null) {
        this.router.navigate(['/login']);
      } else {
        window.alert('You are already Logged In to an account!');
        if (this.user.role === 'admin') {
          this.router.navigate(['/admin-dash']);
        } else {
          this.router.navigate(['/user-dash']);
        }
      }
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }

  goToDashboard() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      // console.log(this.user.role);

      if (this.user.role == null) {
        window.alert('You need to Login First!');
        this.router.navigate(['/login']);
      } else {
        if (this.user.role === 'admin') {
          this.router.navigate(['/admin-dash']);
        } else {
          this.router.navigate(['/user-dash']);
        }
      }
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }
}
