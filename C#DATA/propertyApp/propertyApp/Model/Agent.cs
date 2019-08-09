using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace propertyApp.Model
{
    public class Agent
    {
        public string id { get; set; }
        public string fullname { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string meeting_date { get; set; }
        public string meeting_time { get; set; }
        public string note { get; set; }
        public ICollection<AgentProperty> AgentProperties { get; set; }
    }
}
