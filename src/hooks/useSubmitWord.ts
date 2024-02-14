/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const useSubmitWord = () => {
  async function submitWord(word: string): Promise<string> {
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: word }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      return data.result as string;
    } catch (error: any) {
      console.error(error);
      alert(error.message);
      return 'エラーが発生しました';
    }
  }

  return { submitWord };
};

export default useSubmitWord;
