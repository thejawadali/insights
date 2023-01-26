import React from "react";
import { useRouter } from 'next/router'
import { timeDifference } from "../logic/utils";

function BasePost({post}: any) {
  const router = useRouter()

  return (
    <article onClick={() => router.push(`/posts/${post.slug}`)} className="flex flex-col md:flex-row my-7 w-[48rem]">
      {/* Featured image */}
      <img
        src={post.featuredImage.url}
        alt="img"
        className="cursor-pointer w-full md:w-72 md:h-full object-cover h-52 sm:h-80 rounded-sm"
        />
      <div className="flex flex-col mt-4 md:mt-0 md:ml-5  flex-1">
        {/* category */}
        <a className="text-gray-600 inline-block hover:underline cursor-pointer">
          #{post.categories[0].name}
        </a>
        {/* title */}
        <h1 className="font-semibold md:text-lg capitalize hover:underline cursor-pointer w-full max-h-24">
          {post.title}
        </h1>
        <footer className="my-2 flex items-center text-sm justify-between text-gray-600 mr-4">
          <div className="flex items-center gap-x-3">
            {/* user profile pic */}
            <img
              src={post.author.photo.url}
              alt="profile photo"
              className="w-8 h-8  cursor-pointer object-cover"
            />
            {/* user name */}
            <p className="text-gray-700 text-sm hover:underline cursor-pointer">{post.author.name}</p>
          </div>
          {/* time stamp */}
          <p className="text-gray-500 text-xs">{timeDifference(post.createdAt)}</p>
        </footer>
      </div>
    </article>
  );
}

export default BasePost;
