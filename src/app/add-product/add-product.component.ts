import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  submitted= false
  addProductForm: FormGroup = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description :new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required])
  });
  constructor(private productService:ProductserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.submitted= true
    if(this.addProductForm.invalid){ 
      return;
    }
    this.productService.addProduct(this.addProductForm.value)
    // this.router.navigate(['/list-product'])
  }
}
