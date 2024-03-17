import { getPost, getUser } from "@/utils/data";
import Image from "next/image";
import { Suspense } from 'react';

const SinglePostPage = async ({ params }) => {
  const { slug } = params; 

  try {
    const post = await getPost(slug);
    const author = await getUser(post.userId)


    return (
        <div className="container mx-auto py-12 px-4 md:px-8"> 
        <article className="prose max-w-none md:prose-lg">  
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

          {/* Main Image */}
          <figure className="mb-6"> 
            <Image
              src={post.img}
              alt={post.title}
              width={400}  
              height={400} 
              layout="responsive"
              className="rounded-md shadow-md" 
            />
          </figure>

          {/* Author and Date */}
          <div className="flex items-center gap-4 mb-4 ">
            {author && (
              <div className="flex items-center gap-2 space-y-20">
                <Image 
                  src={author.img} 
                  alt={author.username} 
                  width={32} 
                  height={32} 
                  className="rounded-full" 
                />
                <span className="font-medium ">{author.username}</span>
              </div>
            )}
            <p className="text-gray-600 text-sm">Posted on {post.createdAt.toLocaleDateString()}</p> 
          </div>

          {/* Post Body Content */}
          <div /> 

          {/* Comments Section */}
          <div className="mt-12"> 
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            {post.comments.length > 0 ? (
              <ul className="space-y-6">
                {post.comments.map((comment) => (
                  <li key={comment._id} className="border rounded-md p-4">
                    <div className="flex items-start gap-4">
                      {/* User Image (if available) */}
                      {comment.userId.img && (
                        <Image 
                          src={comment.userId.img} 
                          alt={comment.userId.username} 
                          width={32} 
                          height={32} 
                          className="rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="font-medium">
                          {comment.userId.username} 
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {comment.date}
                        </p>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No comments yet.</p>
            )}
          </div> 
        </article> 
      </div>
    );
  } catch (error) {
    console.log(error);
    <>
    <h3>Meme not found</h3>  
    <h6>Error: {error.message}</h6>
    </>}
};

export default SinglePostPage;
