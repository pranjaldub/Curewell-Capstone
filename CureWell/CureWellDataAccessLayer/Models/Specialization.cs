using System;
using System.Collections.Generic;

namespace CureWellDataAccessLayer.Models
{
    public partial class Specialization
    {
        public Specialization()
        {
            DoctorSpecialization = new HashSet<DoctorSpecialization>();
            Surgery = new HashSet<Surgery>();
        }

        public string SpecializationCode { get; set; }
        public string SpecializationName { get; set; }

        public ICollection<DoctorSpecialization> DoctorSpecialization { get; set; }
        public ICollection<Surgery> Surgery { get; set; }
    }
}
