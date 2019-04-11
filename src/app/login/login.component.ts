import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
  isLogin = false;
  is_error = false;
  error_message : string;
  postdata : string;
  myarray: Array<any> = [];
  constructor(private formBuilder: FormBuilder,private router: Router ,private authenticationService: AuthenticationService ) { }

  ngOnInit() {
        if(this.authenticationService.isLoggedIn()){
          this.router.navigate(['/dashboard']);
        }
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
          
  }

get field() { return this.loginForm.controls; }
   onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }else{
          var loginData=this.loginForm.value;
          this.authenticationService.doLogin(loginData).subscribe( responsedatas =>
          {
               if(responsedatas){
                this.isLogin = true;
                this.router.navigate(['/dashboard']);
               }else{
                  this.is_error=true;
                  this.error_message='Please check your email and password';
               }
            }
          );
      }
   }
}