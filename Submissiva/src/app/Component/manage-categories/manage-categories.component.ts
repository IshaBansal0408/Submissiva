import { Router } from '@angular/router';
import { CategoryService } from './../../Service/Category/category.service';
import { Category } from './../../Class/Category/category.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css'],
})
export class ManageCategoriesComponent implements OnInit {
  public newCat!: FormGroup;
  allCategories!: Category[];
  constructor(private catService: CategoryService, private router: Router) {
    this.newCat = new FormGroup({
      categoryName: new FormControl(''),
      categoryDescription: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.catService.getCategoryList().subscribe((res) => {
      this.allCategories = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Category;
      });
      console.log(this.allCategories);
    });
  }
  addNewCat() {
    console.log(this.newCat.value);
    this.catService.createCategory(this.newCat.value);
    window.alert('Category Added Successfully!');
    this.newCat.reset();
  }
  deleteCat(cat: any) {
    if (confirm('Are you sure you want to delete : ' + cat.categoryName)) {
      this.catService.deleteCategory(cat);
    }
  }
}
