import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './data/date.component';
import {FormsModule} from '@angular/forms';
import {MServiceService} from './m-service.service';
import {HttpClientModule} from '@angular/common/http';
import {HoverDirective} from './directive/hover.directive';
import {SearchPipe} from './pipe/search.pipe';
import { HomePageComponent } from './component/home-page/home-page.component';
import { InfoComponent } from './component/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileDetailsComponent } from './component/profile/profile-details/profile-details.component';
import { ProfileMessageComponent } from './component/profile/profile-message/profile-message.component';
import {OutGuard} from './guards/out.guard';
import {InputGuard} from './guards/input.guard';
import {BoldDirective} from './directive/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    InfoComponent,
    NotFoundComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileMessageComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [MServiceService, OutGuard, InputGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
