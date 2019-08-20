import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationdataService } from 'src/app/service/locationdata.service';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit {
  @Input() public array; 
  @Input() public i;
  long:number;
  lat:number;
  name:any;
  locationid:any;
  
  constructor(public activeModal: NgbActiveModal,private newservice:LocationdataService) {
  }
  ngOnInit() {
    console.log(this.array);
    this.lat=this.array.latitude;
    this.long=this.array.longitude;
    this.name=this.array.name;
    this.locationid=this.array.locationId;
  }
  onClickUpdate(formData) {
    formData.value.draggable=false;
    this.newservice.updateLocation(this.locationid,formData.value)
    formData.reset();
    this.activeModal.close();
  }
}
