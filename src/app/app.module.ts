import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SkillsComponent } from './skills/skills.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { FlousPipe } from './flous.pipe';
import { UserToDoComponent } from './user-to-do/user-to-do.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';


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
    SkillsComponent,
    AddProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    SearchpipePipe,
    FlousPipe,
    UserToDoComponent,
    AddUserComponent,
    UpdateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
