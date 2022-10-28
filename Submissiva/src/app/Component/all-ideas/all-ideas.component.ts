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
  upvoteMap: { [id: string]: boolean } = {};
  downvoteMap: { [id: string]: boolean } = {};
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
      // console.log(this.allIdeas);
      this.allIdeas.forEach((e) => {
        // console.log(e.id);
        this.upvoteMap[e.id] = false;
        this.downvoteMap[e.id] = false;
      });
    });
    console.log(this.upvoteMap);
    // for (let i in this.upvoteMap) {
    //   console.log(i + ' ' + this.upvoteMap[i]);
    // }
  }

  // touchedUpvote: any;
  upvoteIdea(i: any) {
    this.ideaService.upvoteIdea(i, i.id);
    // console.log(i.ideaUpvotes);
    // this.touchedUpvote = true;
    this.upvoteMap[i.id] = true;
    // console.log(this.upvoteMap[i.id]);
  }
  downvoteIdea(i: any) {
    this.ideaService.downvoteIdea(i, i.id);
    // console.log(i.ideaDownvotes);
  }

  downloadIdea(i: any) {}
}
