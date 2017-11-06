import { TabsModule } from 'ng2-tabs';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from "app/http-client.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //Array
  ArRestaurant: any;
  ArReview: any;
  ArContactUs: any;
  //Boolen
  BlnRestaurant;
  BlnReview;
  BlnContactUs;
  BlnAddRestaurant;

  ngName;
  ngLocation;
  ngCategory;
  ngReservations;

  IndexForRestaurant;
  IndexForReview;
  IndexForContactUs;

  constructor(private HttpClient: HttpClientService) {
    this.ArRestaurant = [];
    this.ArReview = [];
    this.ArContactUs = [];

    this.BlnRestaurant = false;
    this.BlnReview = false;
    this.BlnContactUs = false;
    this.BlnAddRestaurant = false;

    this.IndexForRestaurant = 0;
    this.IndexForContactUs = 0;
    this.IndexForReview = 0;
  }

  ngOnInit() {
    //Get Restaurant
    this.HttpClient.GetRestaurant()
      //.map(Rsp=>Rsp.json())
      .subscribe(rsp => {
        if (rsp.status == 200) {
          this.ArRestaurant = rsp.json();
        }
        else {
          console.log("server responded error : " + rsp);
        } (err) => { console.log("error : " + err); };
      })

    //Get Review
    this.HttpClient.GetReview()
      .subscribe(rsp => {
        if (rsp.status == 200) {
          this.ArReview = rsp.json();
        }
        else {
          console.log("server responded error : " + rsp);
        } (err) => {
          console.log("error : " + err);
        }
      })

    //Get ContactUs
    this.HttpClient.GetContactUs()
      .subscribe(rsp => {
        if (rsp.status == 200) {
          this.ArContactUs = rsp.json();
        }
        else {
          console.log("server responded error : " + rsp);
        } (err) => { console.log("error : " + err); };
      })
  }

  GetIndexFromRestaurantIcon(num: number) { this.IndexForRestaurant = num; }
  GetIndexFromContactUsIcon(num: number) { this.IndexForContactUs = num; }
  GetIndexFromReviewsIcon(num: number) { this.IndexForReview =num; }

  ChanceBlnRestaurant() { this.BlnRestaurant = !this.BlnRestaurant; }
  ChanceBlnReview() { this.BlnReview = !this.BlnReview; }
  ChanceBlnContactUs() { this.BlnContactUs = !this.BlnContactUs; }
  ChanceBlnAddRestaurant() { this.BlnAddRestaurant = !this.BlnAddRestaurant }

  GetIndexToDeleteFromRestaurant() {
    debugger
    console.log(this.IndexForRestaurant);
    this.HttpClient.DeleteRestaurant(this.IndexForRestaurant)
      .subscribe(rsp => {
        this.ArRestaurant = rsp.json()
        console.log("success : " + rsp)
      },
      (err: Response) => console.log("error : " + err));
  }

  GetIndexToDeleteFromReview() {
    debugger
    console.log(this.IndexForReview);
    this.HttpClient.DeleteReview(this.IndexForReview)
      .subscribe(rsp => {
        this.ArReview = rsp.json()
        console.log("success : " + rsp)
      },
      (err: Response) => console.log("error : " + err));
  }

  GetIndexToDeleteFromContactUs() {
    debugger
    console.log(this.IndexForContactUs);
    this.HttpClient.DeleteContactUs(this.IndexForContactUs)
      .subscribe(rsp => {
        this.ArContactUs = rsp.json()
        console.log("success : " + rsp)
      },
      (err: Response) => console.log("error : " + err));
  }

  AddRestaurant() {
    const body = {
      Name: this.ngName,
      Location: this.ngLocation,
      Category: this.ngCategory,
      Reservations: this.ngReservations
    }
    console.log(body);
    this.HttpClient.PostAddRestaurantFromAdmin(body)
      .subscribe(rsp => console.log("success : " + rsp),
      (err: Response) => console.log("error : " + err));
  }
}