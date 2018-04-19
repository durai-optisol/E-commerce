import { Component, OnInit } from '@angular/core';
import {  FormGroup,FormBuilder,Validators,ReactiveFormsModule} from "@angular/forms";
import { importExpr } from '@angular/compiler/src/output/output_ast';
import {ServiceService}from '../../../app/service.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  value:FormGroup;
  constructor(private fb:FormBuilder, private service:ServiceService) { 
    this.value=fb.group({
      catagry_name:[null,Validators.required],
      
    });
   
  }
  admin_register(value)
{

} 
 ngOnInit() {
  }

}
