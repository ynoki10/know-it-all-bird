import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full bg-palegreen py-2 flex flex-col justify-center items-center">
      <Image
        className={'max-w-[140px]'}
        src={'/logo.png'}
        width={429}
        height={141}
        alt="kotowaza buncho-san"
      />
      <p className={'mt-2 font-bold font-[15px]'}>
        By{' '}
        <a href="https://twitter.com/4noki10" target="_blank" className={'underline text-accentOrange'}>
          noki10
        </a>
      </p>
    </footer>
  );
}

export default Footer
