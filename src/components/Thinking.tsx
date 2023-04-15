import Image from 'next/image';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { isLoadingState } from '@/globalStates/isLoadingState';
import { pageState } from '@/globalStates/pageState';
import { wordState } from '@/globalStates/wordState';

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
      <div>
        <div className="relative mx-auto h-20 w-36">
          {isLoading ? (
            <>
              <Image
                alt=""
                src="/question.png"
                className={
                  'absolute bottom-0 left-0 block h-auto w-14 rotate-[-20deg] animate-blink [animation-delay:1s]'
                }
                width={251}
                height={344}
              />
              <Image
                alt=""
                src="/question.png"
                className={
                  'absolute bottom-0 right-6 block h-auto w-14 rotate-[15deg] animate-blink'
                }
                width={251}
                height={344}
              />
            </>
          ) : (
            <Image
              alt=""
              src="/hirameki.png"
              className={'absolute left-5 top-0 block h-auto w-14'}
              width={357}
              height={469}
            />
          )}
        </div>
        <Image
          alt="文鳥さんのイラスト"
          src="/bird_bunchou_white.png"
          className={'mx-auto'}
          width={140}
          height={140}
        />
      </div>
      <div>
        <p className="mt-4 text-center text-sm font-bold">文鳥さんが一生懸命考えています</p>
        <p className="mt-4 text-center text-xs">※10秒弱かかります🙏</p>
      </div>
    </>
  );
};

export default Thinking;
