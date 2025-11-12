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
    <div className="p-8 max-w-6xl mx-auto h-full">
      <PageTitle title="Blog" />
      <h1 className="text-3xl font-bold mb-8 text-center text-[#3B3A30]">
        Blog
      </h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-[#4A4A3F] hover:bg-[#5A5A4F] rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border-4 border-[#C2B69C]"
            >
              <h2 className="text-2xl font-bold mb-3 text-[#EEE6D8]">
                {post.title}
              </h2>
              <p className="text-[#D4C9B3] leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
