import { useParams } from "react-router-dom";

function PostPage() {
  const { slug } = useParams();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-indigo-600">
        Article
      </p>

      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        {slug}
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        This is the article page. Later, we will load the actual article
        from our .NET backend.
      </p>
    </main>
  );
}

export default PostPage;