using PropertyApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace propertyApp.Model
{
  public class Notification
  {
    public int Id { get; set; }
    public string FullName { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
    public DateTime MeetingDate { get; set; }
    public TimeSpan MeetingTime { get; set; }
    public string Note { get; set; }

    public Property Property { get; set; }
  }
}
