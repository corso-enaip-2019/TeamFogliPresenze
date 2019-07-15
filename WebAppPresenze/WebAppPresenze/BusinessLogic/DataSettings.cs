using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppPresenze.BusinessLogic
{
    public static class DataSettings
    {
        public static List<string> Categorie = new List<string>
        {
            "Ordinarie",
            "Ferie",
            "Permessi",
            "Malattia",
            "Sciopero",
            "Maternità Anticipata",
            "Maternità Obbligatoria",
            "Maternità Facoltativa",
            "Donazione Sangue",
            "Seggio Elettorale",
            "Allattamento",
            "Esami Universitari",
            "Licenza Matrimoniale",
            "Infortuni",
            "Recuperi",
            "Assenze Giustificate Retribuite",
            "Assenze Giustificate NON Retribuite",
            "Assenze Ingiustificate",
            "Cassa Integrazione",
            "Aspettativa"
        };

        public const string ErroreOreGiornoMaggioriStandard = "Ore giornaliere maggiori ore standard";
        public const string ErroreOreGiornoMinoriStandard = "Ore giornaliere minori ore standard";
        public const string ErroreOreMeseMinoriStandard = "Ore mensili minori ore standard";
        public const string ErroreOreMeseMaggioriStandard = "Ore mensili maggiori ore standard";
        public const string ErroreOreFestive = "Errore ore festive";

    }
}