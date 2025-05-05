using WeatherApp.Core.Interfaces;
using WeatherApp.DAL.Repositories;
using WeatherApp.DAL.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register our services & repository
builder.Services.AddHttpClient<IWeatherRepository, WeatherRepository>();
builder.Services.AddScoped<IWeatherService, WeatherService>();

// Allow CORS for frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();

// Middleware
app.UseCors("AllowAll");
app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();

app.Run();
