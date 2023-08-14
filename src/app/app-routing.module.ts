import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { TrucksComponent } from './trucks/trucks.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { VehicaleDetailsComponent } from './vehicale-details/vehicale-details.component';
import { SportsBikesComponent } from './sports-bikes/sports-bikes.component';
import { ScramblersComponent } from './scramblers/scramblers.component';
import { CruserComponent } from './cruser/cruser.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"bikes",component:BikesComponent,
  children:[
    {path:"spors",component:SportsBikesComponent},
    {path:"scram",component:ScramblersComponent},
    {path:"cruse",component:CruserComponent},
  ]},
  {path:"cars",component:CarsComponent},
  {path:"vehicle/:id",component:VehicaleDetailsComponent},
  {path:"trucks",component:TrucksComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
