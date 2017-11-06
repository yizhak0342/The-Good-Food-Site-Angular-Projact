import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClientService {

  private url : string;

  // Get Date From Service/DateBase
  GetRestaurant() {
    return this.http.get(this.url+"Restaurant")
  }

  GetReview() {
    return this.http.get(this.url+"Review")
  }

  GetContactUs() {
    return this.http.get(this.url+"ContactUs")
  }

  GetAvgRating(){
    return this.http.get(this.url+"Review?Rating=''")
  }

  //Post Info Into The Service/DateBase
  PostReview(body: any) {
    return this.http.post(this.url+"Review", body)
  }

  PostContactUs(body: any) {
    return this.http.post(this.url+"ContactUs", body)
  }

  PostAddRestaurantFromAdmin(body: any) {
    return this.http.post(this.url+"Restaurant", body)
  }

  // Delete Info From Service/DateBase
  DeleteRestaurant(id: any) {
    return this.http.delete(this.url+"Restaurant/"+id)
  }

  DeleteReview(id: any) {
    return this.http.delete(this.url+"Review/"+id)
  }
  
  DeleteContactUs(id: any) {
    return this.http.delete(this.url+"ContactUs/"+id)
  }
  
   // Edit Info From Service/DateBase

  constructor( @Inject(Http) private http: Http) {
    this.url = "http://localhost:56896/Api/";
  }
} 