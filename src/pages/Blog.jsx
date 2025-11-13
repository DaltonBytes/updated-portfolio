import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const posts = [
  {
    id: "post1",
    title: "My First Blog Post",
    excerpt: "Hello! This is my first blog post about my projects and hobbies.",
  },
  {
    id: "post2",
    title: "Another Post",
    excerpt: "Another exciting project I worked on recently...",
  },
  {
    id: "post3",
    title: "Another First Blog Post",
    excerpt: "This is me talking about all my coding. Whoo!!",
  },
];

export default function Blog() {
  return (
    <section className="bg-[#1E2320] grow pt-28 pb-24 px-8 max-w-6xl mx-auto">
      <PageTitle title="Blog" />
      <h1 className="text-center text-4xl font-semibold text-[#E8DCC2] mb-16">
        {" "}
        Blog{" "}
      </h1>
      <div className="space-y-10 max-w-4xl mx-auto">
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="
                block rounded-xl border border-[#0F1315]
                bg-[#34372E] p-6 shadow-[6px_6px_0_#0F1315]
                hover:bg-[#3F4337] hover:shadow-[0_0_12px_#3F4337]
                transition-all
              "
            >
              <h2 className="text-2xl font-semibold text-[#E8DCC2] mb-2">
                {post.title}
              </h2>

              <p className="text-[#C5C6B3] leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
