import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import { pageState } from '@/globalStates/pageState';

const Footer = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <footer className="flex w-full flex-col items-center justify-center bg-palegreen pb-4 pt-2">
      <button
        type="button"
        className={'block'}
        onClick={() => {
          setPage('top');
        }}
      >
        <Image
          className={'block h-auto max-w-[128px]'}
          src={'/logo.png'}
          width={429}
          height={141}
          alt="kotowaza buncho-san"
        />
      </button>
      <p className={'mt-2 text-[15px] font-bold'}>
        By{' '}
        <a
          href="https://twitter.com/4noki10"
          target="_blank"
          className={'text-accentOrange underline'}
        >
          noki10
        </a>
      </p>
    </footer>
  );
};

export default Footer;
