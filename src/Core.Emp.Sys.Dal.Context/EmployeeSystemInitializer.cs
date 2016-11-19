using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Core.Emp.Sys.Dal.Context
{
	public class EmployeeSystemInitializer 
	{
		//protected override void Seed (EmployeeSystemContext context)
		//{
		//	/// Add Employee
		//	var _employee = new List<Employee>
		//	{
		//		new Employee { UserID="12345", FirstName="Arrian", LastName="Pascual", City="Mabalacat" },
		//		new Employee { UserID="12346", FirstName="Darwing", LastName="Pascual", City="Mabalacat" }
		//	};
		//	_employee.ForEach (e => context.Employee.Add(e));
		//	context.SaveChanges ();

		//	/// Add Projects
		//	var _project = new List<Project>
		//	{
		//		new Project { EmployeeId=1, Code="LO16-00001", Title="Full-Size Drawing", Remarks="To view the drawing in fullsize mode." },
		//		new Project { EmployeeId=2, Code="LO16-00002", Title="Harness Layout", Remarks="To Layout the drawing in simple mode." },
		//	};
		//	_project.ForEach (p => context.Project.Add(p));
		//	context.SaveChanges ();
		//}
	}
}
