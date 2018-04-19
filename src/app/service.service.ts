import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { single } from 'rxjs/operator/single';
//import {  } from "he";

@Injectable()
export class ServiceService {
  private url = "http://localhost:4000";

  constructor(private http:Http) { }

  login(value){
    console.log("service login post",value)
    return this.http.post(this.url+"/login",value).map((res:Response)=>res.json())
  }
  customer_signup(post){
    console.log("service signup post",post)
    return this.http.post(this.url+"/customer_signup",post).map((res:Response)=>res.json())
  }
  seller_singup(post){
    console.log("service seller post",post)
    return this.http.post(this.url+"/seller_sigup",post).map((res:Response)=>res.json())
  }
  admin(post){
    console.log("service admin post ",post)
    return this.http.post(this.url+"/add_admin_category",post).map((res:Response)=>res.json())
  }
  all_admin_category(){
    console.log("service all_category post")
    return this.http.get(this.url+"/all_admin_category").map((res:Response)=>res.json())
  }
  admin_register(value)

  {
    console.log("service admin_register post",value)
    return this.http.post(this.url+"/admin_register",value).map((res:Response)=>res.json())
  }
  customer_page(post){
    console.log("service customer_page post",post)
    return this.http.post(this.url+"/admin/page",post).map((res:Response)=>res.json())
  }
  seller_product(data){
    console.log("service seller_product post",data)
    return this.http.post(this.url+"/seller/product",data).map((res:Response)=>res.json())
  }


  // getAllProduct(){
  //   console.log("service getAllProduct post")
  //   return this.http.get(this.url+"/all_products").map((res:Response)=>res.json())
  // }
  delete_category(post){
    console.log("service delete_category post",post)
    
    return this.http.post(this.url+"/delete",post).map((res:Response)=>res.json())
  }
  page_nation(i){
    console.log("service page_nation post",i)
    return this.http.get(this.url+"/all_products/?page="+i).map((res:Response)=>res.json())
  }
  sorting(sort){
    console.log("service sort post",sort)
    return this.http.get(this.url+"/all_products/?data="+sort+"").map((res:Response)=>res.json())
  }
  search(data){
    console.log("service search post is :",data)
    return this.http.get(this.url+"/all_products/?search="+data).map((res:Response)=>res.json())
  }
  item_per_page(value){
console.log("from servie item per page is :",value)
return this.http.get(this.url+"/all_products/?pagecount="+value).map((res:Response)=>res.json())

}
  
}
