import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit{
  
  dept:any[];
  constructor(){
    //array of cars
  this.dept=[
    {
      op:"CBO",
      tg:"CIS"
      
  
    },
    {
      op:"CBO",
      tg:"CE"
  
    },
    {
      op:"S&A",
      tg:"AI & DO"
  
    },
    {
      op:"EP",
      tg:"SAP"
  
    }
  
  ]
}
  ngOnInit(): void {
    
  }

}
