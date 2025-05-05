using WeatherApp.Core.Entities;

namespace WeatherApp.Core.Interfaces;

public interface IWeatherRepository
{
    Task<List<Station>> GetStationsAsync();
    Task<decimal?> GetTemperatureCelsiusAsync(string stationId);
}
