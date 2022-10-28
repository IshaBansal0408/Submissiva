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
    this.pService.voteIdea1(p, p.id);
  }
  voteIdea2(p: any) {
    this.pService.voteIdea2(p, p.id);
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
