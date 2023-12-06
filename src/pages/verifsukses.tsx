import Image from "next/image"
import { Montserrat } from 'next/font/google'
import React, {useEffect} from 'react';
import Router from 'next/router';

const montserrat = Montserrat({ subsets : ['latin']})
const Success: React.FC = ( ) => {

    function handleButtonToLogin(){
        Router.push('/login');
    }

    return (
        <div className={montserrat.className}>
            <div className="h-screen w-screen bg-[#FBF5E5] flex flex-col justify-center items-center">
                    <div className="box-content h-[520px] w-[460px] bg-white flex flex-col justify-center items-center">
                        <div className="mb-5 justify-center">
                        <Image src="/images/check.svg" alt="check" width={160} height={160} />
                        </div>
                        <div className="mb-3 text-black text-4xl font-montserat font-bold text-center relative">
                            Berhasil Verifikasi!
                        </div>
                        <div className="mb-20 text-center">
                            Anda berhasil memverifikasi akun Anda
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 h-0.5 w-1/6 bg-black"></div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={handleButtonToLogin} style={{backgroundColor: '#2C9378', color: '#fff'}} className="mb-5 h-[37px] w-[121px] hover:bg-green-700 text-white font-semibold py-2 px-4 transform hover:scale-105">
                                OK
                            </button>
                        </div>        
                    </div>
                </div>
            </div>
    )
}

export default Success