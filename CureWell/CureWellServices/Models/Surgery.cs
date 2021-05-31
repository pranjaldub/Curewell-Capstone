using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace CureWellServices.Models
{
    public class Surgery
    {
        public int SurgeryId { get; set; }
        public int? DoctorId { get; set; }
        public DateTime SurgeryDate { get; set; }
        public decimal StartTime { get; set; }
        public decimal EndTime { get; set; }
        public string SurgeryCategory { get; set; }
    }
}
