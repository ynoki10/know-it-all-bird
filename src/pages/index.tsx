import Head from 'next/head';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Result from '@/components/Result';
import Thinking from '@/components/Thinking';
import Top from '@/components/Top';
import setVhCssVar from '@/functions/setVhCssVar';
import { pageState } from '@/globalStates/pageState';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const page = useRecoilValue(pageState);
  useEffect(() => {
    setVhCssVar();
  }, []);

  return (
    <div className="mx-auto flex min-h-[calc(var(--vh-full))] max-w-xl flex-col items-center justify-between">
      <Head>
        <title>ことわざにくわしい文鳥さん</title>
        <meta
          name="description"
          content="ことわざにくわしい文鳥さんにことわざについて教えてもらいましょう。文鳥さんはどんなことわざでも知っています。"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://know-it-all-bird.vercel.app/" />
        <meta property="og:title" content="ことわざにくわしい文鳥さん" />
        <meta property="og:image" content="https://know-it-all-bird.vercel.app/ogp.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ことわざにくわしい文鳥さん" />
        <meta
          property="og:description"
          content="ことわざにくわしい文鳥さんにことわざについて教えてもらいましょう。文鳥さんはどんなことわざでも知っています。"
        />
      </Head>

      <Header />
      <main className="flex w-full flex-col gap-y-5 px-4 py-8 text-base leading-6 text-gray-800">
        {page === 'top' && <Top />}
        {page === 'input' && <Input />}
        {page === 'thinking' && <Thinking />}
        {page === 'result' && <Result />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
