import React from "react";
import { useRouter } from 'next/router'

function BasePost() {
  const router = useRouter()
  const imgURL =
    "https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/cover-template--10-.png";

  const profileURL =
    "https://www.freecodecamp.org/news/content/images/size/w30/2022/06/1654890413623.jpg";

  return (
    <article onClick={() => router.push("/posts/asf")} className="flex flex-col md:flex-row my-7 max-w-[48rem]">
      {/* Featured image */}
      <img
        src={imgURL}
        alt="img"
        className="cursor-pointer w-full md:w-72 md:h-full object-cover h-52 sm:h-80 rounded-sm"
        />
      <div className="flex flex-col mt-4 md:mt-0 md:ml-5  flex-1">
        {/* category */}
        <a className="text-gray-600 inline-block hover:underline cursor-pointer">
          #JavaScript
        </a>
        {/* title */}
        <h1 className="font-semibold md:text-lg capitalize hover:underline cursor-pointer w-full max-h-24">
          How to Submit a Form with JavaScript – JS Submit Button Example
        </h1>
        <footer className="my-2 flex items-center text-sm justify-between text-gray-600 mr-4">
          <div className="flex items-center gap-x-3">
            {/* user profile pic */}
            <img
              src={profileURL}
              alt="profile photo"
              className="w-8 h-8  cursor-pointer object-cover"
            />
            {/* user name */}
            <p className="text-gray-700 text-sm hover:underline cursor-pointer">User Name</p>
          </div>
          {/* time stamp */}
          <p className="text-gray-500 text-xs">3 Days ago</p>
        </footer>
      </div>
    </article>
  );
}

export default BasePost;
