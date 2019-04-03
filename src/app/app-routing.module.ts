import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /*{path: 'Homepage', component: HomepageComponent},
  {path: 'List', component: },
  {path: 'Cards', component: },
  {path: 'Feedback', component: },
  {path: 'Profilo', component: },
  {path: 'Esci', component: } */
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
