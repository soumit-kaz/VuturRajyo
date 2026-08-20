import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import { getPosts, type Post } from "../services/api";

import { useEffect, useState } from "react";

function HomePage() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () =>
    {
      async function loadPosts()
      {
        try
        {
          const loadedPosts = await getPosts();
          setPosts(loadedPosts);
        }
        catch
        {
  
          setError("Failed to load posts.");

        }
        finally
        {

          setLoading(false);

        }
      }
      loadPosts();
    },
    []
  );

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Latest articles
          </h2>

          <p className="mt-2 text-slate-600">
            Explore our latest stories and ideas.
          </p>
        </div>

        {loading && 
        (
          <p className="text-slate-600">
            Loading articles...
          </p>
        )
        }
        {error && 
        (
          <p className="text-slate-600">
            {error}
          </p>
        )
        }
        {!loading && !error && posts.length > 0 && 
        (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                category={post.category}
                slug={post.slug}
                author={post.author}
                updatedAt={post.updatedAt}
              />
            ))}
          </div>
        )
        }
      </section>
    </main>
  );
}

export default HomePage;