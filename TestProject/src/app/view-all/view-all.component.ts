import { StudentService } from './../Service/Student/student.service';
import { Student } from './../Class/Student/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit {
  allStudent!: Student[];

  constructor(private service: StudentService) {}

  ngOnInit(): void {
    this.service.getStudentList().subscribe((res) => {
      this.allStudent = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Student;
      });
    });
  }
  removeStudent(student: any) {
    if (confirm('Are you sure?!') + student.stuName) {
      this.service.deleteStudent(student);
    }
  }
}
