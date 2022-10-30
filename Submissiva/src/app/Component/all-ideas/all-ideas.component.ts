import { IdeaService } from './../../Service/Idea/idea.service';
import { Idea } from 'src/app/Class/Idea/idea.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.css'],
})
export class AllIdeasComponent implements OnInit {
  allIdeas!: Idea[];
  user: any;
  isAdmin = false;

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user.role === 'admin') {
      this.isAdmin = true;
    }
    this.ideaService.getIdeaList().subscribe((res) => {
      this.allIdeas = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Idea;
      });
    });
  }

  upvoteIdea(i: any) {
    var temp = this.user.userName;
    console.log('Value of upvoted users before: ', i.upvotedUser);
    if (i.upvotedUser.includes(temp)) {
      console.log('present');
      window.alert('You have already upvoted this idea!');
    } else if (i.downvotedUser.includes(temp)) {
      console.log('present');
      window.alert('You have already downvoted this idea!');
    } else {
      console.log('not present!');
      this.ideaService.upvoteIdea(i, i.id);
      this.ideaService.adduser2upvote(i, i.id, temp);
    }

    console.log('Value of upvoted users after: ', i.upvotedUser);
  }
  downvoteIdea(i: any) {
    var temp = this.user.userName;
    console.log('Value of downvoted users before: ', i.downvotedUser);
    if (i.downvotedUser.includes(temp)) {
      console.log('present');
      window.alert('You have already downvoted this idea!');
    } else if (i.upvotedUser.includes(temp)) {
      console.log('present');
      window.alert('You have already upvoted this idea!');
    } else {
      console.log('not present!');
      this.ideaService.downvoteIdea(i, i.id);
      this.ideaService.adduser2downvote(i, i.id, temp);
    }
    console.log('Value of downvoted users after: ', i.downvotedUser);
  }
}
