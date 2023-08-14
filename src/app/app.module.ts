import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { CarsComponent } from './cars/cars.component';
import { TrucksComponent } from './trucks/trucks.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { VehicaleDetailsComponent } from './vehicale-details/vehicale-details.component';
import { SportsBikesComponent } from './sports-bikes/sports-bikes.component';
import { ScramblersComponent } from './scramblers/scramblers.component';
import { CruserComponent } from './cruser/cruser.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    CarsComponent,
    TrucksComponent,
    HomeComponent,
    ErrorComponent,
    VehicaleDetailsComponent,
    SportsBikesComponent,
    ScramblersComponent,
    CruserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
