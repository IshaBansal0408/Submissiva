import { Employee } from './../../Class/Employee/employee.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private firestore: AngularFirestore) {}

  // 1. Create New User
  createUser(user: Employee) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('user-collection')
        .add(user)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  // 2. Read User Data
  getUserDoc(id: any) {
    return this.firestore.collection('user-collection').doc(id).valueChanges();
  }
  getUserList() {
    return this.firestore.collection('user-collection').snapshotChanges();
  }

  // 3. Update User Data
  updateStudent(user: Employee, id: any) {
    return this.firestore.collection('user-collection').doc(id).update({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      userPassword: user.userPassword,
    });
  }

  // 4. Delete User Data
  deleteStudent(user: any) {
    return this.firestore.collection('user-collection').doc(user.id).delete();
  }
}
