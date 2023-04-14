import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Result from '@/components/Result';
import Thinking from '@/components/Thinking';
import Top from '@/components/Top';
import { pageState } from '@/globalStates/pageState';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';

const Home: NextPage = () => {
  const page = useRecoilValue(pageState);

  return (
    <div className="flex min-h-screen max-w-xl mx-auto flex-col items-center justify-between">
      <Head>
        <title>ことわざにくわしい文鳥さん</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="text-base leading-6 text-gray-800 flex flex-col py-8 w-full gap-y-5 px-4">
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
