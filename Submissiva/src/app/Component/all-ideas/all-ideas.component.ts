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
  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    this.ideaService.getIdeaList().subscribe((res) => {
      this.allIdeas = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Idea;
      });
      console.log(this.allIdeas);
    });
  }
}
