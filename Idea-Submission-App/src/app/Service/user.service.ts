import { User } from '../Service/shared/user';
import { from, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  // Get All Ideas Submitted
  getAllUsers(): Observable<User[]> {
    return this.firestore.collection<User>('users').valueChanges();
  }
  // Add New User
  addNewUser(user: User) {
    return this.firestore.collection('users').add(user);
  }
}
