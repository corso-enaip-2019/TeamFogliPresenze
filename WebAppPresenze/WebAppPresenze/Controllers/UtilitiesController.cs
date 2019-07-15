using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace WebAppPresenze.Controllers
{
    [RoutePrefix("api")]
    [Authorize]
    public class UtilitiesController : BaseController
    {
        [HttpGet]
        [Route("currentUser")]
        public string GetCurrentUser()
        {
            return User.Identity.Name;
        }
    }
}