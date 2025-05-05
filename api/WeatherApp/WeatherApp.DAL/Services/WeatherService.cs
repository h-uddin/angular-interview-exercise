using WeatherApp.Core.Entities;
using WeatherApp.Core.Interfaces;

namespace WeatherApp.DAL.Services;

public class WeatherService : IWeatherService
{
    private readonly IWeatherRepository _repository;

    public WeatherService(IWeatherRepository repository)
    {
        _repository = repository;
    }

    public Task<List<Station>> GetStationsAsync()
        => _repository.GetStationsAsync();

    public Task<decimal?> GetTemperatureCelsiusAsync(string stationId)
        => _repository.GetTemperatureCelsiusAsync(stationId);
}
