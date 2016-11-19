using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Core.Emp.Sys.Model;

namespace Core.Emp.Sys.Dal.Context
{
	/// <summary>
	/// Employee System Context Class
	/// </summary>
	public class EmployeeSystemContext : DbContext
	{
		public DbSet<Employee>	Employee	{ get; set; }		// Employee Table
		public DbSet<Project>	Project		{ get; set; }		// Project Table

		/// <summary>
		/// Constructor
		/// </summary>
		public EmployeeSystemContext (DbContextOptions<EmployeeSystemContext> options)
			 : base(options)
		{
			/// Initialize Member Variables
		}

		/// <summary>
		/// On Model Creation
		/// </summary>
		/// <param name="modelBuilder">[in] Model Builder</param>
		protected override void OnModelCreating (ModelBuilder modelBuilder)
		{
			// Set Fluent to Employee
			modelBuilder.Entity<Employee> ().Property(e => e.UserID).IsRequired ();
			modelBuilder.Entity<Employee> ().HasMany<Project> (e => e.Projects);

			// Set Fluent to Project
			modelBuilder.Entity<Project> ().Property(p => p.Code).IsRequired ();
		}
	}
}
