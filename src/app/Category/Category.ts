import { Observable } from 'rxjs/Rx';
import { FilterPipe } from './../filter.pipe';
import { Component, OnInit} from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { HttpClientService } from "app/http-client.service";
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs';

@Component({
  selector: 'Category',
  templateUrl: './Category.html',
  styleUrls: ['./Category.css'],


})
export class CategoryComponent implements OnInit {
  ArRestaurant: any;
  str: any;

  Italian: boolean = false;
  Meat: boolean = false;
  Asians: boolean = false;
  Coffee: boolean = false;
  Chef: boolean = false;
  Fish: boolean = false;
  Veggies: boolean = false;

  North: boolean = true;
  Hasharon: boolean = true;
  Hamerkaz: boolean = true;
  Hashfela: boolean = true;
  Jerusalem: boolean = true;
  South: boolean = true;

  constructor(private http: Http, private route: ActivatedRoute, private HttpClient: HttpClientService) {
    this.HttpClient.GetRestaurant()
    .subscribe(rsp => {
      if (rsp.status == 200) {
        console.log(rsp.status);
        this.ArRestaurant = rsp.json();
      } else { console.log("server responded error : " + rsp); }
    }, (err) => { console.log("error : " + err); });
  }

  ngOnInit() {
   
    this.str = this.route.snapshot.paramMap.get('str');
    if (this.str == 'Italian') { this.Italian = !this.Italian; }
    if (this.str == 'Meat') { this.Meat = !this.Meat; }
    if (this.str == 'Asians') { this.Asians = !this.Asians; }
    if (this.str == 'Coffee') { this.Coffee = !this.Coffee; }
    if (this.str == 'Chef') { this.Chef = !this.Chef; }
    if (this.str == 'Fish') { this.Fish = !this.Fish; }
    if (this.str == 'Veggies') { this.Veggies = !this.Veggies; }
    if (this.str == 'North') { this.North = !this.North; }
    if (this.str == 'Hasharon') { this.Hasharon = !this.Hasharon; }
    if (this.str == 'Hamerkaz') { this.Hamerkaz = !this.Hamerkaz; }
    if (this.str == 'Hashfela') { this.Hashfela = !this.Hashfela; }
    if (this.str == 'Jerusalem') { this.Jerusalem = !this.Jerusalem; }
    if (this.str == 'South') { this.South = !this.South; }
  }

}
