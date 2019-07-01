using DataProva;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MVCconAngular.Controllers
{
    public class BaseController : ApiController
    {
        protected readonly TestwebappEntities _context;

        protected BaseController()
        {
            _context = new TestwebappEntities();
        }
    }
}