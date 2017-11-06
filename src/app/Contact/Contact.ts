import { Router } from '@angular/router';
import { HttpClientService } from 'app/http-client.service';
import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Component({
  selector: 'contact',
  templateUrl: './Contact.html',
  styleUrls: ['./Contact.css']

})
export class ContactComponent {
  ngName: string;
  ngEmail: string;
  ngPhoneNumber: number;
  ngMessage: string;
  arContactUs: any[];

  constructor(private router: Router, private HttpClient: HttpClientService) { }

  AddUserMessage() {
    const body = {
      Name: this.ngName, Email: this.ngEmail,
      Phone: this.ngPhoneNumber, Message: this.ngMessage
    }
    this.HttpClient.PostContactUs(body)
      .subscribe(rsp => {
        this.arContactUs = rsp.json();
      });
      alert("the message was sent successfully, Thanks for your message. We will do our best to answer your message")
      this.router.navigate(['/home']);
  }
}


