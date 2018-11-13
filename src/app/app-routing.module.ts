import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeamsRoutingModule} from "./teams/teams-routing.module";
import {AppComponent} from "./app.component";
import {TeamsModule} from "./teams/teams.module";
import {HomeComponent} from "./home/home.component";
import { TheatreFrontendModule } from './theatreFrontend/theatreFrontend.module';
import { TheatreRegistrationFormComponent } from './theatreFrontend/component/theatre-registration-form/theatre-registration-form.component';
import { UserregistrationModule } from './user-registration/user-registration.module';
import { LoginauthenticationModule } from './loginauthentication/loginauthentication.module';
import { MainLandingModule } from './main-landing-page/main-landing-page.module';
import { DistributorAppModule } from './distributorFrontend/distributorApp.module';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'theatre',
    loadChildren: () => TheatreFrontendModule,
  },
  {
    path: 'teams',
    loadChildren: () => TeamsModule,
  },
  {
    path: 'userregistration',
    loadChildren: () => UserregistrationModule,
  },
  {
    path: 'distributor',
    loadChildren: () => DistributorAppModule,
  }, 
  {
    path: 'mainlanding',
    loadChildren: () => MainLandingModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginauthenticationModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
