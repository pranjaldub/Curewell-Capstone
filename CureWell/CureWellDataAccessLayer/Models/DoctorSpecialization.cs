using System;
using System.Collections.Generic;

namespace CureWellDataAccessLayer.Models
{
    public partial class DoctorSpecialization
    {
        public DoctorSpecialization()
        {
            
        }

        public int DoctorId { get; set; }
        public string SpecializationCode { get; set; }
        public DateTime SpecializationDate { get; set; }
        
    }
}