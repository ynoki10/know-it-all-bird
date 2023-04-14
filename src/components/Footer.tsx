import { pageState } from '@/globalStates/pageState';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

const Footer = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <footer className="w-full bg-palegreen pt-2 pb-4 flex flex-col justify-center items-center">
      <button
        type="button"
        className={'block'}
        onClick={() => {
          setPage('top');
        }}
      >
        <Image
          className={'block max-w-[128px] h-auto'}
          src={'/logo.png'}
          width={429}
          height={141}
          alt="kotowaza buncho-san"
        />
      </button>
      <p className={'mt-2 font-bold text-[15px]'}>
        By{' '}
        <a
          href="https://twitter.com/4noki10"
          target="_blank"
          className={'underline text-accentOrange'}
        >
          noki10
        </a>
      </p>
    </footer>
  );
};

export default Footer;
