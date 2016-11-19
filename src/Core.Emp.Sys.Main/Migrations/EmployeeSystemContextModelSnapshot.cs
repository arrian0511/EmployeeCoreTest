using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Core.Emp.Sys.Dal.Context;

namespace Core.Emp.Sys.Main.Migrations
{
    [DbContext(typeof(EmployeeSystemContext))]
    partial class EmployeeSystemContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Core.Emp.Sys.Model.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("UserID")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("Core.Emp.Sys.Model.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired();

                    b.Property<int>("EmployeeId");

                    b.Property<string>("Remarks");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("Project");
                });

            modelBuilder.Entity("Core.Emp.Sys.Model.Project", b =>
                {
                    b.HasOne("Core.Emp.Sys.Model.Employee")
                        .WithMany("Projects")
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
