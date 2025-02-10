using Microsoft.AspNetCore.Mvc;

namespace MixBurguer.Controllers
{
    public class CardapioController : Controller
    {
        public IActionResult Cardapio()
        {
            return View();
        }
    }
}
