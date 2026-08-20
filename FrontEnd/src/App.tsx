import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostCard from "./components/PostCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

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
            />

            <PostCard
              category="Technology"
              title="Building better software"
              description="Practical principles for creating software that is easier to maintain."
              author="Upama"
              updatedAt="2026-08-11"
            />

            <PostCard
              category="Career"
              title="Growing as a developer"
              description="A practical approach to continuously improving your engineering skills."
              author="Soumit"
              updatedAt="2026-07-29"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;