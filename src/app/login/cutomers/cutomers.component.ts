import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../../app/service.service";
import { FormGroup,FormBuilder,ReactiveFormsModule,Validators  } from "@angular/forms";
import { ArrayType } from '@angular/compiler/src/output/output_ast';

// import {  } from "";
@Component({
  selector: 'app-cutomers',
  templateUrl: './cutomers.component.html',
  styleUrls: ['./cutomers.component.css']
})
export class CutomersComponent implements OnInit {
  
data:FormGroup
products : any;
page:any;
page_count:any
array = []
form:any;
  constructor(private fb:FormBuilder, private service:ServiceService ) { 
    
 this.data=fb.group({
  updateValue:[null, Validators.required]
 })

  }
  customer_page(data){
    console.log("contoler customer_page ",data);
  this.service.customer_page(this.data.value).subscribe(res=>{console.log(res)})
}
  ngOnInit() {
   this. all_admin_category()
    // this.sort_desendting()
    this.page_nation()
    this.test(1)
    console.log("this is from loged customer data",this.data.value.selector);
  }
  
      all_admin_category(){
    
        this.service.all_admin_category().subscribe(data=>{
          this.products = data;
          console.log("customer contoler getAllProduct",this.products);
        })
          }
      page_nation(){
     console.log("contoler page_nation ",);        
     this.service.page_nation(this.data.value).subscribe(res=>{
      
      this.page_count = res;
      console.log("from page count",this.page_count.pages)
      
      for(var i=1;i<=this.page_count.pages;i++){
      this.array.push(i)
      }
     
    })
      }

      next(){
        console.log("welcome to next page")
      }
      previous(i){
  console.log("welcome to previous page",)
    }
test(i){
  // this.page = i
  // console.log("from loop",i)
 this.service.page_nation(i).subscribe(data=>{
  console.log("data test(i)",data);
       this.page = data.products;
      console.log("customer contoler page test",this.page);

 })
 
}
sort_desendting()
{
  let sort="z-a"
   this.service.sorting(sort).subscribe(res=>{
  console.log("res form sorting ",res);
  this.page=res.products

})
} 
sort_assending(selectedValue)
{
  let sort=selectedValue
   this.service.sorting(sort).subscribe(res=>{
  console.log("res form sort_assending ",res);
  this.page=res.products


})
}
item_per_page(){
  console.log("this form controler item  per page")
  let item_per_page=((document.getElementById("item_per_page") as HTMLInputElement).value)
  this.service.item_per_page(item_per_page).subscribe(res=>{
    console.log("form controler item per page is :"+item_per_page)
    
  })
}
sort_low_high()
{
  let sort="low-high"
   this.service.sorting(sort).subscribe(res=>{
  console.log("res form sort_low_high ",res);
  this.page=res.products

})
}
sort_high_low()
{
  let sort="high-low"
   this.service.sorting(sort).subscribe(res=>{
  console.log("res form sort_high_low ",res);
  this.page=res.products
})

}
search()
{

  let search=((document.getElementById("value") as HTMLInputElement).value)
  this.service.search(search).subscribe(res=>{
    console.log("res form search ",res);
    this.page=res.products
  })
}


}
