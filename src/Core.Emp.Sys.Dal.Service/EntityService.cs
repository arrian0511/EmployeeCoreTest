using Core.Emp.Sys.Model.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Core.Emp.Sys.Dal.Service
{
	/// <summary>
	/// Entity Service Class
	/// </summary>
	/// <typeparam name="I">[in] ID Type</typeparam>
	/// <typeparam name="T">[in] Entity Type</typeparam>
	public class EntityService<I, T> : IEntityService<I, T>
		where T : Entity<I>, new()
	{
		private		DbContext	_context;		// Context
		private		DbSet<T>	_table;			// Table

		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="iContext">[in] Database Context</param>
		public EntityService (DbContext iContext)
		{
			/// Initialize Member Variables
			this._context	= iContext;
			this._table		= iContext.Set<T> ();
		}

		public async Task<IEnumerable<T>> GetAllRecAsync ()
		{
			/// Get All Record from Database <BR>
			var		_value = await _table.ToListAsync ();
			return	_value;
		}

		public async Task<T> GetByIdAsync (I id)
		{
			/// Get Record By ID <BR>
			T	_find = await _table.FirstOrDefaultAsync (x => Expression.Equals (x.Id, id));
			return _find;
		}

		public async Task<EServiceStatus> CreateAsync (T entity)
		{
			EServiceStatus		_retvalue = EServiceStatus.SUCCESS; // Return Status

			/// Add Record to Database <BR>
			this._context.Entry<T>(entity).State = EntityState.Added;
			_retvalue = await this.SaveAsync();

			/// Return Value <BR>
			return _retvalue;
		}

		public async Task<EServiceStatus> UpdateAsync (T entity)
		{
			EServiceStatus		_retvalue = EServiceStatus.SUCCESS; // Return Status

			/// Add Record to Database <BR>
			this._context.Entry<T>(entity).State = EntityState.Modified;
			_retvalue = await this.SaveAsync();

			/// Return Value <BR>
			return _retvalue;
		}

		public async Task<EServiceStatus> DeleteAsync (T entity)
		{
			EServiceStatus		_retvalue = EServiceStatus.SUCCESS; // Return Status

			/// Add Record to Database <BR>
			this._context.Entry<T>(entity).State = EntityState.Deleted;
			_retvalue = await this.SaveAsync();

			/// Return Value <BR>
			return _retvalue;
		}

		public async Task<EServiceStatus> DeleteWhereAsync (Expression<Func<T, bool>> predicate)
		{
			EServiceStatus		_retvalue = EServiceStatus.SUCCESS; // Return Status

			/// Get All Records <BR>
			var _allRecord = await GetAllRecAsync ();

			/// Delete the corresponding record based on predicate <BR>
			foreach (var entity in _allRecord) {
				if(predicate.Compile () (entity)) {
					_retvalue = await this.DeleteAsync (entity);
					break;
				}
			}

			/// Return Value <BR>
			return _retvalue;
		}

		public async Task<EServiceStatus> SaveAsync ()
		{
			EServiceStatus		_retvalue = EServiceStatus.SUCCESS; // Return Status

			try {
				/// Save Changes
				await _context.SaveChangesAsync ();
			}
			catch {

				/// Rollback transaction in case of error <BR>
				_context.Database.RollbackTransaction ();
				_retvalue = EServiceStatus.ERROR;
			}

			/// Return Value <BR>
			return _retvalue;
		}

		public void Dispose ()
		{
			_context.Dispose ();
		}
	}
}
