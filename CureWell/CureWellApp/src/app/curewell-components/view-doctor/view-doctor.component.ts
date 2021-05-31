import { Component, OnInit, DoCheck } from '@angular/core';
import { Doctor } from '../../curewell-interfaces/doctor';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Route } from '@angular/compiler/src/core';

@Component({
  templateUrl: './view-doctor.component.html',
})
export class ViewDoctorComponent implements OnInit {

  doctorList: Doctor[];
  showMsgDiv: boolean = false;
  doctorId: number;
  errorMsg: string;
  status: boolean;

  constructor(private _curewellService: CurewellService, private router: Router) { }

  ngOnInit() {
    //To do implement necessary logic
    this.getDoctor();
    if (this.doctorList == null) {
      this.showMsgDiv = true;
    }
  }

  getDoctor() {
    //To do implement necessary logic
    this._curewellService.getDoctors().subscribe(
      responseDoctorData => {
        this.doctorList = responseDoctorData;
        this.showMsgDiv = false;
      },
      responseDoctorError => {
        this.doctorList = null;
        this.errorMsg = responseDoctorError;
        console.log(this.errorMsg);
      },
      () => console.log("Doctors Fetched Successfully")

    );

   
  }

  editDoctorDetails(doctor: Doctor) {

    this.router.navigate(['/editDoctorDetails', doctor.doctorId, doctor.doctorName])
  }

  removeDoctor(doctor: Doctor) {
    this._curewellService.deleteDoctor(doctor).subscribe(
      responseDeletedoctor => {
        this.status = responseDeletedoctor;
        if (this.status) {
          alert("doctor deleted successfully.");
         
        }
        else {
          alert("Doctor could not be deleted. Please try after sometime.");
        }
      },
      responseDeleteDoctorError => {
        this.errorMsg = responseDeleteDoctorError;
        alert("Something went wrong. Please try after sometime.");
      },
      () => console.log("Removedoctor method executed successfully")
    );

    
    //To do implement necessary logic
    
  }

}
