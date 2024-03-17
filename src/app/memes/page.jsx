import Link from 'next/link';
import { getPosts } from "@/utils/data";

export default async function AllPostsPage() {
  const posts = await getPosts();

  return (
        <div className="container mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-8">All memes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="border rounded-md p-4 shadow-md hover:scale-105 hover:border-4 transition-all">
            <Link href={`/memes/${post.slug}`}>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-t-md mb-3"
                />
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>

                <div className="flex items-center gap-2 mb-2">
                  {post.author && (
                    <>
                      <img
                        src={post.author.img}
                        alt={post.author.username}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-700">
                        {post.author.username}
                      </span>
                    </>
                  )}

                </div>

                <p className="text-gray-700 line-clamp-3">
                  {post.description.slice(0, 100)}...
                </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

