using Core.Emp.Sys.Model.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Core.Emp.Sys.Dal.Service
{
	/// <summary>
	/// Entity Service Interface
	/// </summary>
	/// <typeparam name="I">[in] ID Type</typeparam>
	/// <typeparam name="T">[in] Entity Type</typeparam>
	public interface IEntityService<I, T>
		where T: Entity<I>, new ()
	{
		Task<EServiceStatus>	SaveAsync ();
		Task<T>					GetByIdAsync (I id);
		Task<IEnumerable<T>>	GetAllRecAsync ();

		Task<EServiceStatus>	CreateAsync (T entity);
		Task<EServiceStatus>	DeleteAsync (T entity);
		Task<EServiceStatus>	DeleteWhereAsync (Expression<Func<T, bool>> predicate);
		Task<EServiceStatus>	UpdateAsync (T entity);
	}

	/// <summary>
	/// Service Status
	/// </summary>
	public enum EServiceStatus
	{
		ERROR		= -1,		///< Error
		SUCCESS		= 0			///< Success
	}
}
