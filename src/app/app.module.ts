import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthGuardGuard } from './guards/auth-guard.guard';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { FeedComponent } from './feed/feed.component';
import { FeedService } from './services/feed.service';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ,AppRoutingModule,HttpClientModule,
   AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  declarations: [ AppComponent, RegistrationComponent, HomeComponent, LoginComponent, HeaderComponent, FooterComponent, DashboardComponent, FeedComponent, FeedDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AngularFirestore, AuthenticationService,AuthGuardGuard, UserService, FeedService]
})
export class AppModule { }
