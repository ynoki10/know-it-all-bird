import Button from '@/components/Button';
import { pageState } from '@/globalStates/pageState';
import { resultState } from '@/globalStates/resultState';
import { wordState } from '@/globalStates/wordState';
import Image from 'next/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Result = () => {
  const word = useRecoilValue(wordState);
  const result = useRecoilValue(resultState);
  const setPage = useSetRecoilState(pageState);

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-900">{word}</h2>
      <Image
        alt="文鳥さんのイラスト"
        src="/bird_bunchou_white.png"
        className={'mx-auto'}
        width={140}
        height={140}
      />
      <p className={'rounded-md border border-e-gray-600 p-2'}>{result}</p>
      <Button text="もう一回" onClick={() => setPage('input')} />
    </>
  );
};

export default Result;
