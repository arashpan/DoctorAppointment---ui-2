import { BindingType } from "@angular/compiler"

export interface patient{
    id: number,
    patientNumber : number,
    nationalCode: string,
    patientFirstName : string,
    patientLastName : string,
    clinicId: number,    
    dateTime: string,
    phone: string,
    address: string
    isDeleted: boolean    
}