import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [promptInput, setPromptInput] = useState('');
  const [result, setResult] = useState();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      setPromptInput('');
    } catch (error: any) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-base leading-6 text-gray-800 flex flex-col items-center pt-16 max-w-sm">
        <h3 className="text-3xl leading-10 font-bold text-gray-900 mt-4 mb-10">
          ことわざを入力してください
        </h3>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <input
            className="text-base leading-6 text-gray-800 rounded mb-6 px-4 py-3 border border-gray-400 ::placeholder:text-gray-600 ::placeholder:opacity-100"
            type="text"
            name="prompt"
            placeholder="目玉の親父の衣替え"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input
            className="text-white bg-teal-600 rounded text-center cursor-pointer py-3 border-0"
            type="submit"
            value="ことわざを教えてもらう"
          />
        </form>
        <section className="mt-10">
          <h3>解説文</h3>
          <div>{result}</div>
        </section>
      </main>
    </div>
  );
};

export default Home;
