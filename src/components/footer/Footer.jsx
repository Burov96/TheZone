import Link from "next/link";

function Footer() {
  return (
    <footer className="text-center text-gray-600 my-8">
      <p>&copy; 2024 The Zone. All rights reserved.</p>
      <div className="mt-4">
        <Link href="/about">
          <h3 className="py-3 mr-4 hover:underline">About Us</h3>
        </Link>
        <Link href="/contact">
          <h3 className="hover:underline">Contact Us</h3>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
