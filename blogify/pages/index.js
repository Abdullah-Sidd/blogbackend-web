import Head from 'next/head'
import Image from 'next/image'
import { BlogifyContext } from '../context/BlogifyContext';
import { useContext, useEffect } from 'react';
export default function Home() {

  // Because of the context we can easily use the posts data here that we get from the firebase in context folder.
  const posts = useContext(BlogifyContext);
    console.log(posts)
    return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline bg-pink-600 text-black">
      Hello world!
    </h1>
    </div>
  )
}
