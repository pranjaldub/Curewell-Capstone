import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CurewellService } from '../../curewell-services/curewell.service';
import { Doctor } from '../../curewell-interfaces/doctor';

@Component({
  templateUrl: './update-doctor.component.html'
})
export class UpdateDoctorComponent implements OnInit {

  doctorId: number;
  doctorName: string;
  status: boolean;
  errorMsg: string;

  constructor(private route: ActivatedRoute, private _cureWellService: CurewellService, private router: Router) { }

  ngOnInit() {
    //To do implement necessary logic\
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.doctorName = this.route.snapshot.params['doctorName'];
  }

  editDoctorDetails(doctorname: string) {

    //To do implement necessary logic
    console.log(doctorname)

    this._cureWellService.editDoctorDetails(this.doctorId,doctorname).subscribe(
      responseEditDoctor => {
        this.status = responseEditDoctor;
        if (this.status) {
          alert("Doctor Updated successfully")
          this.router.navigate(['/viewDoctors'])


        }
        else {
          alert("Doctor's name not updated")
          this.router.navigate(['/viewDoctors'])
        }
      },
      responseEditDoctorError => {
        this.errorMsg = responseEditDoctorError;
        alert('Some error occurred')
        this.router.navigate(['/viewDoctors'])
      }
    )
  }
  }

