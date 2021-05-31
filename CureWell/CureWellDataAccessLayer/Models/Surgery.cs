using System;
using System.Collections.Generic;

namespace CureWellDataAccessLayer.Models
{
    public partial class Surgery
    {
        public int SurgeryId { get; set; }
        public int? DoctorId { get; set; }
        public DateTime SurgeryDate { get; set; }
        public decimal StartTime { get; set; }
        public decimal EndTime { get; set; }
        public string SurgeryCategory { get; set; }

        public Doctor Doctor { get; set; }
        public Specialization SurgeryCategoryNavigation { get; set; }
    }
}
