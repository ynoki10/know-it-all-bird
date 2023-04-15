import Head from 'next/head';
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
  setVhCssVar();

  return (
    <div className="mx-auto flex min-h-[calc(var(--vh-full))] max-w-xl flex-col items-center justify-between">
      <Head>
        <title>ことわざにくわしい文鳥さん</title>
        <link rel="icon" href="/favicon.ico" />
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
