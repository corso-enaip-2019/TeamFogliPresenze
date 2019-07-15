using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppPresenze.Models
{
    public class FoglioCSV
    {
        public int Id { get; set; }
        public string NomeDipendente { get; set; }
        public string CognomeDipendente { get; set; }
        public int Mese { get; set; }
        public int Anno { get; set; }
        public string Stato { get; set; }
        public string Anomalie { get; set; }
        public int OreOrdinarie { get; set; }
        public int OreAssenza { get; set; }

        public FoglioCSV(FoglioPresenzeModel model, Dipendenti d)
        {
            Id = model.Id;
            NomeDipendente = d.Nome;
            CognomeDipendente = d.Cognome;
            Mese = model.Mese;
            Anno = model.Anno;
            Stato = model.Stato;

            if (model.Anomalie.Count == 0)
                Anomalie = "";
            else
                Anomalie = model.Anomalie.Aggregate((a, b) => a + "/" + b);

            OreOrdinarie = model.TotaliCategorie
                                .Find(c => c.Nome == "Ordinarie")
                                .OreTotali;
            OreAssenza = model.TotaliCategorie
                              .Where(c => c.Nome != "Ordinarie")
                              .Sum(c => c.OreTotali);
        }
    }
}