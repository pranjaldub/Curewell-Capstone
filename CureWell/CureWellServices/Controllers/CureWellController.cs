using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CureWellServices.Models;
using CureWellDataAccessLayer;
using CureWellDataAccessLayer.Models;
using System.Linq;

namespace CureWellServices.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CureWellController : Controller
    {
        CureWellRepository rep = new CureWellRepository();

        #region GetDoctor - Do not modify the signature
        [HttpGet]
        public JsonResult GetDoctors()
        {
            List<Models.Doctor> listOfDoctors = new List<Models.Doctor>();
            try
            {
                var doctorsList = rep.GetAllDoctors();
                if (doctorsList.Any())
                {
                    foreach  (var item in doctorsList)
                    {
                        listOfDoctors.Add(new Models.Doctor()
                        {
                            DoctorId=item.DoctorId,
                            DoctorName=item.DoctorName
                        }
                        );
                    }
                } 
            }
            catch (Exception)
            {
                listOfDoctors= null;
            }
            return Json(listOfDoctors);
        }
        #endregion

        #region GetSpecializations - Do not modify the signature
        [HttpGet]
        public JsonResult GetSpecializations()
        {
            List<Models.Specialization> listOfSpecialization = new List<Models.Specialization>();
            try
            {
                var specializationList = rep.GetAllSpecializations();
                if (specializationList.Any())
                {
                    foreach (var item in specializationList)
                    {
                        listOfSpecialization.Add(new Models.Specialization()
                        {
                            SpecializationCode = item.SpecializationCode,
                            SpecializationName = item.SpecializationName
                        }
                        );
                    }
                }
            }
            catch (Exception)
            {
                listOfSpecialization = null;
            }
            return Json(listOfSpecialization);
        }
        #endregion

        #region GetAllSurgeryTypeForToday - Do not modify the signature
        [HttpGet]
        public JsonResult GetAllSurgeryTypeForToday()
        {
            List<Models.Surgery> listOfSurgery = new List<Models.Surgery>();
            try
            {
                var surgeryList = rep.GetAllSurgeryTypeForToday();
                if (surgeryList.Any())
                {
                    foreach (var item in surgeryList)
                    {
                        listOfSurgery.Add(new Models.Surgery()
                        {
                            DoctorId=item.DoctorId,
                            EndTime=item.EndTime,
                            StartTime=item.StartTime,
                            SurgeryCategory=item.SurgeryCategory,
                            SurgeryDate=item.SurgeryDate,
                            SurgeryId=item.SurgeryId
                        }
                        );
                    }
                }
            }
            catch (Exception)
            {
                listOfSurgery = null;
            }
            return Json(listOfSurgery);
        }
        #endregion

        #region AddDoctor - Do not modify the signature
        [HttpPost]
        public bool AddDoctor(Models.Doctor dObj)
        {
            var status = false;
            try
            {
                CureWellDataAccessLayer.Models.Doctor doctor = new CureWellDataAccessLayer.Models.Doctor();
                doctor.DoctorName = dObj.DoctorName;
                status = rep.AddDoctor(doctor);

            }
            catch(Exception e)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region UpdateDoctorDetails - Do not modify the signature
        [HttpPut]
        public bool UpdateDoctorDetails(Models.Doctor dObj)
        {
            bool status = false;
            try
            {
                CureWellDataAccessLayer.Models.Doctor newDoctor = new CureWellDataAccessLayer.Models.Doctor();
                if (ModelState.IsValid)
                {
                    newDoctor.DoctorId = dObj.DoctorId;
                    newDoctor.DoctorName = dObj.DoctorName;
                    status = rep.UpdateDoctorDetails(newDoctor);
                }
            }
            catch(Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region UpdateSurgery - Do not modify the signature
        [HttpPut]
        public bool UpdateSurgery(Models.Surgery sObj)
        {
            bool status = false;
            try
            {
                CureWellDataAccessLayer.Models.Surgery newSurgery = new CureWellDataAccessLayer.Models.Surgery();
                if (ModelState.IsValid)
                {
                    newSurgery.DoctorId = sObj.DoctorId;
                    newSurgery.StartTime = sObj.StartTime;
                    newSurgery.EndTime = sObj.EndTime;
                    newSurgery.SurgeryCategory = sObj.SurgeryCategory;
                    newSurgery.SurgeryDate = sObj.SurgeryDate;
                    newSurgery.SurgeryId = sObj.SurgeryId;
                    status = rep.UpdateSurgery(newSurgery);
                }
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region DeleteDoctor - Do not modify the signature
        [HttpDelete]
        public bool DeleteDoctor(Models.Doctor dObj)
        {
            bool status = false;
            try
            {
                CureWellDataAccessLayer.Models.Doctor doctor = new CureWellDataAccessLayer.Models.Doctor();
                if (ModelState.IsValid)
                {
                    doctor.DoctorId = dObj.DoctorId;
                    doctor.DoctorName = dObj.DoctorName;
                    status = rep.DeleteDoctor(doctor);
                }
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion
    }
}