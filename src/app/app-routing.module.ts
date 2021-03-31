import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddComponent } from './add/add.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { SkillsComponent } from './skills/skills.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateComponent } from './update/update.component';
import { UserToDoComponent } from './user-to-do/user-to-do.component';

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
    path : 'skills',
    component:SkillsComponent
  },
  {
    path : 'list-product',
    component:ListProductComponent
  },
  {
    path : 'add-product',
    component:AddProductComponent
  },
  {
    path : 'update-product/:i',
    component:UpdateProductComponent
  },
  {
    path : 'add-user',
    component:AddUserComponent
  },
  { 
    path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
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
