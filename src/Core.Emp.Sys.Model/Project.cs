using Core.Emp.Sys.Model.Infrastructure;

namespace Core.Emp.Sys.Model
{
	/// <summary>
	/// Project Model
	/// </summary>
	public class Project : Entity<int>
	{
		/// <summary>
		/// Constructor
		/// </summary>
		public Project ()
		{
			/// Initialize Member Variables
		}

		public int		EmployeeId	{ get; set; }
		public string	Code		{ get; set; }
		public string	Title		{ get; set; }
		public string	Remarks		{ get; set; }
	}
}
