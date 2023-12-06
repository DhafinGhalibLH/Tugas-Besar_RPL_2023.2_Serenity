import Image from 'next/image'
import Link  from 'next/link'
import Head from 'next/head'
import React, { useState } from 'react';
import ProfileEditor from '@/components/profileEditor';
import NavbarAfterLogin from '@/components/navbar/navbarAfterLogin'
import Footer from '@/components/footer/footer'


export default function Konsultasi() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <Head>
                <title>Serenity</title>
                <Link rel="icon" href="/Images/logoNoText.svg" />
            </Head>
            <div className="sticky top-0 z-50">
                <NavbarAfterLogin/>
            </div>
            {/* profile */}
            <div className="bg-gradient-to-t from-secondary2 to-secondary font-montserrat">
                <div className="flex flex-col">
                    {/* judul + button edit */}
                    <div className="flex justify-between mx-[251px] items-center my-[25px]">
                        <h1 className="text-heading2">Profil Saya</h1>
                        <button className="text-button bg-secondary px-[30px] py-[10px] border-[1px] border-monochrome hover:shadow-lg" onClick={() => setShowForm(true)}>
                            UBAH PROFIL
                        </button>
                    </div>
                    {/* detail profil */}
                    <div className="flex flex-col bg-secondary mx-[251px] mb-[125px] px-[116px] pt-[40px] pb-[110px] shadow-lg">
                        {/* foto profil + nama dkk */}
                        <div className="flex space-x-[35px] items-center">
                            <Image src ="/images/profileLogo.svg" alt="fotoProfil" width={142} height={142}/>
                            <div>
                                <p className="text-heading2">Nama Lengkap</p>
                                <p className="text-body1">Nomor Telepon</p>
                            </div>
                        </div>
                        {/* sisanya */}
                        <div className="mt-[50px]">
                            {/* tanggal lahir */}
                            <div className="flex justify-between py-[15px] border-b-[1px] border-monochrome">
                                <p className="text-body1 text-monochrome_light">Tanggal Lahir</p>
                                <p className="text-body1">Tanggal Lahir</p>
                            </div>
                            {/* jenis kelamin */}
                            <div className="flex justify-between py-[15px] border-b-[1px] border-monochrome">
                                <p className="text-body1 text-monochrome_light">Jenis Kelamin</p>
                                <p className="text-body1">Jenis Kelamin</p>
                            </div>
                            {/* Email    */}
                            <div className="flex justify-between py-[15px] border-b-[1px] border-monochrome">
                                <p className="text-body1 text-monochrome_light">Email   </p>
                                <p className="text-body1">Email </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                {showForm && (
                    <div className="overlay" style={{backgroundColor: 'rgba(217,217,217,0.25)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999}}>
                        <div className="flex justify-center z-50">
                            <ProfileEditor showForm={showForm} setShowForm={setShowForm} />
                        </div>
                    </div>
                )}
            </div>
            <div className="sticky z-30">
            <Footer />
            </div>
        </div>
    )
}