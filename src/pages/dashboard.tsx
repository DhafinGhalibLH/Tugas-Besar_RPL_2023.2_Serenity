import navbarAfterLogin from '@/components/navbar/navbarAfterLogin'
import Footer from '@/components/footer/footer'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react';
import { supabase } from '../../supabase';
import { Router } from 'next/router';
import NavbarAfterLogin from '@/components/navbar/navbarAfterLogin'

export default function Dashboard() {
    const [session, setSession] = React.useState(false);
    const router = Router;
    useEffect(() => {
        async function checkAuth() {
            const { data: { session } } = await (supabase as NonNullable<typeof supabase>).auth.getSession();
            if (session) {
                setSession(true);
            }
        }
        checkAuth();
    }, []);

    function handleButtonToLogout(){
        async function signOut() {
            const { error } = await (supabase as NonNullable<typeof supabase>).auth.signOut()
            if (error) {console.log('Error signing out:', error.message)} else console.log('User signed out!')}
            setSession(false);
        signOut()          
    }

    return (
        <div>
            <Head>
                <title>Serenity</title>
                <link rel="icon" href="/Images/logoNoText.svg" />
            </Head>
            {/* Navbar */}
            <div className="sticky top-0">
                <NavbarAfterLogin/>
            </div>
            {/* Main */}
            <div className="bg-gradient-to-t from-secondary2 to-secondary font-montserrat">
                {/* Deskripsi dan gambar */}
                <div className="flex justify-between items-center">
                    <div className="ml-[125px]">
                        <p className="text-heading1 text-primary2">
                            Kami ada untuk anda
                        </p>
                        <p className="text-body1 w-[662px]">
                            Temukan solusi untuk permasalahan mental Anda dengan konsultasi bersama psikiater terpercaya kami. Serenity hadir untuk mendukung Anda melalui setiap langkah perjalanan Anda menuju keseimbangan emosional.
                        </p>
                        <Link href="konsultasi">
                            <button className="px-[30px] py-[10px] my-[16px] text-button text-secondary bg-primary2 hover:brightness-110">JADWALKAN KONSULTASIMU BERSAMA PSIKIATER KAMI</button>
                        </Link>
                    </div>
                    <Image className="mr-[157px]" src="/images/psikiater.svg" alt="psikiater" width={405} height={511}/>
                </div>
                {/* Kategori */}
                <div className="overflow-x-scroll no-scrollbar mx-[90px] pb-[131px] ">
                    <div className="flex justify-between items-center">
                        <Link href="konsultasi"><Image className="hover:shadow-lg rounded-lg" src="/images/kategori/category1.svg" alt="category1" width={200} height={127}/></Link>
                        <Link href="konsultasi"><Image className="hover:shadow-lg rounded-lg" src="/images/kategori/category2.svg" alt="category2" width={200} height={127}/></Link>
                        <Link href="konsultasi"><Image className="hover:shadow-lg rounded-lg" src="/images/kategori/category3.svg" alt="category3" width={200} height={127}/></Link>
                        <Link href="konsultasi"><Image className="hover:shadow-lg rounded-lg" src="/images/kategori/category4.svg" alt="category4" width={200} height={127}/></Link>
                        <Link href="konsultasi"><Image className="hover:shadow-lg rounded-lg" src="/images/kategori/category5.svg" alt="category5" width={200} height={127}/></Link>
                        <Link href="konsultasi"><Image className="hover:shadow-lg rounded-lg" src="/images/kategori/category6.svg" alt="category6" width={200} height={127}/></Link>
                    </div>
                </div>
                {/* Service */}
                <div className="h-[378px] mb-[108px] bg-scroll bg-no-repeat bg-cover" style={{backgroundImage: "url(/images/gradient.svg)"}}>
                    <div className="flex justify-center"><p className="text-body1 mt-[61px]">Cara kami membantu anda</p></div>
                    <ul className="flex justify-between items-center text-center mx-[99px]">
                        <li className="flex flex-col items-center">
                            <Image src="/images/service/service1.svg" alt="service1" width={96} height={96}/>
                            <p className="text-subtitle1 text-primary2">Psikiater Pilihan</p>
                            <p className="text-body1 w-[346px]">Kami akan membantu mempertemukan anda dengan psikiater kami sesuai dengan kebutuhan anda</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <Image src="/images/service/service2.svg" alt="service2" width={96} height={96}/>
                            <p className="text-subtitle1 text-primary2">Kemudahan Penjadwalan</p>
                            <p className="text-body1 w-[346px]">Penjadwalan dan pengalaman layanan yang mudah dan fleksibel untuk mendapatkan layanan terbaik</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <Image src="/images/service/service3.svg" alt="service3" width={96} height={96}/>
                            <p className="text-subtitle1 text-primary2">Komunikasi Dengan Nyaman</p>
                            <p className="text-body1 w-[346px]">Pilihan metode konsultasi sesuai dengan preferensi anda</p>
                        </li>
                    </ul>
                </div>
                {/* Artikel */}
                <div className="mx-[99px] pb-[123px]">
                    <div className="flex justify-between mb-[25px]">
                        <p className="text-heading3">Baca Artikel Kesehatan Mental</p>
                        <p className="text-button text-primary2 hover:brightness-110">LIHAT LEBIH BANYAK</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <Image className=" hover:shadow-lg" src="/images/artikel/artikel1.svg" alt="artikel3" width={274} height={187}/>
                            <p className="text-subtitle2 w-[274px] mt-[10px]">Perlukah Kita Memperhatikan Psikologis Anak Sejak Dini?</p>
                        </div>
                        <div>
                            <Image className=" hover:shadow-lg" src="/images/artikel/artikel2.svg" alt="artikel2" width={274} height={187}/>
                            <p className="text-subtitle2 w-[274px] mt-[10px]">Tips Menjaga Kesehatan Mental di Era Digital</p>
                        </div>
                        <div>
                            <Image className=" hover:shadow-lg" src="/images/artikel/artikel3.svg" alt="artikel3" width={274} height={187}/>
                            <p className="text-subtitle2 w-[274px] mt-[10px]">Kenali Gejala Gangguan Makan</p>
                        </div>
                        <div>
                            <Image className=" hover:shadow-lg" src="/images/artikel/artikel4.svg" alt="artikel4" width={274} height={187}/>
                            <p className="text-subtitle2 w-[274px] mt-[10px]">Coping Mechanism: Cara Memahami Dirimu Sendiri dalam Kelola Stress</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div>
                <Footer />
            </div>
        </div>
        
    )
}