import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import Button from '@/components/Button';
import { pageState } from '@/globalStates/pageState';

const Top = () => {
  const setPage = useSetRecoilState(pageState);
  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-900">ことわざにくわしい文鳥さん</h2>
      <Image
        alt="文鳥さんのイラスト"
        src="/bird_bunchou_white.png"
        className={'mx-auto'}
        width={140}
        height={140}
        priority={true}
      />
      <p className="w-full">
        ことわざにくわしい文鳥さんにことわざについて教えてもらいましょう。
        <br />
        文鳥さんはどんなことわざでも知っています。
      </p>
      <Button text="はじめる" onClick={() => setPage('input')} />
    </>
  );
};

export default Top;
