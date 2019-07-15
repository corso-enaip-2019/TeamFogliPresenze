using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebAppFogliPresenze.Controllers
{
    public class BaseController : ApiController 
    {
        protected readonly WebAppPresenzeEntities _context; 

        protected BaseController()
        {

            _context = new WebAppPresenzeEntities();
        }

    }
}