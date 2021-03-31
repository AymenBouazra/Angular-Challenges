import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  listProductTodo: any;
  currentDate= new Date;
  constructor(private productService:ProductserviceService ) { } 

  ngOnInit(): void {
    this.listProductTodo= this.productService.getAllProducts()
  }
  delete(i:number){
    this.productService.deleteProductByIndex(i)
    this.listProductTodo= this.productService.getAllProducts()
  }
  

}
