import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { CheckBoxComponent } from './check-box/check-box.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

const appRoutes:Routes = [
                  {
                    path : 'home',
                    component : HomeComponent
                  },
                  {
                    path : 'employees/:id/:name',
                    component : EmployeesComponent
                  },
                  {
                    path : '',
                    redirectTo : '/home',
                    pathMatch : 'full'
                 },
                 {
                     path:'**',
                     component : PageNotFoundComponent
                 }
               ];
@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    CheckBoxComponent,
    HomeComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
