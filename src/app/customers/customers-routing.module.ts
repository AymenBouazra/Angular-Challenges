import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingProductComponent } from './components/adding-product/adding-product.component';
import { UpdatingProductComponent } from './components/updating-product/updating-product.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'adding-product' , component :AddingProductComponent},
  { path: 'updating-product/:id' , component :UpdatingProductComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
