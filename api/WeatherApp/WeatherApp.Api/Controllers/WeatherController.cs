using Microsoft.AspNetCore.Mvc;
using WeatherApp.Core.Interfaces;

namespace WeatherApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherController : ControllerBase
{
    private readonly IWeatherService _weatherService;

    public WeatherController(IWeatherService weatherService)
    {
        _weatherService = weatherService;
    }

    [HttpGet("stations")]
    public async Task<IActionResult> GetStations()
        => Ok(await _weatherService.GetStationsAsync());

    [HttpGet("stations/{id}/temperature")]
    public async Task<IActionResult> GetTemperature(string id)
        => Ok(await _weatherService.GetTemperatureCelsiusAsync(id));
}
