using System;
using System.Collections.Generic;

namespace CureWellDataAccessLayer.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            DoctorSpecialization = new HashSet<DoctorSpecialization>();
            Surgery = new HashSet<Surgery>();
        }

        public int DoctorId { get; set; }
        public string DoctorName { get; set; }

        public ICollection<DoctorSpecialization> DoctorSpecialization { get; set; }
        public ICollection<Surgery> Surgery { get; set; }
    }
}
