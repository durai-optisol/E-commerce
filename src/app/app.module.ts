import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { FormsModule, ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { CutomerComponent } from './cutomer/cutomer.component';
import { SellerComponent } from './seller/seller.component';
import { LoginComponent } from './login/login.component';
import { CourseService } from './login/login.service';
import { RouterModule, Routes } from '@angular/router';
import { ServiceService } from "../app/service.service";
import { HttpClientModule } from "@angular/common/http";
import { SellerUpdateComponent } from './login/seller-update/seller-update.component';
import { AdminComponent } from "./login/admin/admin.component";
import { CutomersComponent } from './login/cutomers/cutomers.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { AdminsComponent } from './admins/admins.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customer_signup', component: CutomerComponent },
  { path: 'seller_sigup', component: SellerComponent },
  { path: 'seller/product', component: SellerUpdateComponent },
  { path: 'buy/product', component: CutomersComponent },
  // { path: 'admin/access', component: AdminsComponent },
  { path: 'add_admin_category', component: AdminsComponent },
  { path: 'admin_register', component: AdminComponent },
 
];
@NgModule({
  declarations: [
    AppComponent,
    CutomerComponent,
    SellerComponent,
    LoginComponent,
    SellerUpdateComponent,
    AdminComponent,
    CutomersComponent,
    AdminsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,HttpClientModule,NgxPaginationModule,
    ToastModule.forRoot()

  ],

  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
