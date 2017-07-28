import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
const ROUTES = [
{  
  path:'',
  redirectTo:'dashboard',  
  pathMatch:'full'
},
// {
//   path:'dashboard',
//   component:DashboardComponent
// },
{
  path:'form',
  component:FormComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FormComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
