import { TabsModule } from 'ng2-tabs';
import { ProfileComponent } from './Profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { CategoryComponent } from './Category/Category';
import { Top10Component } from './Top10/Top10';
import { ReviewComponent } from './Review/Review';
import { AboutComponent } from './About/About';
import { ContactComponent } from './Contact/Contact';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientService } from "app/http-client.service";
import { AdminComponent } from './admin/admin.component';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,
    CallbackComponent,CategoryComponent,
    Top10Component,ReviewComponent,
    AboutComponent,ContactComponent,
    PageNotFoundComponent,AdminComponent,FilterPipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,BootstrapGridModule,
    TabsModule
  ],
  providers: [AuthService,HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
