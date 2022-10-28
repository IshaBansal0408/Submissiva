import { ActivatedRoute, Router } from '@angular/router';
import { Idea } from 'src/app/Class/Idea/idea.model';
import { IdeaService } from './../../Service/Idea/idea.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css'],
})
export class CreatePollComponent implements OnInit {
  constructor(
    private ideaService: IdeaService,
    private router: Router,
    private act: ActivatedRoute
  ) {}
  allIdeas!: Idea[];
  filteredIdeas = new Array();
  ngOnInit(): void {
    const cat = this.act.snapshot.paramMap.get('categoryName');
    this.ideaService.getIdeaList().subscribe((res) => {
      this.allIdeas = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Idea;
      });
      // console.log(this.allIdeas);
      this.allIdeas.forEach((e) => {
        if (e.ideaCategory != cat) {
          // console.log(e);
          this.filteredIdeas.push(e);
        }
        // console.log(e);
        // console.log(this.filteredIdeas);
      });
    });
  }
  pollList = new Array();
  pointer = 0;
  addToPoll(i: any) {
    // check if its a new Poll
    if (this.pollList.length == 0) {
      this.pollList.push(i);
      window.alert(i.ideaName + ' is added to the poll!');
    }
    // if it has one element
    else if (this.pollList.length == 1) {
      // if I am passing the same idea again
      if (i == this.pollList[0]) {
        window.alert(
          'Please choose a different idea!\nIdea Already exists in the poll'
        );
      } else {
        this.pollList.push(i);
        window.alert(i.ideaName + ' is added to the poll!');
        window.alert(
          'Current Pool is between : \n\n' +
            this.pollList[0].ideaName +
            '\n' +
            this.pollList[1].ideaName
        );
      }
    }
    // If the list already has 2 elements
    else if (this.pollList.length == 2) {
      if (this.pollList[0] == i || this.pollList[1] == i) {
        window.alert('Idea already present in the poll list!');
        window.alert(
          'Current Pool is between : \n\n' +
            this.pollList[0].ideaName +
            '\n' +
            this.pollList[1].ideaName
        );
      } else {
        if (this.pointer == 0) {
          this.pollList[this.pointer] = i;
          this.pointer = 1;
        } else {
          this.pollList[this.pointer] = i;
          this.pointer = 0;
        }
        window.alert(
          'Current Pool is between : \n\n' +
            this.pollList[0].ideaName +
            '\n' +
            this.pollList[1].ideaName
        );
      }
    }
  }
  createPoll() {
    if (this.pollList.length == 0) {
      window.alert('Poll list is empty!');
    } else if (this.pollList.length == 1) {
      window.alert(
        'Only one element in the poll list! \n' + this.pollList[0].ideaName
      );
    } else {
      if (
        confirm(
          'Create Poll Between these two? \n\n' +
            this.pollList[0].ideaName +
            '\n' +
            this.pollList[1].ideaName
        )
      ) {
        console.log('Poll created!');
      }
    }
  }
}
