import { Observable } from 'rxjs';
import { IdeaService } from './../Service/idea.service';
import { CategoryService } from './../Service/category.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Category } from '../Service/shared/category';

@Component({
  selector: 'app-submissiva-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.scss'],
})
export class AddIdeaComponent implements OnInit {
  constructor(
    private router: Router,
    private cService: CategoryService,
    private iService: IdeaService
  ) {}
  user = JSON.parse(localStorage.getItem('user')!);
  allCategories$!: Observable<Category[]>;

  ngOnInit(): void {
    this.allCategories$ = this.cService.getAllCategories();
    console.log(this.allCategories$);
  }

  addNewIdea(form: NgForm) {
    // form.value.category = form.value.category[0];
    form.value.emp_name = this.user.firstName + ' ' + this.user.lastName;
    form.value.upvotes = 0;
    form.value.downvotes = 0;
    console.log(form.value);
    this.iService.addNewIdea(form.value);
    window.alert('Idea Added Successfully!');
    this.router.navigate(['/all-ideas']);
  }

  goToDashboard() {
    if (this.user.role === 'admin') {
      this.router.navigate(['/admin-dash']);
    } else {
      this.router.navigate(['/user-dash']);
    }
  }
}
