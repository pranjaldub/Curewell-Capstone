import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurewellService } from '../app/curewell-services/curewell.service';
import { AppComponent } from './app.component';
import { ViewDoctorComponent } from '../app/curewell-components/view-doctor/view-doctor.component';
import { UpdateDoctorComponent } from './curewell-components/update-doctor/update-doctor.component';
import { AddDoctorComponent } from './curewell-components/add-doctor/add-doctor.component';
import { ViewSpecializationComponent } from './curewell-components/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './curewell-components/view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './curewell-components/update-surgery/update-surgery.component';
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ViewDoctorComponent,
    UpdateDoctorComponent,
    AddDoctorComponent,
    ViewSpecializationComponent,
    ViewTodaysSurgeryComponent,
    UpdateSurgeryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, routing
  ],
  providers: [HttpClientModule,CurewellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
