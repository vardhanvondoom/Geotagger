import { Locationdata } from './../../interfaces/locationdata';
import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationdataService } from 'src/app/service/locationdata.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  title = 'tablere';
  array:any=[];
  columns:any[];
  array1:any=[];
  
  
  constructor(private service:LocationdataService,private modalService: NgbModal) {
    // this.array=service.getArray();
    this.columns=service.getTitle();
    service.fetch().subscribe((resp) => {
      this.array=resp.locations;
    });
  }
  
  open(i){
    const modalref=this.modalService.open(ModalComponent);
    modalref.componentInstance.array= this.array[i];
    modalref.componentInstance.i=i;
  }
  deleteRow(i){
    console.log("TEST");
    console.log(i);
    this.service.deleteRow(this.array[i].locationId);
  }
  ngOnInit() {
  }
  
}