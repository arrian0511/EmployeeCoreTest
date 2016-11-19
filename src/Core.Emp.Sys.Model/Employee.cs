using System.Collections.Generic;
using Core.Emp.Sys.Model.Infrastructure;
using Newtonsoft.Json;

namespace Core.Emp.Sys.Model
{
	/// <summary>
	/// Employee Model
	/// </summary>
	[JsonObject(MemberSerialization.OptOut)]
	public class Employee : Entity<int>
	{
		/// <summary>
		/// Contructor
		/// </summary>
		public Employee ()
		{
			/// Initialize Member Variables
			this.Projects = new List<Project> ();
		}
		public string				UserID		{ get; set; }
		public string				FirstName	{ get; set; }
		public string				LastName	{ get; set; }
		public string				City		{ get; set; }

		[JsonIgnore]
		public ICollection<Project> Projects	{ get; set; }
	}
}
