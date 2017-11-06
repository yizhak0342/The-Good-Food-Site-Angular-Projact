import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router, NavigationExtras } from "@angular/router";
import { CategoryComponent } from "app/Category/Category";
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  routeDynamically(str: string) {
    this.router.navigate(['/Category', str]);
  }
}
