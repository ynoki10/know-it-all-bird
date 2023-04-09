import LoadingSpinner from '@/components/LoadingSpinner';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Home: NextPage = () => {
  const [promptInput, setPromptInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nl2br = (str: string) => {
    str = str.replace(/\r\n/g, '<br />');
    str = str.replace(/(\n|\r)/g, '<br />');
    return str;
  };

  const isInputValid = (input: string) => {
    return input !== '' && input.length >= 5 && input.length <= 15 && input.match(/\S/g);
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: promptInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setIsLoading(false);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
      setIsLoading(false);
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-base leading-6 text-gray-800 flex flex-col items-center pt-16 max-w-lg">
        <h3 className="text-3xl leading-10 font-bold text-gray-900 mt-4 mb-5">
          ことわざにくわしい文鳥さん
        </h3>
        <form className="w-full flex flex-col" onSubmit={onSubmit}>
          <input
            className="w-full text-base leading-6 text-gray-800 rounded mb-2 px-4 py-3 border border-gray-400 ::placeholder:text-gray-600 text-center ::placeholder:opacity-100"
            type="text"
            name="prompt"
            placeholder="好きなことわざを入力するッピ！"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <Image
            alt="文鳥さんのイラスト"
            src="/bird_bunchou_white.png"
            className={'mx-auto'}
            width={200}
            height={200}
          />
          <button
            className="flex items-center justify-center gap-3 w-full mt-4 text-white bg-teal-600 rounded text-center cursor-pointer py-3 border-0 disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading || !isInputValid(promptInput)}
          >
            {isLoading && <LoadingSpinner />}
            {isLoading ? '文鳥さんが考えています...' : '文鳥さんに聞いてみる'}
          </button>
        </form>
        <section className="mt-10 w-full">
          <h4 className={'text-center font-bold'}>文鳥さんのこたえ</h4>
          <p
            className="mt-2 border p-4 min-h-[300px] text-sm"
            dangerouslySetInnerHTML={{ __html: nl2br(result) }}
          ></p>
        </section>
      </main>
    </div>
  );
};

export default Home;
