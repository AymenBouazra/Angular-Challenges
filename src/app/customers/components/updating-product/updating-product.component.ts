import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-updating-product',
  templateUrl: './updating-product.component.html',
  styleUrls: ['./updating-product.component.scss']
})
export class UpdatingProductComponent implements OnInit {
  submitted = false;
  constructor(private router:ActivatedRoute,private route:Router , private updateService:StoreService) { }
  listProductToDo: any;
  updateProductForm?:FormGroup ;
  toDoId: any;
  ngOnInit(): void {
    this.updateProductForm = new FormGroup({
      id :new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('',Validators.required),
      price : new FormControl('',[Validators.required]),
      createdAt: new FormControl('') 
    });
    this.toDoId=this.router.snapshot.params['id']; 
    this.showData()
  }
  showData() {
    this.updateService.getProductById(this.toDoId).subscribe((response:any)=>{this.updateProductForm?.patchValue(response)},(error)=>{})
    
  }
  saveUpdateProduct() {
    this.submitted=true;
    this.updateService.updateProductDataById(this.updateProductForm?.value,this.toDoId).subscribe((response:any)=>{},(error)=>{})
    // window.location.href='http://localhost:4200/list'
    // this.route.navigate(['/list'])
    this.route.navigateByUrl('/customers')
  
  }
}
