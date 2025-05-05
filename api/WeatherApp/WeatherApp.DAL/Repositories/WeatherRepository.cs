using System.Net.Http.Json;
using WeatherApp.Core.Entities;
using WeatherApp.Core.Interfaces;
using WeatherApp.DAL.Models;

namespace WeatherApp.DAL.Repositories;

public class WeatherRepository : IWeatherRepository
{
    private readonly HttpClient _http;

    public WeatherRepository(HttpClient http)
    {
        _http = http;
        _http.DefaultRequestHeaders.UserAgent.ParseAdd("WeatherAppDemo/1.0 (+https://github.com/harisuddin)");
    }

    public async Task<List<Station>> GetStationsAsync()
    {
        var response = await _http.GetFromJsonAsync<WeatherGovStationResponse>(
            "https://api.weather.gov/stations?limit=100");

        return response?.Features?
            .Select(f => new Station
            {
                Id = f.Properties.StationIdentifier,
                Name = f.Properties.Name
            }).ToList() ?? new List<Station>();
    }

    public async Task<decimal?> GetTemperatureCelsiusAsync(string stationId)
    {
        var response = await _http.GetFromJsonAsync<ObservationResponse>(
            $"https://api.weather.gov/stations/{stationId}/observations?limit=1");

        return response?.Features?.FirstOrDefault()?.Properties?.Temperature?.Value;
    }
}
