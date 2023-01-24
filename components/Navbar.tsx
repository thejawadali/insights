import Link from "next/link";
import React from "react";

function Navbar({ children }: any) {
  return (
    <div>
      <nav className="bg-gray-800 fixed top-0 z-30 right-0 left-0 h-12 flex md:justify-center items-center px-5">
        <form className="left-5 hidden md:flex justify-between items-center pr-2 pl-3 py-1 absolute bg-gray-700">
          {/* search */}
          <svg
            className="w-3.5 h-3.5"
            fill="#aaa"
            xmlns="https://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 40 40"
          >
            <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Search"
            className="outline-none mx-1 text-md bg-transparent w-80 text-sm text-white"
          />
        </form>
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer text-white mr-8">
            NextJS Blogs
          </h1>
        </Link>
      </nav>
      <div className="mt-14">{children}</div>
    </div>
  );
}

export default Navbar;
