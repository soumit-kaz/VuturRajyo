using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using BackEnd.Services;

namespace BackEnd.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PostsController : ControllerBase
{
    private readonly PostService _postService;

    public PostsController(PostService postService)
    {
        _postService = postService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var posts = _postService.GetAllAsync().Result;
        return Ok(posts);
    }

    [HttpGet("{slug}")]
    public IActionResult GetBySlug(string slug)
    {
        var post = _postService.GetBySlugAsync(slug).Result;

        if (post == null)
        {
            return NotFound();
        }

        return Ok(post);
    }
}
