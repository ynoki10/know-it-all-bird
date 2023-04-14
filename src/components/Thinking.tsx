import { isLoadingState } from '@/globalStates/isLoadingState';
import { pageState } from '@/globalStates/pageState';
import { wordState } from '@/globalStates/wordState';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Thinking = () => {
  const word = useRecoilValue(wordState);
  const isLoading = useRecoilValue(isLoadingState);
  const setPage = useSetRecoilState(pageState);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setPage('result');
      }, 1000);
    }
  }, [isLoading, setPage]);

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-900">{word}</h2>
      <p className="text-center">{isLoading ? '考え中...' : '分かった！'}</p>
      <Image
        alt="文鳥さんのイラスト"
        src="/bird_bunchou_white.png"
        className={'mx-auto'}
        width={140}
        height={140}
      />
      <p className="text-sm text-center mt-4">※10~20秒くらいかかります🙏</p>
    </>
  );
};

export default Thinking;
