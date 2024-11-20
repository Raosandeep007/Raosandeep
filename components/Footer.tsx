import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto py-6 px-4 text-center text-gray-600 border-t border-[#eaeaea]">
      <p>
        &copy; {new Date().getFullYear()} Sandeep Yadav. All rights reserved.
      </p>
    </footer>
  );
}
