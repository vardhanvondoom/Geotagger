import { Locationdata } from './../interfaces/locationdata';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { RestserviceService } from './restservice.service';

@Injectable({
	providedIn: 'root'
})
export class LocationdataService {
	columns: string[] = ["longitude", "latitude", "name"];
	array1:Locationdata;
	constructor(private http: HttpClient,private rest:RestserviceService) {
	}
	
	fetch(){
		return this.rest.get("user/43").pipe(
			retry(1),
			);
	}
	
	getTitle() {
		return this.columns;
	}
	
	deleteRow(i: number) {	
		this.rest.delete("location/"+i).subscribe(
		data  => {
			console.log("Delete Request is successful ", data);
		},
		error  => {
			console.log("Error", error);	
		}
		);
	}
	
	updateLocation(i: number, a: any) {
		console.log(i);
		this.rest.put("location/"+i,{
		"latitude":  a.latitude,
		"longitude": a.longitude,
		"name":  a.name
	}).subscribe(
		data  => {
			console.log("PUT Request is successful ", data);
		},
		error  => {
			console.log("Error", error);	
		}
		);
	}
	
	addLocation(lat1: number, lng1: number, name1: string) {
		this.rest.post("user/43/location",[{
		"longitude":lng1,
		"latitude":lat1,
		"name":name1
	}]).subscribe(
		data  => {
			console.log("POST Request is successful ", data);
		},
		error  => {
			console.log("Error", error);	
		}
		);
	}
}

interface postresponse{
	longitude:number;
	latitude:number;
	name:string;
}