import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FeedService {

   private url = 'https://angular.cppatidar.com/angular/webservice/webservice.php';
  constructor(private router: Router,
             private http: HttpClient) { }

  getFeeds(): Observable<any> {
      const  params = new  HttpParams().set('method', "getFeeds");
      return this.http.post<any>(this.url,params);
  }

  getFeedBySlug(slug:string): Observable<any> {
    console.log(slug);
      
      const  params = new  HttpParams().set('method', "getFeedBySlug").set('data',JSON.stringify([{"slug":slug}]));
      return this.http.post<any>(this.url,params);
  }

  

}