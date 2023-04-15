import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import { pageState } from '@/globalStates/pageState';

const Header = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <header className="flex w-full items-center justify-center bg-palegreen py-2">
      <h1>
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
      </h1>
    </header>
  );
};

export default Header;
