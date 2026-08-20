using BackEnd.Models;
using BackEnd.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BackEnd.Services;

public class PostService
{
    private readonly IMongoCollection<Post> _postsCollection;

    public PostService(IOptions<MongoDbSettings> mongoDbSettings)
    {
        var settings = mongoDbSettings.Value;

        var mongoClient = new MongoClient(settings.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(settings.DatabaseName);

        _postsCollection = mongoDatabase.GetCollection<Post>("posts");
    }

    public async Task<List<Post>> GetAllAsync()
    {
        return await _postsCollection
            .Find(_ => true)
            .ToListAsync();
    }

    public async Task<Post?> GetBySlugAsync(string slug)
    {
        return await _postsCollection
            .Find(post => post.Slug == slug)
            .FirstOrDefaultAsync();
    }
}