import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  storeProductData(proId:string, name:string,price:string,quantity:string){
    const postdata = {proId,name,price,quantity};
    return this.http.post('http://localhost:4000/addProduct', postdata)
  }
  getProductList(){
    return this.http.get('http://localhost:4000/getProducts')
  }
}
