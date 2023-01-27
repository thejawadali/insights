import Head from "next/head";
import React from "react";
import dayjs from "dayjs";
import { getPostDetails, getPostsSlugs } from "../../services/post";
import { RichText } from "@graphcms/rich-text-react-renderer";

const renderers = {
  a: ({ children }: any) => (
    <a className="my-1 text-blue-600 hover:underline cursor-pointer">
      {children}
    </a>
  ),
  h1: ({ children }: any) => (
    <h1 className="mb-4 text-2xl text-gray-900 font-semibold">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h1 className="mb-4 text-2xl text-gray-900 font-semibold">{children}</h1>
  ),
  h3: ({ children }: any) => <h3 className="text-xl">{children}</h3>,
  h4: ({ children }: any) => <h3 className="text-xl">{children}</h3>,
  h5: ({ children }: any) => <h3 className="text-lg">{children}</h3>,
  h6: ({ children }: any) => <h3 className="text-lg">{children}</h3>,
  p: ({ children }: any) => (
    <p className="my-4 leading-7 text-md text-gray-700">{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside my-4 text-lg text-gray-700">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside my-4 text-lg text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="my-2 text-lg text-gray-700">{children}</li>
  ),
  code: ({ children }: any) => (
    <code className="bg-gray-100 rounded-md p-1 text-sm text-gray-700">
      {children}
    </code>
  ),
  code_block: ({ children }: any) => (
    <pre className="bg-gray-100 overflow-y-scroll rounded-mdp-2 text-smtext-lg text-gray-700">
      {children}
    </pre>
  ),
  img: ({ src }: any) => <img src={src} alt="img" className="mx-auto my-3" />,
};

function SinglePost({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <div className="!mt-20 mb-10 w-11/12 lg:w-3/4 mx-auto">
        {/* date and tag */}
        <p className="text-sm text-gray-600 font-semibold">
          {dayjs(post.createdAt).format("MMMM D, YYYY")} / {/* category */}
          <a>
            #{post.categories[0].name}
          </a>
        </p>
        {/* title */}
        <h1 className="mb-3 text-3xl md:text-5xl font-semibold capitalize">
          {post.title}
        </h1>
        {/* author */}
        <div className="flex items-center">
          <img src={post.author.photo.url} className="w-14 h-14" />
          <p className="mx-3 text-lg font-semibold">
            {post.author.name}
          </p>
        </div>
        {/* Featured Image */}
        <img
          src={post.featuredImage.url}
          alt="img"
          className="cursor-pointer w-full object-cover my-5 h-auto max-h-[50rem] rounded-sm"
        />
        {/* content */}
        <RichText content={post.content.raw} renderers={renderers} />
      </div>
    </>
  );
}

export default SinglePost;

export async function getStaticProps({ params }: any) {
  const data = await getPostDetails(params.id);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPostsSlugs();
  const paths = posts.map((post: any) => ({
    params: { id: post.slug.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
