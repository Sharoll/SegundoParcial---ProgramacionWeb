﻿// <auto-generated />
using System;
using Datos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Datos.Migrations
{
    [DbContext(typeof(PersonaContext))]
    partial class PersonaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entidad.Pago", b =>
                {
                    b.Property<int>("CodPago")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CodPersona")
                        .HasColumnType("varchar(15)");

                    b.Property<DateTime>("FechaPago")
                        .HasColumnType("date");

                    b.Property<string>("TipoPago")
                        .HasColumnType("varchar(30)");

                    b.Property<decimal>("ValorIvaPago")
                        .HasColumnType("decimal(6,0)");

                    b.Property<decimal>("ValorPago")
                        .HasColumnType("decimal(6,0)");

                    b.HasKey("CodPago");

                    b.ToTable("Pagos");
                });

            modelBuilder.Entity("Entidad.Persona", b =>
                {
                    b.Property<string>("Identificacion")
                        .HasColumnType("varchar(15)");

                    b.Property<string>("Ciudad")
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Departamento")
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Direccion")
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Nombre")
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Pais")
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Telefono")
                        .HasColumnType("varchar(15)");

                    b.Property<string>("TipoDocumento")
                        .HasColumnType("varchar(10)");

                    b.HasKey("Identificacion");

                    b.ToTable("Personas");
                });
#pragma warning restore 612, 618
        }
    }
}
