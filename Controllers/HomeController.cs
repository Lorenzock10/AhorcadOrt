using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Ahorcado.Models;

namespace Ahorcado.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
{
    PalabrasAhorcado palabrasAhorcado = new PalabrasAhorcado();

    string palabra = palabrasAhorcado.ObtenerPalabra();

    ViewBag.palabra = palabra;

    return View("Index");
}

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
