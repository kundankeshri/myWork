import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],

})
export class EmployeesComponent implements OnInit {ing;
  id : any;
  constructor(private router: Router,private activatedRoute:ActivatedRoute) { }

  myMethod(){
    this.router.navigateByUrl('home');
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
         console.log(JSON.stringify(params));
         console.log(params.id);
    })
  }

}
