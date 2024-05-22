import Image from 'next/image';

export default function Logo() {
  return (
    <div id='logo'>
      <Image
        src={'/logo-transparent.png'}
        alt='Company Logo'
        width={250}
        height={200}
      />
    </div>
  );
}