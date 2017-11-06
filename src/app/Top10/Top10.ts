import { Observable } from 'rxjs/Rx';
import { FilterPipe } from './../filter.pipe';
import { Component, OnInit} from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CategoryComponent } from "../Category/Category";
import { Router, NavigationExtras } from "@angular/router";
import { HttpClientService } from "app/http-client.service";
import 'rxjs';

@Component({
  selector: 'top10',
  templateUrl: './Top10.html',
  styleUrls: ['./Top10.css']

})
export class Top10Component implements OnInit {  
  ArTop10;
  constructor(private http: Http, private router: Router, private HttpClient: HttpClientService) {
    
  }

  ngOnInit(){
    this.ArTop10 = this.HttpClient.GetRestaurant()
    .map(res => res.json());
  }
  routeDynamically(str: string) {
    this.router.navigate(['/Category', str]);
  }
}