import { Category } from './../../Class/Category/category.model';
import { Router } from '@angular/router';
import { CategoryService } from './../../Service/Category/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-show-poll-cat',
  templateUrl: './show-poll-cat.component.html',
  styleUrls: ['./show-poll-cat.component.css'],
})
export class ShowPollCatComponent implements OnInit {
  constructor(private catService: CategoryService, private route: Router) {}

  allCategories!: Category[];
  ngOnInit(): void {
    this.catService.getCategoryList().subscribe((res) => {
      this.allCategories = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Category;
      });
    });
  }
}
