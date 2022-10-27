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
  register_btn() {}
  login_btn() {}
}
