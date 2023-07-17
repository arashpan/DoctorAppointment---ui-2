import { Component } from '@angular/core';
import { patient } from 'src/app/models/patient.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent {
  patients: patient[] = [
    {
      id: 1,
      patientNumber : 1,
      nationalCode: "944892876",
      patientFirstName : "Arash",
      patientLastName : "Panahi",
      clinicId: 2,      
      dateTime: "1402/2/10",
      phone: "09151040871",
      address: "Iran - Mashhad",
      isDeleted: false
    },
    {
      id: 2,
      patientNumber : 2,
      nationalCode: "943892876",
      patientFirstName : "Babak",
      patientLastName : "Panahi",
      clinicId: 1,      
      dateTime: "1402/2/10",
      phone: "09181040401",
      address: "Iran - Mashhad",
      isDeleted: false
    },
    
  ];
  constructor(private modalService: NgbModal){}


  ngOnInit(): void{
    
  }


  openScrollableContent(longContent:any) {
		this.modalService.open(longContent, { scrollable: true ,centered: true,size: 'lg'});
	}
 

}
