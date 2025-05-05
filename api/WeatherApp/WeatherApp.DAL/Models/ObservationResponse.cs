namespace WeatherApp.DAL.Models;

public class ObservationResponse
{
    public List<ObservationFeature> Features { get; set; }
}

public class ObservationFeature
{
    public ObservationProperties Properties { get; set; }
}

public class ObservationProperties
{
    public Temperature Temperature { get; set; }
}

public class Temperature
{
    public decimal? Value { get; set; }
}
