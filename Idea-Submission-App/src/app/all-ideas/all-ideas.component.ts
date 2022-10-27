import { Idea } from './../Service/shared/idea';
import { Observable } from 'rxjs';
import { IdeaService } from './../Service/idea.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.scss'],
})
export class AllIdeasComponent implements OnInit {
  constructor(private iService: IdeaService) {}
  allIdeas$!: Observable<Idea[]>;
  ngOnInit(): void {
    this.allIdeas$ = this.iService.getAllIdeas();
  }
}
