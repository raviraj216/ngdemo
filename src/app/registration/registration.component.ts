import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  is_error=false;
  message:string;
  constructor(
              private formBuilder: FormBuilder,
              private router: Router ,
              private authenticationService: AuthenticationService 
              ) { }

  ngOnInit() {
      if(this.authenticationService.isLoggedIn()){
          this.router.navigate(['/dashboard']);
      }
      this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

  get field() { return this.registerForm.controls; }
   onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }else{
          var registerData=this.registerForm.value;
          this.authenticationService.registration(registerData).subscribe( responsedatas =>
          {
              if (responsedatas && responsedatas.status==true) {
                 localStorage.setItem('message', JSON.stringify(responsedatas.message));
                  this.is_error=false;
                  this.message=responsedatas.message;
                  this.registerForm.reset();
              }else{
                 this.is_error=true;
                  this.message=responsedatas.message;
              }
              return false;
            }
          );
        }      
    }
}