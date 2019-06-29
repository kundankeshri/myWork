import { Injectable } from '@angular/core';
import {IEmployee} from './interface';

import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class EmployeesService {

  getEmployees() : IEmployee[] {
     return [
       {code:'emp101',name:'Kundan',gender:'Male',annualSalary:500,dateOfBirth : '5/16/1988'},
       {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000.123456 , dateOfBirth : '6/16/1989'},
       {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500 , dateOfBirth : '5/16/1980'},
       {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000 , dateOfBirth : '2/6/1998'}
     ]
  }

}
