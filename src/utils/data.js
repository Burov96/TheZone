
import { connectToDatabase } from "./connection";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    await connectToDatabase(); 
    const posts = await Post.find()
                            .populate('author', 'username img')
                            .populate('likes', 'username img')
    return posts;
  } catch (error) {
    console.log(error);
    throw new error(error);
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDatabase();
    const post = await Post.findOne({ slug })
                            .populate('author', 'username img')
                            .populate('likes', 'username img')
                            .populate({
                              path: 'comments',
                              populate: { path: 'userId', select: 'username img' }
                            });    
    return post; 
  } catch (error) {
    console.log(error);
    throw new error("Failed to load the post...");
  }
};


export const getUser = async (id) => {
    try {
      await connectToDatabase(); 
      const user = await User.findById(id)
                             .populate('posts', 'title slug');
         return user;
     } catch (error) {
      console.log(error);
      throw new error("Failed to load the user...");
     }
  };
  
  export const getUsers = async () => {
    try {
      await connectToDatabase();
      const users = await User.find();
      return users;
    } catch (error) {
      console.log(error);
      throw new error("Failed to load the users...");
    }
  };
  