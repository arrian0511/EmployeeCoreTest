using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Core.Emp.Sys.Model;
using Newtonsoft.Json;
using Core.Emp.Sys.Dal.Context;
using Core.Emp.Sys.Dal.Service;

namespace Core.Emp.Sys.Main.Controllers
{
	[Route("api/[controller]")]
	[ResponseCache(CacheProfileName = "PrivateCache")]
	public class EmployeeController : Controller
	{
		private IEntityService<int, Employee>	_EmployeeService = null;		// Employee Service

		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="iContext">[in] DB Context</param>
		public EmployeeController (EmployeeSystemContext iContext)
		{
			/// Initialize Member Variables <BR>
			_EmployeeService = new EntityService<int, Employee> (iContext);
		}

		// GET: api/values
		[HttpGet("GetAll")]
		public async Task<IActionResult> GetAll ()
		{
			/// Get All Records <BR>
			var _allrecord = await _EmployeeService.GetAllRecAsync ();
			return new JsonResult (_allrecord, DefJsonFormat);
		}

		// GET api/values/5
		[HttpGet("GetById/{id}")]
		public async Task<IActionResult> GetById (int id)
		{
			/// Get Record By ID <BR>
			var _record = await _EmployeeService.GetByIdAsync (id);
			return new JsonResult (_record, DefJsonFormat);
		}

		// POST api/values
		[HttpPost("Create")]
		public async Task<IActionResult> Create ([FromBody]Employee value)
		{
			object			resMsg	= new object ();				// Response Message
			EServiceStatus	retStat	= EServiceStatus.SUCCESS;		// Return Status

			/// Set Bad Request in case the value is null <BR>
			if (value == null) {
				resMsg = "Error" + BadRequest ().StatusCode.ToString ();
				goto LABELEND;
			}

			/// Save Record <BR>
			var result = new JsonResult (value, DefJsonFormat);
			retStat = await _EmployeeService.CreateAsync (result.Value as Employee);
			resMsg = "Successfully Created!";

		LABELEND:
			/// Return result message <BR>
			return new JsonResult(resMsg, DefJsonFormat);
		}

		// PUT api/values/5
		[HttpPut("Update/{id}")]
		public async Task<IActionResult> Update (int id, [FromBody]Employee value)
		{
			string			resMsg	= string.Empty;				// Response Message
			EServiceStatus	retStat	= EServiceStatus.SUCCESS;	// Return Status

			/// Set Response Message in case the value is null <BR>
			if (value == null) {
				resMsg = "Error NULL: " + BadRequest ().StatusCode.ToString ();
				goto LABELEND;
			}

			/// Get Record First to check if exist <BR>
			var		_curData = await _EmployeeService.GetByIdAsync (id);
			if(_curData != null) {
				_curData.UserID     = value.UserID;
				_curData.FirstName  = value.FirstName;
				_curData.LastName   = value.LastName;
				_curData.City       = value.City;

				/// Update Record <BR>
				retStat = await _EmployeeService.UpdateAsync(_curData);
				resMsg = "Successfully Updated!";
			}
			else {
				resMsg = "Error" + BadRequest ().StatusCode.ToString ();
				goto LABELEND;
			}

		LABELEND:
			/// Return result message <BR>
			return new JsonResult(resMsg, DefJsonFormat);
		}

		// DELETE api/values/5
		[HttpDelete("Delete/{id}")]
		public async Task<IActionResult> Delete (int id)
		{
			object			resMsg	= new object ();				// Response Message
			EServiceStatus	retStat	= EServiceStatus.SUCCESS;		// Return Status

			/// Get Record First to check if exist <BR>
			var		_curData = await _EmployeeService.GetByIdAsync (id);
			if(_curData != null) {

				/// Delete Record <BR>
				retStat = await _EmployeeService.DeleteAsync (_curData);
				resMsg = "Successfully Deleted!";
			}
			else {
				resMsg = "Error" + BadRequest ().StatusCode.ToString ();
				goto LABELEND;
			}

		LABELEND:
			/// Return result message <BR>
			return new JsonResult(resMsg, DefJsonFormat);
		}

		/// <summary>
		/// Default JSON Format <BR>
		/// </summary>
		private JsonSerializerSettings DefJsonFormat
		{
			get
			{
				return new JsonSerializerSettings
				{
					Formatting = Formatting.Indented
				};
			}
		}
	}
}
