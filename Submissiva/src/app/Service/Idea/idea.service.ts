import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Idea } from 'src/app/Class/Idea/idea.model';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  constructor(private firestore: AngularFirestore) {}

  // 1. Create New Idea
  createIdea(idea: Idea) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('idea-collection')
        .add(idea)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  // 2. Read User Ideas
  getIdeaDoc(id: any) {
    return this.firestore.collection('idea-collection').doc(id).valueChanges();
  }
  getIdeaList() {
    return this.firestore.collection('idea-collection').snapshotChanges();
  }

  // 3. Update Idea Data
  updateIdea(idea: Idea, id: any) {
    return this.firestore.collection('idea-collection').doc(id).update({
      ideaName: idea.ideaName,
      ideaGoal: idea.ideaGoal,
      ideaDescription: idea.ideaDescription,
      ideaCategory: idea.ideaCategory,
    });
  }

  // 4. Delete Idea Data
  deleteUser(idea: any) {
    return this.firestore.collection('idea-collection').doc(idea.id).delete();
  }

  // 5. Upvote Idea
  upvoteIdea(idea: Idea, id: any) {
    return this.firestore
      .collection('idea-collection')
      .doc(id)
      .update({
        ideaUpvotes: idea.ideaUpvotes + 1,
      });
  }

  // 6. Upvote Idea
  downvoteIdea(idea: Idea, id: any) {
    return this.firestore
      .collection('idea-collection')
      .doc(id)
      .update({
        ideaDownvotes: idea.ideaDownvotes + 1,
      });
  }

  // 7. Get Idea by Category
  getAllIdeasByCategory(cat: any) {
    return this.firestore.collection('idea-collection').doc(cat).valueChanges();
  }

  adduser2upvote(idea: Idea, id: any, userName: any) {
    return this.firestore
      .collection('idea-collection')
      .doc(id)
      .update({
        upvotedUser: idea.upvotedUser.concat(userName),
      });
  }

  adduser2downvote(idea: Idea, id: any, userName: any) {
    return this.firestore
      .collection('idea-collection')
      .doc(id)
      .update({
        downvotedUser: idea.downvotedUser.concat(userName),
      });
  }
}
