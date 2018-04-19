import { Component, OnInit } from '@angular/core';
import {FormsModule , FormBuilder, ReactiveFormsModule, FormGroup,Validators  } from "@angular/forms";
import {  ServiceService} from "../service.service";


@Component({
  selector: 'app-cutomer',
  templateUrl: './cutomer.component.html',
  styleUrls: ['./cutomer.component.css'],
  providers:[ServiceService]
})
export class CutomerComponent implements OnInit {
  post:FormGroup
 constructor(private fb:FormBuilder,private service:ServiceService) { 
   this.post=fb.group({
    user_name:[null,Validators.required],
      first_name:[null,Validators.required],
      last_name:[null,Validators.required],
      address:[null,Validators.required],
      mail_id:[null,Validators.required],
      password:[null,Validators.required],
      role_type:"customer"
   });
 }

 customer_signup(post){
   console.log("customer signup value is",post.value)
this.service.customer_signup(this.post.value).subscribe(res=>{console.log(res)
err=>{
  console.log(err);
}
  });
}
  ngOnInit() {
  }

}
