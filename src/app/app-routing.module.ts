import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { DoctorComponent } from './components/doctor/doctor.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsListComponent
  },
  {
    path: 'patients',
    component: PatientsListComponent
  }
  ,
  {
    path: 'doctor',
    component: DoctorComponent
  }
  ,
  {
    path: 'clinic',
    component: ClinicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
