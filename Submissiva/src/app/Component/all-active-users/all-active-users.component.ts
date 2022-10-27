import { Employee } from './../../Class/Employee/employee.model';
import { EmployeeService } from './../../Service/Employee/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissiva-all-active-users',
  templateUrl: './all-active-users.component.html',
  styleUrls: ['./all-active-users.component.css'],
})
export class AllActiveUsersComponent implements OnInit {
  allUsers!: Employee[];

  constructor(private userService: EmployeeService) {}

  ngOnInit(): void {
    this.userService.getUserList().subscribe((res) => {
      this.allUsers = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Employee;
      });
      console.log(this.allUsers);
    });
  }

  removeUser(user: any) {
    if (user.userName === 'IshaBansal0408') {
      alert("Admin Can't be deleted!");
    } else {
      if (confirm('Are you sure?!' + user.firstName + ' ' + user.lastName)) {
        this.userService.deleteUser(user);
      }
    }
  }
}
