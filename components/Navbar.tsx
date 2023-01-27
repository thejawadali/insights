import Link from "next/link";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { searchPost } from "../services/post";
import { useRouter } from "next/router";

function Navbar({ children }: any) {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const debounce = (fn: any, delay: any) => {
    let timeoutId: any;

    return (...args: any) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  async function searchPostBySlug(slug: string) {
    setQuery(slug);
    if (!slug) {
      setPosts([]);
      return;
    }
    const fetchedPosts = await searchPost(slug);
    setPosts(fetchedPosts);
    console.log(posts);
  }

  const onInputChange = debounce(searchPostBySlug, 1000);

  return (
    <div>
      <nav className="bg-gray-800 fixed top-0 z-30 right-0 left-0 h-12 flex md:justify-center items-center px-5">
        <Combobox
          onChange={(slug) => {
            router.push(`/posts/${slug}`);
            setQuery("");
            setPosts([]);
          }}
        >
          <div className="left-5 hidden md:block pr-2 pl-3 py-1 absolute bg-gray-700">
            <div className="flex justify-between items-center">
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
              <Combobox.Input
                className="outline-none mx-1 text-md bg-transparent w-80 text-sm text-white"
                placeholder="Search"
                value={query}
                onChange={(event) => onInputChange(event.target.value)}
              />
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setPosts([])}
            >
              <Combobox.Options className="absolute mt-1 left-0 w-full overflow-auto bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {query !== "" && posts.length <= 0 ? (
                  <div className="relative cursor-default select-none py-2 pl-2 pr-4 text-white">
                    Nothing found.
                  </div>
                ) : (
                  posts.map((post: any) => (
                    <Combobox.Option
                      key={post.id}
                      className={({ active }) =>
                        `relative border-t border-gray-200 cursor-pointer select-none py-2 pl-2 pr-4 ${
                          active
                            ? "bg-gray-200 text-gray-700"
                            : " hover:text-gray-700 text-white hover:bg-gray-200"
                        }`
                      }
                      value={post.slug}
                    >
                      <span className="font-normal">{post.title}</span>
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
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
