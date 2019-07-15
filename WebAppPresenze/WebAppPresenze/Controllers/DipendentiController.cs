using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Data.Entity;
using System.Threading.Tasks;

namespace WebAppPresenze.Controllers
{
    [RoutePrefix("api/dipendenti")]
    public class DipendentiController : BaseController
    {
        [HttpGet]
        [Route("lista")]
        public async Task<List<Dipendenti>> ListaDipendenti()
        {
            var dipendenti = await _context.Dipendenti.ToListAsync();

            return dipendenti;
        }
    }
}