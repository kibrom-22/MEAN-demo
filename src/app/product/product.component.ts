import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  resText:any; productList:any;

  constructor(private productService:ProductService){}

  productData(proId:string, name:string, price:string,quantity:string){
   this.productService.storeProductData(proId,name,price,quantity).subscribe((res:any)=>this.resText);
  }
  getProducts(){
    this.productService.getProductList().subscribe((res:any)=>this.productList=res)
  }

}
