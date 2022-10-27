import { Student } from './../../Class/Student/student.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private angularFirestore: AngularFirestore) {}

  getStudentDoc(id: any) {
    return this.angularFirestore
      .collection('student-collection')
      .doc(id)
      .valueChanges();
  }
  getStudentList() {
    return this.angularFirestore
      .collection('student-collection')
      .snapshotChanges();
  }

  createStudent(student: Student) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('student-collection')
        .add(student)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteStudent(student: any) {
    return this.angularFirestore
      .collection('student-collection')
      .doc(student.id)
      .delete();
  }

  updateStudent(student: Student, id: any) {
    return this.angularFirestore
      .collection('student-collection')
      .doc(id)
      .update({
        stuName: student.stuName,
        stuEmail: student.stuEmail,
        stuFees: student.stuFees,
      });
  }
}
