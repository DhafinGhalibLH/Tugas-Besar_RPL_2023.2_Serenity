// Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './dropdownMenu'; 

export default function NavbarBeforeLogin() {
  const [isKontenOpen, setIsKontenOpen] = useState(false);

  const handleKontenClick = () => {
    setIsKontenOpen(!isKontenOpen);
  };

  return (
    <div className="flex items-center justify-between h-[107px] px-[45px] py-[18.5px] bg-secondary">
        <Image src="/images/logo.svg" alt="logo" width={246.5} height={75} />
        <ul className="flex items-center space-x-[96px] text-subtitle1">
            <li><Link href="../" className="text-monochrome hover:text-primary2">Beranda</Link></li>
            <li><Link href="login" className="text-monochrome hover:text-primary2">Konsultasi</Link></li>
            <li className={`flex items-center ${isKontenOpen ? 'relative' : ''}`}>
            {isKontenOpen && <DropdownMenu />}
            <p className="text-monochrome hover:text-primary2" onClick={handleKontenClick} >Konten</p>
            <Image
                src="/images/dropdownIcon.svg"
                alt="dropdown"
                width={16}
                height={16}
                className={`ml-[9px] ${isKontenOpen ? 'rotate-180' : ''}`}
                onClick={handleKontenClick}
            />
            </li>
            <li><Link href="login" className="text-monochrome hover:text-primary2">Riwayat</Link></li>
        </ul>
        <div>
        <Link href="login" className="px-[30px] py-[10px] text-button text-secondary bg-primary2 hover:brightness-110">LOG IN</Link>
        </div>
    </div>
  );
}