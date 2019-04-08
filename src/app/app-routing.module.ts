import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListComponent } from './components/list/list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'list', component: ListComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'detail', component: DetailComponent},
  {path: '', redirectTo: '/login', pathMatch:"full"}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
