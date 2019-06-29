import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  myMethod(){
    let id = 10;
    let name = 'test';
    this.router.navigate(['/employees',id,name]);
  }

  ngOnInit() {
  }

}
