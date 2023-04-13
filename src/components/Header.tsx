import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-palegreen py-2 flex justify-center items-center">
      <h1>
        <Image
          className={'max-w-[140px]'}
          src={'/logo.png'}
          width={429}
          height={141}
          alt="kotowaza buncho-san"
        />
      </h1>
    </header>
  );
};

export default Header;
