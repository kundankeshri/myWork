import { Component,OnInit } from '@angular/core';
import {EmployeesService} from './app.component.service';
import {IEmployee} from './interface'
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
 template: `
 <br>
 <app-check-box [all] = "getTotalEmployeeCount()"
             [female] = "getTotalFemaleEmployeeCount()"
             [male] = "getTotalMaleEmployeeCount()"
            (countRadioButtonSelectionChange) ="onEmployeeCountRadioButtonChanged($event)" >
</app-check-box>
   <br><br>
   <ng-container *ngIf='test == true'>
  <table  border="1">
                <thead>
                   <tr>
                      <th>Code</th>
                       <th>Name</th>
                        <th>Gender</th>
                       <th>Annual Salary</th>

                     </tr>
                </thead>
                    <tbody>
                    <ng-container *ngFor ='let employee of employees;'>
                       <tr *ngIf= "selectedEmployeeCountRadioButton == 'All' || selectedEmployeeCountRadioButton == employee.gender">
                        <td>{{employee.code }}</td>
                         <td>{{employee.name  | customPipe : employee.gender }}</td>
                         <td>{{employee.gender }}</td>
                         <td>{{employee.annualSalary }}</td>
                        </tr>
                       </ng-container>
                    </tbody>
             </table>
             </ng-container>
             <br/>

            `,
  styleUrls: ['./app.component.css'],
  providers : [EmployeesService]
})
export class AppComponent implements OnInit {
  employees : IEmployee[];
  selectedEmployeeCountRadioButton : string ='All';
  test = false;

  //private _employeeService : EmployeesService;
 constructor(private _employeeService : EmployeesService){
   //this._employeeService = _employeeService;
   //this.employees = this._employeeService.getEmployees();
 }

 ngOnInit(){
    setTimeout(() => { this.test = true }, 2000);
   this.employees = [{code:'emp101',name:'Kundan',gender:'Male',annualSalary:500,dateOfBirth : '5/16/1988'},
     {code:'emp102',name:'keshri',gender:'Male',annualSalary:1000.123456 , dateOfBirth : '6/16/1989'},
     {code:'emp103',name:'Mike',gender:'Male',annualSalary:1500 , dateOfBirth : '5/16/1980'},
     {code:'emp104',name:'Mary',gender:'Female',annualSalary:5000 , dateOfBirth : '2/6/1998'}];
//  this.employees = this._employeeService.getEmployees();
 }


 getTotalEmployeeCount () : number {
   return this.employees.length;
 }

 getTotalFemaleEmployeeCount () : number {
   return this.employees.filter(e => e.gender === 'Female').length;
 }

 getTotalMaleEmployeeCount () : number {
   return this.employees.filter(e => e.gender === 'Male').length;
 }

  onEmployeeCountRadioButtonChanged(selectedValue : string) : void {
    this.selectedEmployeeCountRadioButton = selectedValue;
  }

}
