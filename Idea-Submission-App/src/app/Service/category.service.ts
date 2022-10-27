import { Category } from './shared/category';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private firestore: AngularFirestore) {}

  // Get All Ideas Submitted
  getAllCategories(): Observable<Category[]> {
    return this.firestore.collection<Category>('categories').valueChanges();
  }
  // Add New User
  addNewCategory(c: Category) {
    return this.firestore.collection('categories').add(c);
  }
}
