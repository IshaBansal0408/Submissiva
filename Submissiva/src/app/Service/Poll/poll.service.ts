import { Poll } from './../../Class/Poll/poll.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private firestore: AngularFirestore) {}

  // 1. Create New Poll
  createNewPoll(poll: Poll) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('poll-collection')
        .add(poll)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  // 2. Get All Polls
  getPollList() {
    return this.firestore.collection('poll-collection').snapshotChanges();
  }

  // 3. End the Poll
  EndPoll(poll: Poll, id: any) {
    var d = new Date();
    var w: string;
    if (poll.pollVotes1 > poll.pollVotes2) {
      w = poll.pollItem1.ideaName;
    } else if (poll.pollVotes1 < poll.pollVotes2) {
      w = poll.pollItem2.ideaName;
    } else {
      w = "It's a Draw";
    }
    console.log(w);

    return this.firestore.collection('poll-collection').doc(id).update({
      isActive: poll.isActive,
      vote1Active: poll.vote1Active,
      vote2Active: poll.vote2Active,
      pollEndAt: d.toLocaleDateString(),
      pollWinner: w,
    });
  }

  // 4. Increase Votes for 1st Idea
  voteIdea1(poll: Poll, id: any) {
    return this.firestore
      .collection('poll-collection')
      .doc(id)
      .update({ pollVotes1: poll.pollVotes1 + 1 });
  }
  // 5. Increase Votes for 1st Idea
  voteIdea2(poll: Poll, id: any) {
    return this.firestore
      .collection('poll-collection')
      .doc(id)
      .update({ pollVotes2: poll.pollVotes2 + 1 });
  }
}
