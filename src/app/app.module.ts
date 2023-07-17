import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ClinicComponent } from './components/clinic/clinic.component';
 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    DoctorComponent,
    ClinicComponent,
   ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
