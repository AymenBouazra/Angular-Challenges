import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginV2Component } from './login-v2/login-v2.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page404Component } from './page404/page404.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginV2Component,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    Page404Component,
    UpdateComponent,
    ListComponent,
    AddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
