﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAppPresenze
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class WebAppPresenzeEntities : DbContext
    {
        public static WebAppPresenzeEntities Instance { get; private set; }

        static WebAppPresenzeEntities()
        {
            Instance = new WebAppPresenzeEntities();
        }

        private WebAppPresenzeEntities()
            : base("name=WebAppPresenzeEntities")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Dipendenti> Dipendenti { get; set; }
        public virtual DbSet<FogliPresenze> FogliPresenze { get; set; }
        public virtual DbSet<OreLavorative> OreLavorative { get; set; }
    }
}
