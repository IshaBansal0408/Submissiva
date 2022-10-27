import { StudentService } from './../Service/Student/student.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  public editForm!: FormGroup;
  studentRef: any;

  constructor(
    private service: StudentService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private route: Router
  ) {
    this.editForm = this.formBuilder.group({
      stuName: [''],
      stuEmail: [''],
      stuFees: [''],
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    this.service.getStudentDoc(id).subscribe((res) => {
      this.studentRef = this.formBuilder.group({
        stuName: [this.studentRef.stuName],
        stuEmail: [this.studentRef.stuEmail],
        stuFees: [this.studentRef.stuFees],
      });
    });
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.service.updateStudent(this.editForm.value, id);
    this.route.navigate(['/all']);
  }
}
