import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import NavbarAfterLogin from "../components/navbar/navbarAfterLogin";
import NavbarBeforeLogin from "../components/navbar/navbarBeforeLogin";
import KontenArtikel from "@/components/konten/kontenArtikel";
import Footer from "../components/footer/footer";

export default function Artikel() {
    const [isClicked, setIsClicked] = useState(false);
    const [numArticles, setNumArticles] = useState(3);
  
    const handleClick = () => {
        if (isClicked) {
          setNumArticles(Math.max(numArticles - 7, 3));
        } else {
          setNumArticles(numArticles + 7);
        }
        setIsClicked(!isClicked);
      };

    return (
        <div>
            <Head>
            <title>Serenity</title>
            <Link rel="icon" href="/Images/logoNoText.svg" />
            </Head>
            <div className="sticky top-0 z-50">
            <NavbarAfterLogin/>
            </div>
            <div className="bg-gradient-to-t from-secondary2 to-secondary font-montserrat">
                {/* search bar */}
                <div className="flex flex-col justify-center items-center text-body1 mx-[143px]">
                    <p className="mt-[66px] text-subtitle1">Cari artikel disini!</p>
                    <input type="text" placeholder="Cari artikel berdasarkan judul atau topik" className="input-field mt-[16px] w-full p-[20px] border-[1px] border-monochrome_light bg-scroll bg-no-repeat bg-[center_right_1rem]" style={{ backgroundImage: "url('/images/searchIcon.svg')"}}></input>
                </div>
                {/* artikel */}
                <div className="flex flex-col justify-center items-center">
                    {/* artikel gede */}
                    <div className="relative flex justify-center mx-[143px] w-[941px] h-[424px] my-[45px]">
                        <Link href="/detailArtikel">
                                <Image className="z-30 hover:shadow-lg" src="/images/artikel/artikel5.svg" alt="mainArtikel" width={941} height={424}/>
                        </Link>
                        <div className="absolute top-[379px] h-[45px] w-full left-0 z-30 text-subtitle1 bg-[#BDBDBD] bg-opacity-50"></div>
                        <p className="absolute top-[387px] left-[25px] z-30 text-subtitle1">Judul Artikel</p>
                    </div>
                    {/* artikel kecil */}
                    {Array(numArticles).fill(
                        <Link href="/detailArtikel">
                                <KontenArtikel/>
                        </Link>
                    )}
                </div>
                {/* button */}
                <button onClick={handleClick} className={`text-button bg-secondary px-[30px] py-[10px] mx-[600px] mb-[60px] border-[1px] border-monochrome hover:shadow-lg ${isClicked ? 'opacity-50 border-[0px] bg-[#EBEBEB]' : 'opacity-100'}`}>
                    LIHAT LEBIH BANYAK
                </button>
            </div>
            <div className="sticky z-30">
                <Footer />
            </div>
        </div>
    )
}