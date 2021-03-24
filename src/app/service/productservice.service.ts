import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  // Add new product (used in list-product component)
  addProduct(productData:any)
  {
    let addProduct=JSON.parse(localStorage.getItem('Products') || '[]' ) 
    productData.id=Math.floor(Math.random()*1000)
    addProduct.push(productData)
    localStorage.setItem('Products',JSON.stringify(addProduct))
  }

  // Get all products (used in list-product component)
  getAllProducts()
  {
   return JSON.parse(localStorage.getItem('Products') || '[]')
  }

  // Get product by index (used in update-product component)
  getProductByIndex(index:number)
  {let products=JSON.parse(localStorage.getItem('Products') || '[]' )
    return products[index]
  }

  // update product by index (used in update-product component)
  updateProductDataByIndex(updateProductData:any,index:number)
  {
    let products= JSON.parse(localStorage.getItem('Products') || '[]')
    products.splice(index,1,updateProductData);
    localStorage.setItem('Products',JSON.stringify(products))
  }

  // Delete product by index (used in list-product component)
  deleteProductByIndex(index:number)
  {
    let products= JSON.parse(localStorage.getItem('Products') || '[]')
    products.splice(index,1)
    localStorage.setItem('Products',JSON.stringify(products))
  }

}
