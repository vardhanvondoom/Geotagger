import { Component, OnInit } from '@angular/core';
import { LocationdataService } from 'src/app/service/locationdata.service';

@Component({
  selector: 'app-manage-location',
  templateUrl: './manage-location.component.html',
  styleUrls: ['./manage-location.component.scss']
})
export class ManageLocationComponent implements OnInit {

  constructor(private newservice:LocationdataService) { }

  ngOnInit() {
  }
  onClickSubmit(formData) {
    this.newservice.addLocation(formData.value.latitude1,formData.value.longitude1,formData.value.address)
    formData.reset();
  }
}
