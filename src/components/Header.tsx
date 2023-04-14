import { pageState } from '@/globalStates/pageState';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

const Header = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <header className="w-full bg-palegreen py-2 flex justify-center items-center">
      <h1>
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
      </h1>
    </header>
  );
};

export default Header;
