import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http:HttpClient) { }
  // Add new product (used in list-product component)
  addProduct(productData:any)
  {
    
  }

  // Get all products (used in list-product component)
  getAllProducts()
  {
   
  }

  // Get product by index (used in update-product component)
  getProductByIndex(index:number){

  }
  

  // update product by index (used in update-product component)
  updateProductDataByIndex(updateProductData:any,index:number)
  {
    
  }

  // Delete product by index (used in list-product component)
  deleteProductByIndex(index:number)
  {
  }
}
