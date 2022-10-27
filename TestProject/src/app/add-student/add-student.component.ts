import { Router } from '@angular/router';
import { StudentService } from './../Service/Student/student.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  public addForm: FormGroup;

  constructor(
    public service: StudentService,
    public formbuilder: FormBuilder,
    private router: Router
  ) {
    // this.addForm = this.formbuilder.group({
    //   stuName: [''],
    //   stuEmail: [''],
    //   stuFees: [''],
    // });
    this.addForm = new FormGroup({
      stuName: new FormControl(''),
      stuEmail: new FormControl(''),
      stuFees: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.service.createStudent(this.addForm.value);
    console.log(this.addForm.value);

    // this.router.navigate(['/all']);
  }
}
