import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

function NotFound() {
  return (
    <div
      className="
      bg-gray-100
      w-full
      h-screen
      flex-col flex
      justify-center
      items-center
    "
    >
      <div className="flex">
        <h1 className="text-6xl font-bold text-gray-900 px-5 border-r border-gray-300">
          404
        </h1>
        <div className="mx-5 flex flex-col">
          <h1 className="text-5xl font-bold text-gray-600 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-400 tracking-wider">
            We can not find what you are looking for
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="
        mt-10
        bg-gray-900
        text-white
        px-3
        py-2
        rounded-md
        hover:bg-gray-700
        active:bg-gray-900
      "
      >
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
