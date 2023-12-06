import Image from 'next/image'
import Link  from 'next/link'
import Head from 'next/head'
import NavbarAfterLogin from '@/components/navbar/navbarAfterLogin'
import Footer from '@/components/footer/footer'
import React, { useState } from 'react';


export default function Riwayat() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClickToPopup = () => {
        setIsModalOpen(true);
    }    

    return (
        <div>
            <Head>
                <title>Serenity</title>
                <Link rel="icon" href="/Images/logoNoText.svg" />
            </Head>
            <div className="sticky top-0 z-30">
                <NavbarAfterLogin/>
            </div>
            <div className="h-screen w-screen bg-gradient-to-t from-secondary2 to-secondary font-montserrat">
                <div className="flex justify-center">
                    <div className="mt-10 box-content h-[161px] w-[1326px] p-8 bg-white shadow-lg flex flex-col justify-start items-start">
                        <p>Konsultasi dengan</p>
                        <div className='flex items-center'>
                            <img className="ml-5 mt-5" width={100} height={100} src="doctor.svg"/>
                            <div className='flex flex-col ml-5 mt-2'>
                                <p className='ml-3 font-bold'>Dr.Olivia</p>
                                <p className='ml-3'>Sp.Jiwa</p>
                            </div>
                            <img className='ml-20' src="Vector.svg"/>
                            <div className='flex flex-col ml-5 mt-2'>
                                <p className='ml-1 mr-5 font-bold'>Rabu, 01 November 2023</p>
                                <p className='ml-1 mr-10'>12.30-13.30</p>
                            </div>
                            <img className='ml-20 mr-20' src="selesai.svg"/>
                            <button onClick={handleButtonClickToPopup} className='ml-20 h-[37px] w-[400px] text-primary2 font-bold py-2 px-4 transform hover:scale-105'>LEBIH LANJUT&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="mt-20 box-content h-[500px] w-[800px] bg-white shadow-lg px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button onClick={() => setIsModalOpen(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 bg-[#F88C91] text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Close
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <img className="ml-5 mt-5" width={100} height={100} src="doctor.svg"/>
                            <div className='flex flex-col ml-5 mt-2'>
                                <p className='ml-3 mr-20'>01 November 2023 12.30-13.30 WIB</p>
                                <p className='ml-3 font-bold text-xl'>Dr.Olivia</p>
                                <p className='ml-3'>Sp.Jiwa</p>
                            </div>
                            <div className='ml-20 box-content h-[37px] w-[206px] bg-[#BFBFBF] text-md text-center text-white font-semibold flex items-center justify-center'>
                                SELESAI
                            </div>
                        </div>
                        <p className='mt-10 ml-5 mb-2 font-semibold'>Catatan Psikiater</p>
                        <div className='ml-5 pl-5 pt-5 box-content h-[220px] w-[750px] bg-white shadow-md text-md text-black flex'>
                                <div className='flex flex-col'>
                                    <p>Task to do:</p>
                                    <p> - Journaling setiap hari</p>
                                    <p> - Meditasi 3x seminggu</p>
                                    <p> - Olahraga 2x seminggu</p>
                                    <p> - Mengikuti kelas yoga</p>
                                </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="z-30">
                <Footer />
            </div>
        </div>
    )
}
