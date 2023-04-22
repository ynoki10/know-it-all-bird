import { useSetRecoilState } from 'recoil';

import { resultState } from '@/globalStates/resultState';

const useSubmitWord = () => {
  const setResult = useSetRecoilState(resultState);

  async function submitWord(word: string) {
    setResult('');
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: word,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = res.body;
    if (!data) {
      return;
    }
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setResult((prev) => prev + chunkValue);
    }
  }

  return { submitWord };
};

export default useSubmitWord;
