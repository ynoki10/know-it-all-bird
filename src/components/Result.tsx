import Image from 'next/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '@/components/Button';
import { pageState } from '@/globalStates/pageState';
import { resultState } from '@/globalStates/resultState';
import { wordState } from '@/globalStates/wordState';

function nl2br(str: string) {
  str = str.replace(/\r\n/g, '<br />');
  str = str.replace(/(\n|\r)/g, '<br />');
  return str;
}

const Result = () => {
  const word = useRecoilValue(wordState);
  const result = useRecoilValue(resultState);
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
      />
      <p
        className={'rounded-md border border-gray-600 p-2'}
        dangerouslySetInnerHTML={{ __html: nl2br(result) }}
      ></p>
      <Button text="もう一回" onClick={() => setPage('input')} />
    </>
  );
};

export default Result;
