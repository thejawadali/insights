import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BasePost from "../components/BasePostCard"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nextjs Blog</title>
      </Head>
      {/* posts */}
      <section className="w-full md:flex md:flex-col md:items-center px-5">
        <BasePost></BasePost>
        <BasePost></BasePost>
        <BasePost></BasePost>
        <BasePost></BasePost>
      </section>
    </div>
  );
};

export default Home;
