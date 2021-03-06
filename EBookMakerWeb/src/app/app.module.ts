import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import {  ErrorInterceptor } from './helpers/errorinterceptor';
import {  JwtInterceptor } from './helpers/jwtinterceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {UserService} from './services/user.service';
import { AuthComponent } from './components/auth/auth.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavComponent,
    HomeComponent,
    BookComponent,
    ProfileComponent,
    UpdatebookComponent,
    BookDetailComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AngularEditorModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
