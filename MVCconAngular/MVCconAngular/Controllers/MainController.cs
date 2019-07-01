using DataProva;
using System.Data.Entity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Net;
using System.Net.Http;

namespace MVCconAngular.Controllers
{
    [Authorize]
    [RoutePrefix("Api")]
    public class MainController : BaseController
    {
        [HttpGet]
        [Route("getEmployees")]
        public async Task<List<Impiegati>> GetEmployees()
        {
            return await _context.Impiegatis.ToListAsync();
        }

        [HttpPost]
        [Route("insertEmployee")]
        public async Task<HttpResponseMessage> InsertEmployee([FromBody]Impiegati selectedEmployee)
        {
            if (selectedEmployee == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            else
            {
                _context.Impiegatis.Add(selectedEmployee);
                await _context.SaveChangesAsync();
                return Request.CreateResponse(HttpStatusCode.OK);
            }
        }

        [HttpPost]
        [Route("deleteEmployee")]
        public async Task<HttpResponseMessage> DeleteEmployee([FromBody]int id)
        {
            Impiegati savedOnDbEmployee = _context.Impiegatis.SingleOrDefault(i => i.Id == id);
            if (savedOnDbEmployee == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            _context.Impiegatis.Remove(savedOnDbEmployee);
            await _context.SaveChangesAsync();
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpPut]
        [Route("updateEmployee")]
        public async Task<HttpResponseMessage> UpdateEmployee([FromBody]Impiegati selectedEmployee)
        {
            Impiegati savedOnDbEmployee = _context.Impiegatis.Find(selectedEmployee.Id);
            if (savedOnDbEmployee == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            else
            {
                savedOnDbEmployee.Name = selectedEmployee.Name;
                savedOnDbEmployee.Surname = selectedEmployee.Surname;
                savedOnDbEmployee.Sede = selectedEmployee.Sede;
                savedOnDbEmployee.Codice = selectedEmployee.Codice;
                await _context.SaveChangesAsync();
                return Request.CreateResponse(HttpStatusCode.OK);
            }
        }

    }
}