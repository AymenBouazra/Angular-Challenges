import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  listProductTodo: any;
  currentDate= new Date;
  constructor(private productService:StoreService ) { } 

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe((response)=>{
      this.listProductTodo=response
    },(error)=>{
      console.log(error);
      
    })
  }
  delete(id:number){
    this.productService.deleteProductById(id).subscribe((response:any)=>{this.ngOnInit()},(error)=>{})
    
  }
  

}
