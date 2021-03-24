import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../service/productservice.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  searchText?:string;
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
