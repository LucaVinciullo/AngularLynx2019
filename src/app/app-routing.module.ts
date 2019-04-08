import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListComponent } from './components/list/list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path:'list', component: ListComponent},
  {path: '', redirectTo: '/login', pathMatch:"full"},
  {path: 'register', component: RegisterComponent}
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
