import { Category } from './../../Class/Category/category.model';
import { CategoryService } from './../../Service/Category/category.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IdeaService } from './../../Service/Idea/idea.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.css'],
})
export class CreateIdeaComponent implements OnInit {
  public addIdea!: FormGroup;
  constructor(
    private router: Router,
    private ideaService: IdeaService,
    private catService: CategoryService
  ) {
    this.addIdea = new FormGroup({
      ideaName: new FormControl(''),
      ideaCategory: new FormControl(''),
      ideaOwner: new FormControl(''),
      ideaGoal: new FormControl(''),
      ideaDescription: new FormControl(''),
    });
  }

  allCategories!: Category[];
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

  createIdea() {
    this.addIdea.value.ideaOwner =
      this.user.firstName + ' ' + this.user.lastName;
    this.addIdea.value.ideaUpvotes = 0;
    this.addIdea.value.ideaDownvotes = 0;
    this.addIdea.value.createdAt = new Date().toLocaleDateString();
    console.log(this.addIdea.value.createdAt);
    this.addIdea.value.upvotedUser = [''];
    this.addIdea.value.downvotedUser = [''];
    console.log(this.addIdea.value);
    this.ideaService.createIdea(this.addIdea.value);
    window.alert('Idea Added Successfully!');
    this.router.navigate(['/all-idea']);
  }

  user = JSON.parse(localStorage.getItem('user')!);
  goToDashboard() {
    try {
      this.user = JSON.parse(localStorage.getItem('user')!);
      // console.log(this.user.role);

      if (this.user.role == null) {
        window.alert('You need to Login First!');
        this.router.navigate(['/login']);
      } else {
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
}
