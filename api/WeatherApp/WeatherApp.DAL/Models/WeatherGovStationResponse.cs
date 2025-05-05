namespace WeatherApp.DAL.Models;

public class WeatherGovStationResponse
{
    public List<Feature> Features { get; set; }
}

public class Feature
{
    public StationProperties Properties { get; set; }
}

public class StationProperties
{
    public string StationIdentifier { get; set; }
    public string Name { get; set; }
}
