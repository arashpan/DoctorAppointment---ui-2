import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClinicService } from './clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
  datas: any[] = []
  data:{id:number,title:string}={
    id:0,
    title:""
  }
  isDisabled:boolean=false
  constructor(private modalService: NgbModal,private _service:ClinicService) { }

  ngOnInit() {
  }

  openAddModal(Add_Modal:any){
		this.modalService.open(Add_Modal, { scrollable: true ,centered: true,size: 'lg'});

  }
  save(){
    console.log(this.data);
    this.isDisabled=true
    this._service.save(this.data.title).subscribe(res=>{
      this.modalService.dismissAll()
      this.isDisabled=false

    })
    

  }
}
