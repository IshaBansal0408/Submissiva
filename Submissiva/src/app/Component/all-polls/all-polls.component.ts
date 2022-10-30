import { Poll } from './../../Class/Poll/poll.model';
import { PollService } from './../../Service/Poll/poll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-all-polls',
  templateUrl: './all-polls.component.html',
  styleUrls: ['./all-polls.component.css'],
})
export class AllPollsComponent implements OnInit {
  constructor(private pService: PollService) {}
  allPolls: any;
  user = JSON.parse(localStorage.getItem('user')!);
  isAdmin = false;
  ngOnInit(): void {
    this.pService.getPollList().subscribe((res) => {
      this.allPolls = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Poll;
      });
      console.log(this.allPolls);
    });
    if (this.user.role === 'admin') {
      this.isAdmin = true;
    }
  }

  voteIdea1(p: any) {
    var temp = this.user.userName;
    console.log('Value of voted users before: ', p.voteUsers1);
    if (p.voteUsers1.includes(temp)) {
      console.log('present');
      window.alert('You have already voted ' + p.pollItem1.ideaName + ' !');
    } else if (p.voteUsers2.includes(temp)) {
      console.log('present');
      window.alert('You have already voted ' + p.pollItem2.ideaName + ' !');
    } else {
      console.log('not present!');
      this.pService.adduser2vote1(p, p.id, temp);
      this.pService.voteIdea1(p, p.id);
    }
    console.log('Value of voted users after: ', p.voteUsers1);
  }
  voteIdea2(p: any) {
    var temp = this.user.userName;
    console.log('Value of voted users before: ', p.voteUsers2);
    if (p.voteUsers1.includes(temp)) {
      console.log('present');
      window.alert('You have already voted ' + p.pollItem1.ideaName + ' !');
    } else if (p.voteUsers2.includes(temp)) {
      console.log('present');
      window.alert('You have already voted ' + p.pollItem2.ideaName + ' !');
    } else {
      console.log('not present!');
      this.pService.adduser2vote2(p, p.id, temp);
      this.pService.voteIdea2(p, p.id);
    }
    console.log('Value of voted users after: ', p.voteUsers2);
  }

  endPoll(poll: Poll) {
    console.log(poll.isActive);

    poll.isActive = !poll.isActive;
    poll.vote1Active = !poll.vote1Active;
    poll.vote2Active = !poll.vote2Active;
    console.log(poll.isActive);
    this.pService.EndPoll(poll, poll.id);
  }
}
