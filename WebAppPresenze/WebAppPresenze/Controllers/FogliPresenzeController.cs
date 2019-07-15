using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebAppPresenze.Models;

namespace WebAppPresenze.Controllers
{
    [RoutePrefix("api/presenze")]
    public class FogliPresenzeController : BaseController
    {
        [HttpGet]
        [Route("lista")]
        public async Task<List<FoglioPresenzeModel>> ListaFogliPerIdDipendente(int id)
        {
            var fogli = await _context.FogliPresenze
                                 .Include(f => f.OreLavorative)
                                 .Where(f => f.DipendenteId == id)
                                 .ToListAsync();

            return fogli.Select(f => new FoglioPresenzeModel(f)).ToList();
        }

        [HttpGet]
        [Route("listaCSV")]
        public async Task<List<FoglioCSV>> ListaFogliPerCSV()
        {
            var fogli = await _context.FogliPresenze
                                 .Include(f => f.OreLavorative)
                                 .Include(f => f.Dipendenti)
                                 .ToListAsync();

            return fogli.Select(f => new FoglioCSV(new FoglioPresenzeModel(f), f.Dipendenti)).ToList();
        }

        [HttpGet]
        [Route("foglio")]
        public async Task<FoglioPresenzeModel> DettaglioFoglio(int id)
        {
            var foglio = await _context.FogliPresenze
                                       .Include(f => f.OreLavorative)
                                       .FirstOrDefaultAsync(f => f.Id == id);

            if (foglio == null)
                return null;

            return new FoglioPresenzeModel(foglio);        
        }

        [HttpPost]
        [Route("aggiorna")]
        public async Task<HttpResponseMessage> AggiornaFoglio([FromBody]FoglioPresenzeModel model)
        {
            var foglio = await _context.FogliPresenze
                                       .Include(f => f.OreLavorative)
                                       .FirstOrDefaultAsync(f => f.Id == model.Id);

            if (foglio == null)
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Foglio non trovato.");

            foreach (var nuovaOra in model.Ore)
            {
                var vecchiaOra = foglio.OreLavorative.FirstOrDefault(o => o.Id == nuovaOra.Id);
                if (vecchiaOra == null)
                    foglio.OreLavorative.Add(nuovaOra);
                else if (vecchiaOra.Quantita != nuovaOra.Quantita)
                    vecchiaOra.Quantita = nuovaOra.Quantita;   
            }

            foglio.Stato = "Modificato";

            await _context.SaveChangesAsync();

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}