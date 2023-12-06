import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import NavbarAfterLogin from "../components/navbar/navbarAfterLogin";
import NavbarBeforeLogin from "../components/navbar/navbarBeforeLogin";
import Footer from "../components/footer/footer";

export default function DetailArtikel() {
    return (
        <div>
            <Head>
            <title>Serenity</title>
            <Link rel="icon" href="/Images/logoNoText.svg" />
            </Head>
            <div className="sticky top-0 z-50">
            <NavbarAfterLogin/>
            </div>
            {/* detail Artikel */}
            <div className="bg-gradient-to-t from-secondary2 to-secondary font-montserrat">
                <div className="flex justify-between mt-[64px] mx-[125px]">
                    {/* konten */}
                    <div className="flex flex-col items-start max-w-[832px]">
                        <p className="text-heading2">Tanda-tanda Kamu Berada dalam Toxic Relationship</p>
                        <div className="flex space-x-[12px] items-center">
                            <p className="text-button text-primary2 bg-[#9EE56E4D] bg-opacity-30 px-[20px] py-[10px]">KATEGORI</p>
                            <p className="text-button text-primary2 bg-[#9EE56E4D] bg-opacity-30 px-[20px] py-[10px]">KATEGORI</p>
                            <p className="text-label">5 menit / Dr. Ahmad Rivai / 10 November 2023</p>
                        </div>
                        <Image className="my-[25px]" src="/images/artikel/artikel5.svg" alt="foto" width={832} height={400}/>
                        <div className="mb-[25px]">
                            <p className="text-body1">
                                <span className="font-bold">Lorem ipsum dolor sit amet</span>
                                <span>
                                , consectetur adipiscing elit. Integer ut ante imperdiet, placerat ligula sit amet, tristique nulla. Nam felis
                                felis, volutpat vel ullamcorper at, efficitur vulputate quam. Pellentesque at ultrices enim, sit amet
                                facilisis mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
                                blandit, dolor id pretium bibendum, nunc odio congue ex, et sollicitudin neque tellus sed augue. <br />
                                <br />
                                Nulla vel ex commodo est luctus lobortis a et libero. Nulla sollicitudin tristique nisl, porttitor tincidunt
                                nisl mollis sed. Aliquam ultricies ex nulla, at blandit sapien tempus non.
                                <br />
                                Phasellus auctor, dolor et finibus varius, turpis leo vehicula velit, eu porttitor risus nulla vitae magna.
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br />
                                <br />
                                Sed accumsan, purus et semper dignissim, quam nisl fermentum leo, aliquet fermentum nibh sem et risus. Nunc
                                cursus ante sed erat bibendum, sed vestibulum tortor dapibus. In facilisis dolor in diam imperdiet vehicula.
                                Integer sed pellentesque ligula, a finibus felis. <br />
                                <br />
                                Duis risus mi, placerat a dignissim sed, molestie vitae leo. Integer vel lobortis mauris. Sed fermentum a
                                ligula vitae aliquam. Sed feugiat sapien eget condimentum volutpat. Mauris eros sem, tempor et ipsum et,
                                posuere rutrum risus. In quis mattis enim. Aliquam nec mi pulvinar diam eleifend ornare vel sed velit.
                                Pellentesque ultricies, sapien ut convallis consequat, justo erat condimentum augue, nec ultricies sem augue
                                quis purus. Aliquam vestibulum leo nec leo ultricies, id imperdiet lorem maximus.
                                </span>
                            </p>
                        </div>
                    </div>
                    {/* terkait */}
                    <div className="flex flex-col">
                        <p className="text-subtitle1">Artikel Terkait</p>
                        <div className="flex space-x-[15px] my-[15px] items-center">
                            <Image src="/images/artikel/artikel7.svg" alt="artikelterkait" width={140} height={90}/>
                            <p className="text-subtitle1">Judul Artikel</p>
                        </div>
                        <div className="flex space-x-[15px] my-[15px] items-center">
                            <Image src="/images/artikel/artikel7.svg" alt="artikelterkait" width={140} height={90}/>
                            <p className="text-subtitle1">Judul Artikel</p>
                        </div>
                        <div className="flex space-x-[15px] my-[15px] items-center">
                            <Image src="/images/artikel/artikel7.svg" alt="artikelterkait" width={140} height={90}/>
                            <p className="text-subtitle1">Judul Artikel</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky z-30">
                <Footer />
            </div>
        </div>
    )
}