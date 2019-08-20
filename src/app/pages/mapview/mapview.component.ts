import { Component, OnInit } from '@angular/core';
import { LocationdataService } from 'src/app/service/locationdata.service';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.scss']
})
export class MapviewComponent implements OnInit {
  title = 'maptime';
	zoom:number =8;
	lat: number = 11.7491;
	lng: number = 75.4890;
	mapType="satellite";
	long:number;
  	latt:number;
  
  markers: any;
	constructor(private service:LocationdataService) {
		service.fetch().subscribe((resp) => {
			this.markers=resp.locations;
			console.log(this.markers);
		  });
	  }
  ngOnInit() {
  }

}
