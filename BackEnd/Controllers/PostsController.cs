using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PostsController : ControllerBase
{
    private static readonly List<Post> posts =
    [
        new Post
        {
            Id = 1,
            Title = "From Backend: Getting started with React",
            Slug = "getting-started-with-react",
            Category = "Development",
            Description = "Learn the fundamental concepts behind modern React applications.",
            Content = "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this article, we will explore the fundamental concepts behind modern React applications and how to get started with React development.",
            Author = "Soumit",
            UpdatedAt = "2026-08-18"
        },
        new Post
        {
            Id = 2,
            Title = "Building better software",
            Slug = "building-better-software",
            Category = "Technology",
            Description = "Practical principles for creating software that is easier to maintain.",
            Content = "Maintainable software is rarely the result of a single clever decision. It comes from small habits repeated over time: clear naming, small functions, honest error handling, and tests that describe intent. This article walks through the principles that keep a codebase pleasant to work in long after the first release.",
            Author = "Upama",
            UpdatedAt = "2026-08-11"
        },
        new Post
        {
            Id = 3,
            Title = "Growing as a developer",
            Slug = "growing-as-a-developer",
            Category = "Career",
            Description = "A practical approach to continuously improving your engineering skills.",
            Content = "Growth as a developer is less about chasing every new framework and more about deepening the fundamentals you already use every day. Read code written by people better than you, build things end to end, and treat every bug you fix as a lesson about the system you are working in.",
            Author = "Soumit",
            UpdatedAt = "2026-07-29"
        }
    ];

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(posts);
    }

    [HttpGet("{slug}")]
    public IActionResult GetBySlug(string slug)
    {
        var post = posts.FirstOrDefault(p => p.Slug == slug);

        if (post == null)
        {
            return NotFound();
        }

        return Ok(post);
    }
}

public class Post
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Slug { get; set; }
    public required string Category { get; set; }
    public required string Description { get; set; }
    public required string Content { get; set; }
    public required string Author { get; set; }
    public required string UpdatedAt { get; set; }
}
