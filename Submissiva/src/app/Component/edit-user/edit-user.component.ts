import { EmployeeService } from './../../Service/Employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  public editUserForm!: FormGroup;
  constructor(
    private userService: EmployeeService,
    private formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private route: Router
  ) {
    this.editUserForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      userEmail: new FormControl(''),
      userName: new FormControl(''),
      userPassword: new FormControl(''),
      role: new FormControl(''),
    });
  }
  userRef: any;
  ngOnInit(): void {
    const uId = this.act.snapshot.paramMap.get('id');
    console.log('Id of the User is : ', uId);
    this.userService.getUserDoc(uId).subscribe((res) => {
      console.log(res);
      this.userRef = res;
      this.editUserForm.setValue(this.userRef);
    });
  }
  editUser() {
    const id = this.act.snapshot.paramMap.get('id');
    this.userService.updateUser(this.editUserForm.value, id);
    window.alert('User Updated Successfully!');
    this.route.navigate(['/all-users']);
  }
}
