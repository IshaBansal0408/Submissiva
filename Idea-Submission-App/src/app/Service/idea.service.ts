import { Idea } from '../Service/shared/idea';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  constructor(private firestore: AngularFirestore) {}

  // Get All Ideas Submitted
  getAllIdeas(): Observable<Idea[]> {
    return this.firestore.collection<Idea>('ideas').valueChanges();
  }
  // Add New User
  addNewIdea(idea: Idea) {
    return this.firestore.collection('ideas').add(idea);
  }
}
