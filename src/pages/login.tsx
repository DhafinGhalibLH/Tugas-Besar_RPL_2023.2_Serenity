import Image from "next/image"
import { Montserrat } from 'next/font/google'
import React, {useEffect, useState} from 'react';
import Router from 'next/router';
import { supabase } from "../../supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets : ['latin']})
const Login: React.FC = ( ) => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    function handleButtonToRegister(){
        Router.push('/register');
    }

    function handleButtonToDashboard(){
        async function signInWithEmail() {
            const { data, error } = await (supabase as NonNullable<typeof supabase>).auth.signInWithPassword({
              email: email,
              password: password
            })

            if (error) {
                console.log(error)
                toast.error("Email atau password salah!", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                console.log(data)
                toast.success("Login berhasil.", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                Router.push('/dashboard');
            }
        }
        signInWithEmail()
    }

    return (
        <div className={montserrat.className}>
            <div className="h-screen w-screen bg-gradient-to-br from-[#FFEAB2]">
                <div className="bg-bg-login h-full w-full bg-no-repeat bg-center bg-contain">
                    <div className="box-content h-[450px] w-[420px] p-8 absolute bottom-[110px] right-[150px] bg-white bg-opacity-60 flex flex-col justify-center items-center">
                        <div className="absolute top-[-60px] justify-center">
                        <Image src="/images/logoNoText.svg" alt="Logo" width={110} height={110} />
                        </div>                  
                        <p className="mb-5 mt-10 text-black text-5xl font-montserat font-bold text-center">
                            LOG IN
                        </p>
                        <div className="flex flex-col justify-center items-start">
                            <div className="flex flex-col">
                                <label className="mb-1">Email</label>
                                <input className="mb-3 w-[385px] h-[50px] border border-slate-500 rounded text-lg pl-2" type="text" id="email" name="email" placeholder="  Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <label className="mb-1">Password</label>
                                <input className="mb-8 w-[385px] h-[50px] border border-slate-500 rounded text-lg pl-2" type="password" id="password" name="password" placeholder="  Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            {/* ingat saya? */}
                            <div className="flex mb-[20px]">
                                <input type="checkbox" id="remember" name="remember" value="remember"></input>
                                <label className="ml-2" htmlFor="remember">Ingat saya?</label>
                            </div> 
                        </div>
                    <button onClick={handleButtonToDashboard} style={{backgroundColor: '#2C9378', color: '#fff'}} className="mb-5 h-[37px] w-[121px] border border-slate-500 hover:bg-green-700 text-white font-semibold py-2 px-4 transform hover:scale-105">
                        LOG IN
                    </button>
                    <button onClick={handleButtonToRegister} className="mb-2 h-[37px] w-[121px] border border-slate-500 hover:bg-white text-black font-semibold py-2 px-4 transform hover:scale-105">
                        SIGN UP
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login