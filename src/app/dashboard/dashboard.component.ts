import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  isLogin = false;
  constructor(private router: Router ,private authenticationService: AuthenticationService) { }
   
  ngOnInit() {
    this.username=localStorage.getItem('username');
    if( localStorage.getItem('is_login')=='true'){
        this.isLogin = true;
    }
  }
  


}