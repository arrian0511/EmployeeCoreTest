using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Emp.Sys.Model.Infrastructure
{
	/// <summary>
	/// Entity Interface
	/// </summary>
	/// <typeparam name="I">[in] ID Type</typeparam>
	public interface IEntity<I>
	{
		I Id { get; set; }
	}
}
