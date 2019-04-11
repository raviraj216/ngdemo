import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';

import { RegistrationComponent }      from './registration/registration.component';
import { HomeComponent }      from './home/home.component';
import { LoginComponent }      from './login/login.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuardGuard] },
  { path: 'feeds', component: FeedComponent,canActivate: [AuthGuardGuard] },
  { path: 'feed/:slug', component: FeedDetailComponent,canActivate: [AuthGuardGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}