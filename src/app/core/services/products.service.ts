import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(){
  //parecido a hacer un fetch
   return  this.http.get("http://localhost:3000/products")

  }

  postProducts(newProduct: any){
    return this.http.post('http://localhost:3000/products', newProduct)
  }
}


