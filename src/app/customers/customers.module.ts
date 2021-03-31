import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddingProductComponent } from './components/adding-product/adding-product.component';
import { UpdatingProductComponent } from './components/updating-product/updating-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomersComponent, AddingProductComponent, UpdatingProductComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class CustomersModule { }
