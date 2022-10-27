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
  constructor(private router: Router, private ideaService: IdeaService) {
    this.addIdea = new FormGroup({
      ideaName: new FormControl(''),
      ideaCategory: new FormControl(''),
      ideaOwner: new FormControl(''),
      ideaGoal: new FormControl(''),
      ideaDescription: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  createIdea() {
    this.addIdea.value.ideaOwner =
      this.user.firstName + ' ' + this.user.lastName;
    this.addIdea.value.ideaUpvotes = 0;
    this.addIdea.value.ideaDownvotes = 0;
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
