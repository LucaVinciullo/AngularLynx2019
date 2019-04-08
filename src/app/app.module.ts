import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';



import { CarouselComponent } from './components/carousel/carousel.component';
import { NgImageSliderModule, NgImageSliderComponent } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FeedbackComponent,
    DetailComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    NavbarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    NgImageSliderModule
=======

>>>>>>> 923a6caffea4cf341e90400118d91a1d1ef6e678
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
