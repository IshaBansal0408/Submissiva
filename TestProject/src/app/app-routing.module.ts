import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'all', component: ViewAllComponent },
  { path: 'update-student/:id', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
