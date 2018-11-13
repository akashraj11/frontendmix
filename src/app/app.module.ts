import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TeamsModule} from "./teams/teams.module";
import {SharedModule} from "./shared/shared.module";
import {ServicesModule} from "./services/services.module";
import { HomeComponent } from './home/home.component';
import { TheatreFrontendModule } from './theatreFrontend/theatreFrontend.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './theatreFrontend/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserregistrationModule } from './user-registration/user-registration.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TeamsModule,
    TheatreFrontendModule,
    UserregistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
