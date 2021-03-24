import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  submitted = false;
  updateProductForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })
  constructor(private router:ActivatedRoute,private route:Router , private updateService:ProductserviceService) { }
  listProductToDo: any;
  updateProductToDoForm?:FormGroup ;
  toDoIndex: any;
  ngOnInit(): void {
    this.updateProductToDoForm = new FormGroup({
      id :new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('',Validators.required)
    });
    this.toDoIndex=this.router.snapshot.params['i']; 
    this.showData()
  }
  showData() {
    let toDoData= this.updateService.getProductByIndex(this.toDoIndex)
    this.updateProductToDoForm?.patchValue(toDoData)
  }
  saveUpdateProduct() {
    this.submitted=true;
    this.updateService.updateProductDataByIndex(this.updateProductToDoForm?.value,this.toDoIndex)
    // window.location.href='http://localhost:4200/list'
    // this.route.navigate(['/list'])
    this.route.navigateByUrl('/list-product')
  }
}