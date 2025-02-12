using Microsoft.AspNetCore.Mvc;

namespace MixBurguer.Controllers
{
    public class CardapioController1 : Controller
    {
        public IActionResult Cardapio()
        {
            return View();
        }
    }
}
