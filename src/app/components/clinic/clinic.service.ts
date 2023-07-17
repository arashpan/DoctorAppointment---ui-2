import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private _http: HttpClient) { }
  save(name:string) {
   return this._http.post("https://localhost:7035/api/pt/",{
    name:name
   },{headers:{
    "accept": "*/*"
   }})
  }
}
