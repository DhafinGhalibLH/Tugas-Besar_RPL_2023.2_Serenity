import Image from "next/image"
import { Montserrat } from 'next/font/google'
import React, {useEffect} from 'react';
import Router from 'next/router';

const montserrat = Montserrat({ subsets : ['latin']})
const Confirm: React.FC = ( ) => {
    function handleButtonToRegister(){
        Router.push('/register');
    }

    function handleButtonToSuccess(){
        Router.push('/verifsukses');
    }

    return (
        <div className={montserrat.className}>
            <div className="h-screen w-screen bg-[#FBF5E5] flex flex-col justify-center items-center">
                <div className="box-content h-[520px] w-[460px] bg-white flex flex-col justify-center items-center">
                        <div className="mb-5 justify-center">
                        <Image src="/images/envelope.png" alt="envelope" width={70} height={70} />
                        </div>
                        <div className="mb-10 text-black text-xl font-montserat font-bold text-center relative">
                            VERIFIKASI AKUN EMAIL ANDA
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 h-0.5 w-4/5 bg-black"></div>
                        </div>
                        <div>
                            <p className="text-black font-montserat font-bold text-center">
                                Kode verifikasi akan dikirim melalui email</p>
                            <p className="mb-3 text-black font-montserat font-bold text-center">
                                emailuserinput@gmail.com</p>
                            <p className="text-center">
                                Masukkan kode yang sudah dikirim ke email Anda
                            </p>
                            <p className="mb-8 text-center">
                                Kode ini akan berakhir dalam 15 menit
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col">
                                <input className="mb-8 text-center text-2xl font-bold bg-[#9EE56E] bg-opacity-25 mb-3 w-[270px] h-[60px] rounded text-lg pl-2" type="text" id="kodeverifikasi" name="kodeverifikasi" placeholder="  Input Kode" maxLength=6></input>
                            </div> 
                        </div>
                        <div className="flex justify-center">
                            <button onClick={handleButtonToSuccess} style={{backgroundColor: '#2C9378', color: '#fff'}} className="mb-10 h-[37px] w-[150px] border border-slate-500 hover:bg-[#9EE56E] text-black font-semibold py-2 px-4 rounded transform hover:scale-105">
                                Verifikasi
                            </button>
                        </div>
                        <div className="flex justify-between space-x-10">
                            <button className="underline mb-2 h-[37px] w-[200px] text-black py-2 px-4 rounded">
                                Kirim ulang kode
                            </button>
                            <button className="underline mb-2 h-[37px] w-[200px] text-black py-2 px-4 rounded">
                                Ubah email
                            </button>
                        </div>            
                </div>
                <div className="flex justify-center mt-10">
                    <button onClick={handleButtonToRegister} className="h-[37px] w-[400px] text-black font-bold">
                        KEMBALI KE LAMAN SEBELUMNYA
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Confirm
