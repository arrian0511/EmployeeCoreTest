using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using Core.Emp.Sys.Dal.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Core.Emp.Sys.Main
{
	public class Startup
	{
		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices (IServiceCollection services)
		{
			var connection = @"Server=(localdb)\mssqllocaldb;Database=EmployeeSystemDB;Trusted_Connection=True;";
			services.AddDbContext<EmployeeSystemContext>(options => options.UseSqlServer(connection, act => act.MigrationsAssembly ("Core.Emp.Sys.Main")));

			services.AddMvc (_setup => {
				_setup.CacheProfiles.Add ("PrivateCache", new CacheProfile () { Duration=0, Location=ResponseCacheLocation.None, NoStore=true });
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure (IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			loggerFactory.AddConsole();

			if(env.IsDevelopment()) {
				app.UseDeveloperExceptionPage();
			}

			app.UseDefaultFiles();
			app.UseStaticFiles();

			app.Use (async (context, next) =>
			{
				await next ();

				// Set Angular Root Page in case of error
				if (context.Response.StatusCode == 404 && 
					!Path.HasExtension(context.Request.Path.Value)) {
					context.Request.Path = "/index.html";
					await next ();
				}
			});

			app.UseMvc();
		}
	}
}
