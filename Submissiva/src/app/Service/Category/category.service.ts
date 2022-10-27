import { Category } from './../../Class/Category/category.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private firestore: AngularFirestore) {}

  // 1. Create New Category
  createCategory(cat: Category) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('category-collection')
        .add(cat)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  // 2. Read User Category
  getCategoryDoc(id: any) {
    return this.firestore
      .collection('category-collection')
      .doc(id)
      .valueChanges();
  }
  getCategoryList() {
    return this.firestore.collection('category-collection').snapshotChanges();
  }

  // 3. Update Category Data
  updateCategory(cat: Category, id: any) {
    return this.firestore.collection('category-collection').doc(id).update({
      categoryName: cat.categoryName,
      categoryDescription: cat.categoryDescription,
    });
  }

  // 4. Delete Category Data
  deleteCategory(cat: any) {
    return this.firestore
      .collection('category-collection')
      .doc(cat.id)
      .delete();
  }
}
