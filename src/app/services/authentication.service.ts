import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';
  constructor(private router: Router,
             private http: HttpClient) { }

    isLoggedIn() {
        if( localStorage.getItem('is_login')=='true'){
            return true;
        }
        return false;
    }

    doLogin(postdata: any): Observable<any> {
      const  params = new  HttpParams().set('method', "login").set('data', JSON.stringify([{"email":postdata.email,"password":postdata.password}]));

      return this.http.post<any>(this.url,params).pipe(
            map(responseData => {
              if (responseData && responseData.status==true) {
                localStorage.setItem('is_login', "true");
                localStorage.setItem('username', responseData.data.username);
                localStorage.setItem('username', responseData.data.email);
                    
                localStorage.setItem('login_user', JSON.stringify(responseData.data));
                return true;
              }
              return false;
            })
    );
  }

  registration(postdata: any): Observable<any> {
      const  params = new  HttpParams().set('method', "registration").set('data', JSON.stringify([{"email":postdata.email,"username":postdata.name,"password":postdata.password}]));

      return this.http.post<any>(this.url,params);
    }
  
  //validate_email(email:string):Observable<any>{
    //return this.http.post<any>(this.url);
  //}

  logout(): void {
     localStorage.setItem('is_login', "");
     localStorage.setItem('username', "");
     this.router.navigate(['/login']);
  }

}