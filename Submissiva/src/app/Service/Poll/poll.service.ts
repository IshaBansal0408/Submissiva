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
}
