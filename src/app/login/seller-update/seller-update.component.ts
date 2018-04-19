import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup,FormBuilder,Validators} from "@angular/forms";
import { ServiceService } from "../../../app/service.service";
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-seller-update',
  templateUrl: './seller-update.component.html',
  styleUrls: ['./seller-update.component.css']
})
export class SellerUpdateComponent implements OnInit {
  data: FormGroup;
  products : any;

  constructor(private fb: FormBuilder, private service: ServiceService ) { 

    this.data = fb.group({
      // category_name:this.products.category_name,
      category_name:[null,Validators.required],
      product_id:[null,Validators.required],
      product_name:[null,Validators.required],
      product_value:[null,Validators.required],
      selector: [null,Validators.required]
    });
    
  }

  seller_product(data){
    console.log("controler seller_product post is ",data)
    this.service.seller_product(this.data.value).subscribe(res=>{
      console.log(res)
    })

  }
  ngOnInit() {
    this.getAllProduct();
    console.log("from seller_update controler ",this.data.value.selector);
  }

  getAllProduct(){
    console.log("from seller_update controler ");
this.service.all_admin_category().subscribe(data=>{
  this.products = data;
  console.log(this.products);
})
  }

}
