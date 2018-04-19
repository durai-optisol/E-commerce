import { Component, OnInit } from '@angular/core';
import {  FormGroup , Validators, ReactiveFormsModule ,FormBuilder} from "@angular/forms";
import {  ServiceService} from "../service.service";
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
  providers:[ServiceService]
})

export class SellerComponent implements OnInit {
post:FormGroup
form:any;
  constructor(private fb:FormBuilder,private service:ServiceService) {
    this.post=fb.group({
      user_name:[null,Validators.required],
      company_name:[null,Validators.required],
      company_ID:[null,Validators.required],
      company_code:[null,Validators.required],
      address:[null,Validators.required],
      mail_id:[null,Validators.required],
      password:[null,Validators.required],
      role_type:"seller"
    })
  }
  seller_page(post){
    console.log(post)
    this.service.seller_singup(this.post.value).subscribe(res=>
      {
        console.log(res)
      },
  err=>{
 console.log(err)
  });
}
  ngOnInit() {
  }
  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      console.log(event.target.files)
      console.log(event.target.files.length)
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }
}

