import Hero from "../components/Hero";
import PostCard from "../components/PostCard";

function HomePage() {
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PostCard
            category="Development"
            title="Getting started with React"
            description="Learn the fundamental concepts behind modern React applications."
            author="Soumit"
            updatedAt="2026-08-18"
            slug="getting-started-with-react"
          />

          <PostCard
            category="Technology"
            title="Building better software"
            description="Practical principles for creating software that is easier to maintain."
            author="Upama"
            updatedAt="2026-08-11"
            slug="building-better-software"
          />

          <PostCard
            category="Career"
            title="Growing as a developer"
            description="A practical approach to continuously improving your engineering skills."
            author="Soumit"
            updatedAt="2026-07-29"
            slug="growing-as-a-developer"
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;