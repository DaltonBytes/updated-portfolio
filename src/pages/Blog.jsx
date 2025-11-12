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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block bg-[#F7F1E5] hover:bg-[#F3EAD4] rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all p-6"
          >
            <h2 className="text-xl font-bold mb-2 text-[#3B3A30]">
              {post.title}
            </h2>
            <p className="text-[#4A4A3F]">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
