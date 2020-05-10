import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { MockquizComponent } from './adminportal/mockquiz/mockquiz.component';


const routes: Routes = [
  {path:"app", component:AppComponent},
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"adminportal", component:AdminportalComponent}, 
  {path:"register", component:RegisterComponent},
  {path:"mockquiz", component:MockquizComponent},
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
