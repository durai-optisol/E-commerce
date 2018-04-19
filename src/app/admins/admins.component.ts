import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormBuilder,Validators,ReactiveFormsModule} from "@angular/forms";
import { ServiceService } from "../../app/service.service";
import { Routes,Route } from "@angular/router";

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
  
})
export class AdminsComponent implements OnInit {
post:FormGroup;
  constructor(private fb:FormBuilder, private service:ServiceService) { 
    this.post=fb.group({
      catagry_name:[null,Validators.required],
      
    });
   
  }
 
  ngOnInit() {
  }
  admin(data){
    console.log("admin post is ",data.value)
    this.service.admin(this.post.value).subscribe(res=>{console.log(res)
      err=>{
        console.log(err);
      }
        });
  }
  
  delete_category(post){
    console.log("controler delete_category",post.value)
this.service.delete_category(this.post.value).subscribe(res=>{console.log(res)
err=>console.log(err)
  })
  }
}
