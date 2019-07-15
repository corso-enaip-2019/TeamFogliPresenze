using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebAppPresenze.Controllers
{
    public abstract class BaseController : ApiController
    {
        protected WebAppPresenzeEntities _context;

        public BaseController()
        {
            _context = WebAppPresenzeEntities.Instance;
        }
    }
}