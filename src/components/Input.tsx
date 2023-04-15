import { Switch } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoRefresh } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';

import Button from '@/components/Button';
import { firstWords, secondWords } from '@/constant/words';
import { isLoadingState } from '@/globalStates/isLoadingState';
import { pageState } from '@/globalStates/pageState';
import { resultState } from '@/globalStates/resultState';
import { wordState } from '@/globalStates/wordState';
import useSubmitWord from '@/hooks/useSubmitWord';

const Input = () => {
  const { submitWord } = useSubmitWord();
  const setPage = useSetRecoilState(pageState);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const setResult = useSetRecoilState(resultState);
  const setWord = useSetRecoilState(wordState);
  const [isFreeInput, setIsFreeInput] = useState(false);
  const [displayFirstWords, setDisplayFirstWords] = useState(
    firstWords.sort(() => Math.random() - Math.random()).slice(0, 4),
  );
  const [displaySecondWords, setDisplaySecondWords] = useState(
    secondWords.sort(() => Math.random() - Math.random()).slice(0, 4),
  );
  const [firstWordNum, setFirstWordNum] = useState<number | null>(null);
  const [secondWordNum, setSecondWordNum] = useState<number | null>(null);

  const refreshWords = () => {
    setDisplayFirstWords(firstWords.sort(() => Math.random() - Math.random()).slice(0, 4));
    setDisplaySecondWords(secondWords.sort(() => Math.random() - Math.random()).slice(0, 4));
    setFirstWordNum(null);
    setSecondWordNum(null);
  };

  const selectedWord = `${firstWordNum !== null ? displayFirstWords[firstWordNum] : ''}${
    secondWordNum !== null ? displaySecondWords[secondWordNum] : ''
  }`;
  const [inputWord, setInputWord] = useState('');

  const onFreeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  const canSubmit = isFreeInput
    ? inputWord.length >= 4 && inputWord.length <= 12
    : firstWordNum !== null && secondWordNum !== null;

  const onClick = () => {
    const word = isFreeInput ? inputWord : selectedWord;
    setIsLoading(true);
    setPage('thinking');
    setWord(word);

    const handleSubmit = async () => {
      try {
        const result = await submitWord(word);
        setResult(result);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    void handleSubmit();
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-900">
        どんなことわざについて
        <br />
        知りたいですか？
      </h2>
      <Image
        alt="文鳥さんのイラスト"
        src="/bird_bunchou_white.png"
        className={'mx-auto'}
        width={140}
        height={140}
      />
      <div>
        <div className="flex gap-7">
          <div className="flex w-full flex-col gap-y-4">
            {displayFirstWords.map((word, index) => (
              <button
                key={word}
                type="button"
                onClick={() => {
                  setFirstWordNum(index);
                }}
                className={`flex w-full cursor-pointer items-center justify-center rounded-full border-0 py-2 text-sm font-bold ${
                  firstWordNum === index ? 'bg-buttonSelected' : 'bg-buttonGray'
                }`}
              >
                {word}
              </button>
            ))}
          </div>
          <div className="flex w-full flex-col gap-y-4">
            {displaySecondWords.map((word, index) => (
              <button
                key={word}
                type="button"
                onClick={() => {
                  setSecondWordNum(index);
                }}
                className={`flex w-full cursor-pointer items-center justify-center rounded-full border-0 py-2 text-sm font-bold ${
                  secondWordNum === index ? 'bg-buttonSelected' : 'bg-buttonGray'
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={refreshWords}
          className={'ml-auto mt-4 grid h-6 w-6 place-items-center rounded-md bg-slate-200'}
        >
          <IoRefresh />
        </button>
      </div>
      <div>
        {isFreeInput ? (
          <>
            <input
              className="::placeholder:text-gray-600 ::placeholder:opacity-100 block mb-2 w-full rounded border border-gray-400 px-4 py-3 text-center text-base leading-6 text-gray-800"
              type="text"
              name="prompt"
              placeholder=""
              value={inputWord}
              onChange={onFreeInputChange}
            />
            {inputWord && (inputWord.length < 4 || inputWord.length > 12) && (
              <p className={'text-center text-xs text-red-700 '}>4~12文字で入力してください</p>
            )}
          </>
        ) : (
          <p className="mb-2 w-full rounded border border-gray-400 px-4 py-3 text-center text-base leading-6 text-gray-800">
            <span className={'inline-block min-h-[1em]'}>{selectedWord}</span>
          </p>
        )}
        <Switch.Group as="div" className="flex items-center justify-end">
          <Switch
            checked={isFreeInput}
            onChange={setIsFreeInput}
            className={`${
              isFreeInput ? 'bg-green-500' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                isFreeInput ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 rounded-full bg-white transition`}
            />
          </Switch>
          <Switch.Label className="ml-1 text-sm">自由に入力する</Switch.Label>
        </Switch.Group>
      </div>

      <Button text="文鳥さんに聞いてみる" onClick={onClick} disabled={!canSubmit} />
    </>
  );
};

export default Input;
