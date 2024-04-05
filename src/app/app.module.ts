import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { InputFormComponent } from './components/input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    LoginComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
