import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import KontenVideo from "@/components/konten/kontenVideo";
import NavbarAfterLogin from "../components/navbar/navbarAfterLogin";
import NavbarBeforeLogin from "../components/navbar/navbarBeforeLogin";
import Footer from "../components/footer/footer";

export default function DetailVideo() {
    return (
        <div>
            <Head>
                <title>Serenity</title>
                <Link rel="icon" href="/Images/logoNoText.svg" />
            </Head>
            <div className="sticky top-0 z-50">
                <NavbarAfterLogin/>
            </div>
            {/* detail Video */}
            <div className="bg-gradient-to-t from-secondary2 to-secondary font-montserrat">
                <div className="flex flex-col mt-[64px] mx-[125px]">
                    {/* konten */}
                    <div className="flex flex-col items-start">
                        <p className="text-heading2">Perjalanan Pemulihan: Menjelajahi Pentingnya Terapi dalam Kesehatan Mental</p>
                        <div className="flex space-x-[12px] items-center">
                            <p className="text-button text-primary2 bg-[#9EE56E4D] bg-opacity-30 px-[20px] py-[10px]">KATEGORI</p>
                            <p className="text-label">5 menit / Dr. Ahmad Rivai / 10 November 2023</p>
                        </div>
                    </div>
                    {/* video */}
                    <div className="flex justify-center items-center my-[25px]">
                            <Image src="/images/videoRunning.svg" alt="videoRunning" width={745} height={374}/>
                    </div>
                    {/* text */}
                    <div className="flex justify-center">
                        <div className="max-w-[924px] bg-[#bfbfbf33] p-[20px] mb-[25px]">
                        <p className="text-body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ante imperdiet, placerat ligula sit
                            amet, tristique nulla. Nam felis felis, volutpat vel ullamcorper at, efficitur vulputate quam. Pellentesque
                            at ultrices enim, sit amet facilisis mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae; Cras blandit, dolor id pretium bibendum, nunc odio congue ex, et sollicitudin neque
                            tellus sed augue. Nulla vel ex commodo est luctus lobortis a et libero.
                        </p>
                        </div>
                    </div>
                    {/* other videos */}
                    <div className="flex flex-col">
                        <p className="text-subtitle1">Video lainnya</p>
                        <KontenVideo/>
                    </div>
                </div>
            </div>
            <div className="sticky z-30">
                    <Footer />
                </div>
        </div>
    )
}