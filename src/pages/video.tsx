import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import KontenVideo from "@/components/konten/kontenVideo";
import NavbarAfterLogin from "../components/navbar/navbarAfterLogin";
import NavbarBeforeLogin from "../components/navbar/navbarBeforeLogin";
import KontenArtikel from "@/components/konten/kontenArtikel";
import Footer from "../components/footer/footer";

export default function Video() {
    const [isClicked, setIsClicked] = useState(false);
    const [numVideo, setNumVideo] = useState(3);
  
    const handleClick = () => {
        if (isClicked) {
          setNumVideo(Math.max(numVideo - 7, 3));
        } else {
          setNumVideo(numVideo + 7);
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
                <div className="flex flex-col">
                    {/* search bar */}
                    <div className="flex flex-col justify-center items-center text-body1 mx-[143px]">
                        <p className="mt-[66px] text-subtitle1">Cari video disini!</p>
                        <input type="text" placeholder="Cari video berdasarkan judul atau topik" className="input-field my-[16px] w-full p-[20px] border-[1px] border-monochrome_light bg-scroll bg-no-repeat bg-[center_right_1rem]" style={{ backgroundImage: "url('/images/searchIcon.svg')"}}></input>
                    </div>
                    {/* list video */}
                    <div className="flex flex-col justify-center items-center px-[90px]">
                    {Array(numVideo).fill(
                        <KontenVideo/>
                    )}
                    </div>    
                    {/* button */}
                    <button onClick={handleClick} className={`text-button bg-secondary px-[30px] py-[10px] mx-auto mb-[30px] border-[1px] border-monochrome hover:shadow-lg ${isClicked ? 'opacity-50 border-[0px] bg-[#EBEBEB]' : 'opacity-100'}`}>
                        LIHAT LEBIH BANYAK
                    </button>
                </div>
            </div>
            <div className="sticky z-30">
                <Footer />
            </div>
        </div>
    )
}