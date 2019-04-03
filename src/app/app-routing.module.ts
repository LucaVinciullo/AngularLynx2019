import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListComponent } from './components/list/list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'list', component: ListComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'detail', component: DetailComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
