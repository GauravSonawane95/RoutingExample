import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  precar:string|null=null;
  constructor(private router:Router,private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.precar=this.route.snapshot.queryParamMap.get('carid')
    console.log(this.route)
  }

cars:any=
  [
    {
      "id":1,
       "Name":"chevrolet chevelle malibu",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":307,
       "Horsepower":130,
       "Weight_in_lbs":3504,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":2,
       "Name":"buick skylark 320",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":350,
       "Horsepower":165,
       "Weight_in_lbs":3693,
       "Acceleration":11.5,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":3,
       "Name":"plymouth satellite",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":318,
       "Horsepower":150,
       "Weight_in_lbs":3436,
       "Acceleration":11,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":4,
       "Name":"amc rebel sst",
       "Miles_per_Gallon":16,
       "Cylinders":8,
       "Displacement":304,
       "Horsepower":150,
       "Weight_in_lbs":3433,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      
      "id":5,
       "Name":"ford torino",
       "Miles_per_Gallon":17,
       "Cylinders":8,
       "Displacement":302,
       "Horsepower":140,
       "Weight_in_lbs":3449,
       "Acceleration":10.5,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":6,
       "Name":"ford galaxie 500",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":429,
       "Horsepower":198,
       "Weight_in_lbs":4341,
       "Acceleration":10,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":7,
       "Name":"chevrolet impala",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":454,
       "Horsepower":220,
       "Weight_in_lbs":4354,
       "Acceleration":9,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":8,
       "Name":"plymouth fury iii",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":440,
       "Horsepower":215,
       "Weight_in_lbs":4312,
       "Acceleration":8.5,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":9,
       "Name":"pontiac catalina",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":455,
       "Horsepower":225,
       "Weight_in_lbs":4425,
       "Acceleration":10,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "id":10,
       "Name":"amc ambassador dpl",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":390,
       "Horsepower":190,
       "Weight_in_lbs":3850,
       "Acceleration":8.5,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    
  ]

}
