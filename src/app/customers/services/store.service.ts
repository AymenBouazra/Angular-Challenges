import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http:HttpClient) { }
  // Add new product (used in list-product component)
  addProduct(productData:any)
  {
   return this.http.post("http://localhost:3000/products",productData)
  }

  // Get all products (used in list-product component)
  getAllProducts()
  {
   return this.http.get("http://localhost:3000/products")
  }

  // Get product by id (used in update-product component)
  getProductById(id:number){
    return this.http.get("http://localhost:3000/products/"+id)
  }
  

  // update product by id (used in update-product component)
  updateProductDataById(updateProductData:any,id:number)
  {
    return this.http.put("http://localhost:3000/products/"+id,updateProductData)
  }

  // Delete product by id (used in list-product component)
  deleteProductById(id:number)
  {
    return this.http.delete("http://localhost:3000/products/"+id)
  }
}
