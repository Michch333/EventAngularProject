import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { EventListComponent } from './event-list/event-list.component';
import { BucketlistPageComponent } from './bucketlist-page/bucketlist-page.component';
import { GetTicketmasterDataService } from './get-ticketmaster-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';


const appRoutes: Routes = [
  { path: 'lander', component:LandingPageComponent},
  { path: 'search-criteria', component: SearchCriteriaComponent },
  { path: 'bucketlist-page', component: BucketlistPageComponent },
  { path: 'event-list', component: EventListComponent},
  { path: '',
    redirectTo: '/lander',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    EventListComponent,
    BucketlistPageComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    GetTicketmasterDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
