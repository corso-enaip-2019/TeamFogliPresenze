using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Net.Http;
using System.Net;

namespace WebAppFogliPresenze.Controllers
{
    [Authorize]
    [RoutePrefix("Api")]
    public class MainController : BaseController
    {

        [HttpGet]
        [Route("getDipendenti")]
        public async Task<List<Dipendenti>> GetDipendenti()
        {
            return await _context.Dipendenti.ToListAsync();
        }

        //[HttpGet]
        //[Route("getFogliPresenze")]
        //public async Task<List<FogliPresenze>> GetFogliPresenze()
        //{

        //    return await _context.FogliPresenze
        //        (where (f => f.DipendenteId == DipendentiId)).ToListAsync();
        //}

        //[HttpPut]
        //[Route("updateDipendenti")]
        //public async Task<HttpResponseMessage> UpdateDipendente ([FromBody] Dipendenti selectedDipendente)
        //{
        //    Dipendenti savedOnDbDipendenti = _context.Dipendenti.Find(selectedDipendente.Id);
        //    if (savedOnDbDipendenti == null)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.BadRequest);
        //    }

        //    else
        //    {
        //        savedOnDbDipendenti.Nome = selectedDipendente.Nome;
        //        savedOnDbDipendenti.Cognome = selectedDipendente.Cognome;
        //        savedOnDbDipendenti.Sede = selectedDipendente.Sede;
        //        savedOnDbDipendenti.CodiceTeam = selectedDipendente.CodiceTeam;
        //        await _context.SaveChangesAsync();
        //        return Request.CreateResponse(HttpStatusCode.OK);
        //    }


        //}


    }
}