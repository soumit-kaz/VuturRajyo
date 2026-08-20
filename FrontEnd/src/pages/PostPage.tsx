import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug, type Post } from "../services/api";
import { toReadableDate } from "../helpers/DateTimeHelper";

function PostPage() {
  const { slug } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(
    () =>
    {
      async function fetchPost()
      {
        if (!slug)
        {
          setError("No article was requested.");
          setLoading(false);
          return;
        }

        setLoading(true);
        setError("");

        try
        {
          const loadedPost = await getPostBySlug(slug);
          setPost(loadedPost);
        }
        catch (err)
        {
          setError(err instanceof Error ? err.message : "Failed to fetch post.");
        }
        finally
        {
          setLoading(false);
        }
      }

      fetchPost();
    },
    [slug]
  );

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-indigo-600">
        {post.category}
      </p>

      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        {post.title}
      </h1>

      <p className="mt-4 text-sm text-slate-500">
        <span>{post.author} · </span>
        <time dateTime={post.updatedAt}>{toReadableDate(post.updatedAt)}</time>
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {post.content}
      </p>
    </main>
  );
}

export default PostPage;
