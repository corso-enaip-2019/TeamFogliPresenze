using Nager.Date;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAppPresenze.Models;

namespace WebAppPresenze.BusinessLogic
{
    public static class DataManager
    {
        public static List<int> CalcolaGiorniFestivi(int mese, int anno)
        {
            List<int> giorniFestivi = new List<int>();
            for (int i = 1; i <= DateTime.DaysInMonth(anno, mese); i++)
            {
                var date = new DateTime(anno, mese, i);
                if (DateSystem.IsWeekend(date, CountryCode.IT) || DateSystem.IsPublicHoliday(date, CountryCode.IT))
                    giorniFestivi.Add(i);
            }
            return giorniFestivi;
        }

        public static List<int> CalcolaTotaliGiornalieri(this FoglioPresenzeModel model)
        {
            List<int> totaliGiornalieri = new List<int>();
            for (int i = 1; i <= DateTime.DaysInMonth(model.Anno, model.Mese); i++)
            {
                totaliGiornalieri.Add(model.Ore
                                           .Where(o => o.Giorno == i)
                                           .Sum(o => o.Quantita));
            }

            return totaliGiornalieri;
        }

        public static List<CategoriaModel> CalcolaTotaliCategorie(this FoglioPresenzeModel model)
        {
            List<CategoriaModel> totaliCategorie = new List<CategoriaModel>();
            foreach (string cat in DataSettings.Categorie)
            {
                totaliCategorie.Add(new CategoriaModel
                {
                    Nome = cat,
                    OreTotali = model.Ore
                                     .Where(o => o.Tipo == cat)
                                     .Sum(o => o.Quantita)
                });
            }

            return totaliCategorie;
        }

        public static List<string> CheckValiditaGiorni(this FoglioPresenzeModel model)
        {
            List<string> anomalieGiorni = new List<string>();
            for (int i = 0; i < model.TotaliGiornalieri.Count; i++)
            {
                if (model.GiorniFestivi.Contains(i + 1))
                {
                    if (model.TotaliGiornalieri[i] != 0)
                        anomalieGiorni.Add(DataSettings.ErroreOreFestive);
                }
                else if (model.GiorniFestivi.Contains(i + 1) && model.TotaliGiornalieri[i] != 0 || model.TotaliGiornalieri[i] > 8)
                    anomalieGiorni.Add(DataSettings.ErroreOreGiornoMaggioriStandard);
                else if (model.TotaliGiornalieri[i] < 8)
                    anomalieGiorni.Add(DataSettings.ErroreOreGiornoMinoriStandard);
            }

            return anomalieGiorni;
        }

        public static string CheckValiditaMese(this FoglioPresenzeModel model)
        {
            int giorniLavorativi = DateTime.DaysInMonth(model.Anno, model.Mese) - model.GiorniFestivi.Count;
            int oreStandard = giorniLavorativi * 8;
            int oreMensili = model.TotaliGiornalieri.Sum();

            if (oreMensili < oreStandard)
                return DataSettings.ErroreOreMeseMinoriStandard;
            else if (oreMensili > oreStandard)
                return DataSettings.ErroreOreMeseMaggioriStandard;

            return null;
        }

        public static List<string> CreaListaAnomalie(this FoglioPresenzeModel model)
        {
            List<string> anomalie = new List<string>();
            anomalie.AddRange(model.CheckValiditaGiorni());
            string anomaliaMese = model.CheckValiditaMese();
            if (anomaliaMese != null)
                anomalie.Add(anomaliaMese);

            return anomalie;
        }
    }
}