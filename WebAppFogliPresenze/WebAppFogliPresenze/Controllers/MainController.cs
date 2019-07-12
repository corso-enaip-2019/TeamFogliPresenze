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

        [HttpGet]
        [Route("getUserIdentity")]
        public string getUserIdentity()
        {
            return User.Identity.Name;

        }


        [HttpGet]
        [Route("getFogliPresenze")]
        public async Task<List<FogliPresenze>> GetFogliPresenze(int id)
        {
            return await _context.FogliPresenze
                .Where(f => f.DipendenteId == id).ToListAsync();
        }

    }
}