import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppSettings } from '../app.settings';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
error:any;
name:any;
email:any;
mobile:any;

  constructor(public auth: AuthService,private router: Router, private _route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    this.error="";
    if(this.name==""||this.name==null){
      this.error="Enter Name";
      return false;
    }if(this.email==""||this.email==null){
      this.error="Enter EmailAddress";
      return false;
    }if(this.mobile==""||this.mobile==null){
      this.error="Enter mobile Number";
      return false;
    }

    let data={
      "name":this.name,
      "email":this.email,
      "mobile":this.mobile
    }
       console.log(data)
    this.http.post(AppSettings.API_ENDPOINT + 'register/',{
      "data":data
     }).subscribe((data:any)=>{
       this.error="Successfully added";
     })

  }
}
