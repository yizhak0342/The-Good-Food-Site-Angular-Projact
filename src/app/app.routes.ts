import { ProfileComponent } from './Profile/profile.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CategoryComponent } from "app/Category/Category";
import { Top10Component } from "app/Top10/Top10";
import { ReviewComponent } from './Review/Review';
import { AboutComponent } from "app/About/About";
import { ContactComponent } from "app/Contact/Contact";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { AdminComponent } from "app/admin/admin.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:str', component: HomeComponent },
  {path: 'Category/:str', component: CategoryComponent},
  {path: 'Top10', component: Top10Component},
  {path: 'Review', component: ReviewComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: '**', component: PageNotFoundComponent},
  
];
