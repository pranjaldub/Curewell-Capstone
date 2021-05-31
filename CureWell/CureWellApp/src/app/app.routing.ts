import { RouterModule } from '@angular/router';
import { ViewDoctorComponent } from './curewell-components/view-doctor/view-doctor.component';
import { ViewSpecializationComponent } from './curewell-components/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './curewell-components/view-todays-surgery/view-todays-surgery.component';
import { AddDoctorComponent } from './curewell-components/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './curewell-components/update-doctor/update-doctor.component';
import { UpdateSurgeryComponent } from './curewell-components/update-surgery/update-surgery.component';


export var routing = RouterModule.forRoot([
  { path: 'viewDoctors', component: ViewDoctorComponent },
  { path: 'viewSpecialization', component: ViewSpecializationComponent },
  { path: 'viewTodaySurgery', component: ViewTodaysSurgeryComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'editDoctorDetails/:doctorId/:doctorName', component: UpdateDoctorComponent },
  { path: 'editSurgery/:doctorId/:endTime/:startTime/:surgeryCategory/:surgeryDate/:surgeryId', component: UpdateSurgeryComponent },
  { path: '**', component: ViewDoctorComponent }

])
