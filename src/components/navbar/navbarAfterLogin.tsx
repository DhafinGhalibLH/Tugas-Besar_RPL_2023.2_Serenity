// Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './dropdownMenu'; 

export default function NavbarAfterLogin() {
  const [isKontenOpen, setIsKontenOpen] = useState(false);

  const handleKontenClick = () => {
    setIsKontenOpen(!isKontenOpen);
  };

  return (
    <div className="flex items-center justify-between h-[107px] px-[45px] py-[18.5px] bg-secondary">
      <Image src="/images/logo.svg" alt="logo" width={246.5} height={75} />
      <ul className="flex items-center space-x-[96px] text-subtitle1">
        <li><Link href="dashboard" className="text-monochrome hover:text-primary2">Beranda</Link></li>
        <li><Link href="konsultasi" className="text-monochrome hover:text-primary2">Konsultasi</Link></li>
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
        <li><Link href="riwayat" className="text-monochrome hover:text-primary2">Riwayat</Link></li>
      </ul>
      <ul className="flex items-center space-x-[25px] text-subtitle1">
        <Image src="/images/profileIcon.svg" alt="profile" width={53} height={53} />
        <li><Link href="profile" className="text-monochrome hover:text-primary2">Username</Link></li>
      </ul>
    </div>
  );
}