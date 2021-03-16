import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch : 'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },{
    path :'add',
    component:AddComponent
  },
  {
    path: 'list',
    component:ListComponent
  }, 
  {
    path: 'update/:i',
    component:UpdateComponent
  },
  {
    path :'**',
    component:Page404Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
