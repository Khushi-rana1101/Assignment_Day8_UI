import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//lets configure two routes for our app
//one for dept and ther for emp
const routes: Routes = [

  {path : 'departments',component: DepartmentListComponent},
  {path : 'employees', component: EmployeeListComponent},
  {path : "test", component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myRoutingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent]
