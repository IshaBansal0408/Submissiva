import { StudentService } from './../Service/Student/student.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
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
    this.editForm = new FormGroup({
      stuName: new FormControl(''),
      stuEmail: new FormControl(''),
      stuFees: new FormControl(''),
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    // console.log('Id of the Student : ', id);
    this.service.getStudentDoc(id).subscribe((res) => {
      // console.log('Student Details : ', res);
      this.studentRef = res;
      // console.log('Student Details : ', res);
      this.editForm.setValue(this.studentRef);
      // console.log('Form Values : ', this.editForm.value);
    });
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.service.updateStudent(this.editForm.value, id);
    this.route.navigate(['/all']);
  }
}
