import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-updating-product',
  templateUrl: './updating-product.component.html',
  styleUrls: ['./updating-product.component.scss']
})
export class UpdatingProductComponent implements OnInit {
  submitted = false;
  constructor(private router:ActivatedRoute,private route:Router , private updateService:ProductserviceService) { }
  listProductToDo: any;
  updateProductForm?:FormGroup ;
  toDoIndex: any;
  ngOnInit(): void {
    this.updateProductForm = new FormGroup({
      id :new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('',Validators.required),
      price : new FormControl('',[Validators.required])
    });
    this.toDoIndex=this.router.snapshot.params['i']; 
    this.showData()
  }
  showData() {
    let toDoData= this.updateService.getProductByIndex(this.toDoIndex)
    this.updateProductForm?.patchValue(toDoData)
  }
  saveUpdateProduct() {
    this.submitted=true;
    this.updateService.updateProductDataByIndex(this.updateProductForm?.value,this.toDoIndex)
    // window.location.href='http://localhost:4200/list'
    // this.route.navigate(['/list'])
    this.route.navigateByUrl('/list-product')
  
  }
}
