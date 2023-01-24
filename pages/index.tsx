import type { NextPage } from "next";
import Head from "next/head";
import BasePost from "../components/BasePostCard";
import { getPosts } from "../services/post";

const Home: NextPage = ({ posts }: any) => {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Nextjs Blog</title>
      </Head>
      {/* posts */}
      <section className="w-full md:flex md:flex-col md:items-center px-5">
        {posts.map((post: any) => (
          <BasePost key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { posts } = await getPosts();
  return {
    props: { posts },
  };
}
