import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CategoryComponent } from "../Category/Category";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from "@angular/router";
import { HttpClientService } from "app/http-client.service";

@Component({
  selector: 'Review',
  templateUrl: './Review.html',
  styleUrls: ['./Review.css']
})
export class ReviewComponent implements OnInit {
  ArReview: any[];
  ArRestaurant: any[];
  arrget: string;

  ngRestaurantName: string;
  ngCategoryName: string;
  ngAreaName: string;
  ngReview: string;
  Rate: number;

  constructor(private http: Http, private router: Router, private HttpClient: HttpClientService) {
    this.ArReview = [];
    this.ArRestaurant = [];
    this.arrget = '';
  }

  ngOnInit() {
    this.HttpClient.GetRestaurant()
      .subscribe(rsp => this.ArRestaurant = rsp.json(),
      (err => console.log("error : " + err)))
  }

  Rating(num: number) {
    console.log(num);
    this.Rate = num;
  }

  routeDynamically(str: string) {
    this.router.navigate(['/Category', str]);
  }

  filterRestaurantList() {
    this.ngCategoryName = this.ArRestaurant
      .filter(r => r.Name === this.ngRestaurantName)[0].Category
    this.ngAreaName = this.ArRestaurant
      .filter(r => r.Name === this.ngRestaurantName)[0].Location
  }

  SubmitReview() {
    debugger
    const body = {
      RestaurantName: this.ngRestaurantName,
      Category: this.ngCategoryName,
      Area: this.ngAreaName,
      Reviews: this.ngReview,
      Rate: this.Rate
    }
    console.log(body);
    this.HttpClient.PostReview(body)
      .subscribe(rsp => {
        console.log("success : " + rsp);
        console.log(rsp.json());
        alert("The recommendation was sent and successfully added, thanks on behalf of our users and management team.");
      },
      (err: Response) => console.log("error : " + err));
  }
}