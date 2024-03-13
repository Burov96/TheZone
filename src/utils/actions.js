"use server";
import slugify from "slugify";
import { connectToDatabase } from "./connection";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";

export const addPost = async (formData, path) => {
  const { title, description, image, userId } = Object.fromEntries(formData);
  const slug = slugify(title, "_", { lower: true });
  const post = {
    title,
    description,
    slug,
    image,
    userId,
  };
  try {
    // console.log(post);
    connectToDatabase();
    const newPost = new Post({ post });
    await newPost.save();
    toast.success("Post added successfully!");
    revalidatePath(path);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const deletePost = async (formData, path) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDatabase();
    await Post.findByIdAndDelete(id);
    toast.success("Post deleted successfully!");
    revalidatePath(path);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogin = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      username,
      password,
    });
    console.log("Logged in successfully!");
    return "Logged in successfully!";
  } catch (error) {
    return error.message;
  }
};

export const register = async (formData) => {
  const { username, email, password, repass } = Object.fromEntries(formData);
  if (password !== repass) {
    // toast("Passwords do not match!");
    return "Passwords do not match!";
  }
  try {
    connectToDatabase();
    const user = await User.findOne({ email: email });
    if (user) {
      // toast("User already exists!");
      return "User already exists!";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    //   toast.success("User created successfully!");
    return "User created successfully!";
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
