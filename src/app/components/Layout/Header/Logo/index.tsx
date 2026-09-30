import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <Image
        src="/images/logo/topzero-logo.png"
        alt="TopZero"
        width={40}
        height={30}
        quality={100}
      />
      <span className="text-xl font-bold text-dark dark:text-white">
        TopZero
      </span>
    </Link>
  );
};

export default Logo;