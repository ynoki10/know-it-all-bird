import { Page } from '@/pages';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setPage: Dispatch<SetStateAction<Page>>;
};

const Top = ({ setPage }: Props) => {
  return (
    <>
      <h2 className="text-3xl leading-10 font-bold text-gray-900">ことわざにくわしい文鳥さん</h2>
      <Image
        alt="文鳥さんのイラスト"
        src="/bird_bunchou_white.png"
        className={'mx-auto'}
        width={200}
        height={200}
      />
      <p className="w-full">
        ことわざにくわしい文鳥さんにことわざについて教えてもらいましょう。
        <br />
        文鳥さんはどんなことわざでも知っています。
      </p>
      <button
        type="button"
        onClick={() => setPage('input')}
        className={
          'flex items-center justify-center w-full font-bold bg-accentOrange rounded-full text-white cursor-pointer py-3 border-0 transition-opacity hover:opacity-80'
        }
      >
        はじめる
      </button>
    </>
  );
};

export default Top;
