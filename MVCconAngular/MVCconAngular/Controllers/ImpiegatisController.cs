using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DataProva;

namespace MVCconAngular.Controllers
{
    public class ImpiegatisController : Controller
    {
        private TestwebappEntities db = new TestwebappEntities();

        // GET: Impiegatis
        public ActionResult Index()
        {
            return View(db.Impiegatis.ToList());
        }

        // GET: Impiegatis/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Impiegati impiegati = db.Impiegatis.Find(id);
            if (impiegati == null)
            {
                return HttpNotFound();
            }
            return View(impiegati);
        }

        // GET: Impiegatis/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Impiegatis/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Surname,Age")] Impiegati impiegati)
        {
            if (ModelState.IsValid)
            {
                db.Impiegatis.Add(impiegati);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(impiegati);
        }

        // GET: Impiegatis/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Impiegati impiegati = db.Impiegatis.Find(id);
            if (impiegati == null)
            {
                return HttpNotFound();
            }
            return View(impiegati);
        }

        // POST: Impiegatis/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Surname,Age")] Impiegati impiegati)
        {
            if (ModelState.IsValid)
            {
                db.Entry(impiegati).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(impiegati);
        }

        // GET: Impiegatis/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Impiegati impiegati = db.Impiegatis.Find(id);
            if (impiegati == null)
            {
                return HttpNotFound();
            }
            return View(impiegati);
        }

        // POST: Impiegatis/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Impiegati impiegati = db.Impiegatis.Find(id);
            db.Impiegatis.Remove(impiegati);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
