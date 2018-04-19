import { Component, OnInit } from "@angular/core";
import {FormsModule, FormGroup,FormBuilder,Validators} from "@angular/forms";
import { ServiceService } from "../service.service";
import { Router } from "@angular/router";
import { SellerUpdateComponent  } from "../login/seller-update/seller-update.component";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers:[ServiceService]
})
export class LoginComponent implements OnInit {
  post: FormGroup;
  constructor(private fb: FormBuilder,toastr: ToastsManager, private service: ServiceService, private router:Router ) {
    this.post = fb.group({
      user_name: [null, Validators.required],
      password: [null, Validators.required],
     
    });
  }

  login(post){
     
    console.log("contoler data is ",post)

  this.service.login(post.value).subscribe(data=>{
    
   if(data.data.role_type=="seller")
  {
   
       this.router.navigateByUrl('seller/product');
      
  }
     else if(data.data.role_type=="customer"){
       
       this.router.navigateByUrl('buy/product')
     }else{
       this.router.navigateByUrl('add_admin_category')
       
     }

    })
  }
  ngOnInit(){

  }
}
