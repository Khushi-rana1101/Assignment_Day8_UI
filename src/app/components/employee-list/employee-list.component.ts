import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  
  emp:any[];
  constructor(){
    //array of employees
  this.emp=[
    {
      ename:"Khushi",
      enumber:12341,
      eportfolio: "CBO"
      
  
    },
    {
      ename:"Ram",
      enumber:97786,
      eportfolio: "S&A"
  
    },
    {
      ename:"Sita",
      enumber:65647,
      eportfolio: "EP"
  
    },
    {
      ename:"John",
      enumber:34543,
      eportfolio: "CBO"
  
    }
  
  ]
}
  
  
  ngOnInit(): void {
   
  }

}
