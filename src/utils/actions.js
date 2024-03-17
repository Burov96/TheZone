"use server";
import slugify from "slugify";
import { connectToDatabase } from "./connection";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { getUsers } from "./data";

export const addPost = async (formData, path) => {
  const { title, description, image } = Object.fromEntries(formData);
  const slug = slugify(title, "_", { lower: true });
  const session = await auth();
  const CURRENT_USER = session.user.name;
  const users = await getUsers();
  const userId = users
    .find((user) => user.username === CURRENT_USER)
    ._id.toString();
  const post = {
    title,
    description,
    slug,
    image,
    userId,
  };
  // console.log(Object.entries(post));
  try {
    connectToDatabase();
    const newPost = new Post(post);
    await newPost.save();
    revalidatePath(path);
    return "Post added successfully!";
  } catch (err) {
    console.log(err);
    // throw new Error(err);
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
  await signOut();
  // toast.success("Successfully logged out!");
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogin = async (username, password) => {
  try {
    const response = await signIn("credentials", { username, password });
    console.log("response before return:" + response);
    return { success: response };
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      console.log("Returning: " + error);
      return { error: "Invlaid username or password!" };
    }
  } finally {
    return { success: "Welcome back!" };
  }
};

export const register = async (username, email, password, repass, img) => {
  if (password !== repass) {
    // toast("Passwords do not match!");
    return { error: "Passwords do not match!" };
  }
  try {
    connectToDatabase();
    const user = await User.findOne({ username });
    if (user) {
      // toast("User already exists!");
      return { error: "User already exists!" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    //   toast.success("User created successfully!");
    return { success: "User created successfully!" };
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};
