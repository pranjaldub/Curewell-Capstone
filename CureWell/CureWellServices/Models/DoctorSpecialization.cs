using System;
using System.Collections.Generic;

namespace CureWellServices.Models
{
    public class DoctorSpecialization
    {
        public int DoctorId { get; set; }
        public string SpecializationCode { get; set; }
        public DateTime SpecializationDate { get; set; } 
    }
}