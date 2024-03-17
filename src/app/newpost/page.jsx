import { addPost } from "@/utils/actions";
import { auth } from "@/utils/auth";
import { getUser, getUsers } from "@/utils/data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function newPost() {

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>

      <form action={addPost}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">
            Title
          </label>
          <input
          placeholder="My Awesome Post"
            type="text"
            id="title"
            name="title"
            required
            minLength="15"
            className="w-full border border-gray-300 p-2 rounded-md"
            title="Title must be at least 15 characters with letters, numbers, and spaces"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-2">
            Description
          </label>
          <textarea
          placeholder="Write your post description here..."
            type="text"
            required
            minLength="50"
            id="description"
            name="description"
            className="w-full border border-gray-300 p-2 rounded-md"
            rows="5"
            title="Description must be at least 50 characters" 
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 mb-2">
            Image URL
          </label>
          <input
          placeholder="https://i.imgur.com/dankMemes.jpeg"
            type="url"
            id="image"
            name="image"
            className="w-full border border-gray-300 p-2 rounded-md"
            pattern="(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)[^\s]*)"
            title="Please enter a valid image URL (http or https)" 
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default newPost;
