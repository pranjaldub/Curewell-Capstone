import { Injectable } from '@angular/core';
import { Doctor } from '../curewell-interfaces/doctor';
import { DoctorSpecialization } from '../curewell-interfaces/doctorspecialization';
import { Specialization } from '../curewell-interfaces/specialization';
import { Surgery } from '../curewell-interfaces/surgery';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurewellService {

  doctorList: Doctor[];
  surgeryList: Surgery[];
  specializationList: Specialization[];
  doctorSpecializationList: DoctorSpecialization[];

  constructor(private http: HttpClient) { }
  
  //GetDoctor
  getDoctors(): Observable<Doctor[]> {
    let tempvar = this.http.get<Doctor[]>('https://localhost:44365/api/CureWell/GetDoctors').pipe(catchError(this.errorHandler));;
    //To do implement necessary logic
    return tempvar;
  }

  //GetSpecialization
  getAllSpecializations(): Observable<Specialization[]> {
    //To do implement necessary logic
    let tempvar = this.http.get<Specialization[]>('https://localhost:44365/api/CureWell/GetSpecializations').pipe(catchError(this.errorHandler));;
    return tempvar;
  }

  //GetSurgeries
  getAllSurgeriesForToday(): Observable<Surgery[]> {
    //To do implement necessary logic
    let tempvar = this.http.get<Surgery[]>('https://localhost:44365/api/CureWell/GetAllSurgeryTypeForToday').pipe(catchError(this.errorHandler));;
    return tempvar;
  }

  //AddDoctor
  addDoctor(doctorName: string): Observable<boolean> {
    //To do implement necessary logic
    var docObj: Doctor;
    docObj = { doctorId: 1, doctorName: doctorName }
    return this.http.post<boolean>('https://localhost:44365/api/CureWell/AddDoctor', docObj).pipe(catchError(this.errorHandler));;
  }

  //EditDoctor
  editDoctorDetails(doctorId: number, doctorName: string): Observable<boolean> {
    var docObj: Doctor;
    docObj = { doctorId: doctorId, doctorName: doctorName };
    return this.http.put<boolean>('https://localhost:44365/api/CureWell/UpdateDoctorDetails', docObj).pipe(catchError(this.errorHandler));;
    
  }

  //editSurgery
  editSurgery(doctorId: number, endTime: number, startTime: number, surgeryCategory: string, surgeryDate: Date, surgeryId: number): Observable<boolean> {
    //To do implement necessary logic
    var surjObj: Surgery;
    surjObj = { doctorId: doctorId, endTime: endTime, startTime: startTime, surgeryCategory: surgeryCategory, surgeryDate: surgeryDate, surgeryId: surgeryId };

    return this.http.put<boolean>('https://localhost:44365/api/CureWell/UpdateSurgery', surjObj).pipe(catchError(this.errorHandler));;
  }

  //RemoveDoctor
  deleteDoctor(doctor: Doctor) {
    //To do implement necessary logic
    var docObj: Doctor;
    docObj = { doctorId: doctor.doctorId, doctorName: doctor.doctorName }
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: docObj };
    return this.http.delete<boolean>('https://localhost:44365/api/CureWell/DeleteDoctor', httpOptions).pipe(catchError(this.errorHandler));;
    
  }

  //ErrorHandler
  errorHandler(error: HttpErrorResponse) {
    //To do implement necessary logic
    console.error(error);
    return throwError(error.message || 'ERROR')

  }

}
