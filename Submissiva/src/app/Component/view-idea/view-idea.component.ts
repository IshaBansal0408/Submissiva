import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Idea } from 'src/app/Class/Idea/idea.model';
import { IdeaService } from './../../Service/Idea/idea.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css'],
})
export class ViewIdeaComponent implements OnInit {
  constructor(
    private IdeaService: IdeaService,
    private act: ActivatedRoute,
    private route: Router
  ) {}
  e: any;
  ngOnInit(): void {
    const uId = this.act.snapshot.paramMap.get('id');
    console.log('Id of the User is : ', uId);
    this.IdeaService.getIdeaDoc(uId).subscribe((res) => {
      console.log(res);
      this.e = res;
    });
  }

  printIdea() {
    window.print();
  }
}
