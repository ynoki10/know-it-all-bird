import Image from 'next/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '@/components/Button';
import ResultPanel from '@/components/ResultPanel';
import { pageState } from '@/globalStates/pageState';
import { wordState } from '@/globalStates/wordState';

const Result = () => {
  const word = useRecoilValue(wordState);
  const setPage = useSetRecoilState(pageState);

  // 任意の範囲の数字からランダムな数字を返す。2桁の数字を返す。1桁の数字は0をつける。
  const getRandomInt = (min: number, max: number) => {
    const random = Math.floor(Math.random() * (max + 1 - min)) + min;
    return random.toString().padStart(2, '0');
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-900">{word}</h2>
      <Image
        alt="文鳥さんのイラスト"
        src={`/result${getRandomInt(1, 7)}.png`}
        className={'mx-auto w-[140px]'}
        width={202}
        height={248}
        priority={true}
      />
      <ResultPanel />
      <Button text="もう一回" onClick={() => setPage('input')} />
    </>
  );
};

export default Result;
