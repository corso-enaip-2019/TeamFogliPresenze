using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAppPresenze.BusinessLogic;

namespace WebAppPresenze.Models
{
    public class FoglioPresenzeModel
    {
        public int Id { get; set; }
        public int DipendenteId { get; set; }
        public int Anno { get; set; }
        public int Mese { get; set; }
        public string Stato { get; set; }
        public List<OreLavorative> Ore { get; set; }

        public List<int> GiorniFestivi { get; set; }
        public List<int> TotaliGiornalieri { get; set; }
        public List<CategoriaModel> TotaliCategorie { get; set; }
        public List<string> Anomalie { get; set; }

        public FoglioPresenzeModel() { }

        public FoglioPresenzeModel(FogliPresenze entityFP)
        {
            Id = entityFP.Id;
            DipendenteId = entityFP.DipendenteId;
            Anno = entityFP.Anno;
            Mese = entityFP.Mese;
            Stato = entityFP.Stato;
            Ore = entityFP.OreLavorative.ToList();

            GiorniFestivi = DataManager.CalcolaGiorniFestivi(Mese, Anno);
            TotaliGiornalieri = this.CalcolaTotaliGiornalieri();
            TotaliCategorie = this.CalcolaTotaliCategorie();
            Anomalie = this.CreaListaAnomalie();
            
        }
    }
}