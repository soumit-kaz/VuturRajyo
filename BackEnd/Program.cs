using BackEnd.Services;
using BackEnd.Settings;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDb")
);
builder.Services.AddSingleton<PostService>();
builder.Services.AddCors(
    options =>
    {
        options.AddPolicy(
            "Frontend",
            policy =>
            {
                policy
                .WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod();
            }
        );
    }
);
builder.Services.AddControllers();

var app = builder.Build();
app.UseCors("Frontend");
app.UseHttpsRedirection();
app.MapControllers();
app.Run();