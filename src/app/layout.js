import "./globals.css";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import StoreProvider from "./StoreProvider";
import { auth } from "@/utils/auth";

export const metadata = {
  title: "The Zone",
  description: "Community-driven tutorials",
};

const RootLayout = async ({ children }) => {
  const session = await auth();


  return (
    <StoreProvider>
      <html lang="en">
        <body className="opacity-0 bg-black">
          <Navbar session={session}  />
          <div className="mt-40">
          { children }
          </div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
};

export default RootLayout;
