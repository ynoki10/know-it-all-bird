import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoadingSpinner from '@/components/LoadingSpinner';
import Top from '@/components/Top';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

export type Page = 'top' | 'input' | 'thinking' | 'result';

const Home: NextPage = () => {
  const [page, setPage] = useState<Page>('top');
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
    <div className="flex min-h-screen max-w-xl mx-auto flex-col items-center justify-between">
      <Head>
        <title>ことわざにくわしい文鳥さん</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="text-base leading-6 text-gray-800 flex flex-col items-center py-16 max-w-lg gap-y-7">
        {page === 'top' && <Top setPage={setPage} />}
        {page === 'input' && (
          <>
            <form className="w-full flex flex-col" onSubmit={onSubmit}>
              <input
                className="w-full text-base leading-6 text-gray-800 rounded mb-2 px-4 py-3 border border-gray-400 ::placeholder:text-gray-600 text-center ::placeholder:opacity-100"
                type="text"
                name="prompt"
                placeholder="好きなことわざを入力するッピ！"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
              />
              <button
                className="flex items-center justify-center gap-1 w-full mt-4 text-white bg-teal-600 rounded text-center cursor-pointer py-3 border-0 disabled:bg-gray-400 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading || !isInputValid(promptInput)}
              >
                {isLoading && <LoadingSpinner />}
                {isLoading ? '文鳥さんが考えています...' : '意味を教えてもらう'}
              </button>
            </form>
            <section className="mt-10 w-full">
              <h4 className={'text-center font-bold'}>文鳥さんのこたえ</h4>
              <p
                className="mt-2 border p-4 min-h-[300px] text-sm"
                dangerouslySetInnerHTML={{ __html: nl2br(result) }}
              ></p>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
