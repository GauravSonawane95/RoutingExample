import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vehicale-details',
  templateUrl: './vehicale-details.component.html',
  styleUrls: ['./vehicale-details.component.css']
})
export class VehicaleDetailsComponent implements OnInit {
carselect:string|null=null;
constructor(private route:ActivatedRoute){

}
ngOnInit(): void {
    this.carselect=this.route.snapshot.paramMap.get('id');
    console.log(this.route)

}
}
