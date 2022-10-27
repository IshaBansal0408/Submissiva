import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryService } from './../Service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../Service/shared/category';

@Component({
  selector: 'app-submissiva-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss'],
})
export class ManageCategoriesComponent implements OnInit {
  constructor(private cService: CategoryService) {}
  allCategories$!: Observable<Category[]>;
  ngOnInit(): void {
    this.allCategories$ = this.cService.getAllCategories();
  }
  addNewCategory(form: NgForm) {
    console.log(form.value);
    this.cService.addNewCategory(form.value);
    this.allCategories$ = this.cService.getAllCategories();
    window.alert('Category Added Successfully!');
  }
}
