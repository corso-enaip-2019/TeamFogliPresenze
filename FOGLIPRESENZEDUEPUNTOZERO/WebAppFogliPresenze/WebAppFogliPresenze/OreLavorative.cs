//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAppFogliPresenze
{
    using System;
    using System.Collections.Generic;
    
    public partial class OreLavorative
    {
        public int Id { get; set; }
        public int FoglioPresenzeId { get; set; }
        public int Giorno { get; set; }
        public int Quantita { get; set; }
        public string Tipo { get; set; }
    
        public virtual FogliPresenze FogliPresenze { get; set; }
    }
}
