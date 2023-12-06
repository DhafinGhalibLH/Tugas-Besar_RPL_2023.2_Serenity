import Image from "next/image"
import { Montserrat } from 'next/font/google'
import React, {useEffect, useState} from 'react';
import Router from 'next/router';
import { supabase } from "../../supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets : ['latin']})
const Register: React.FC = ( ) => {

    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nama, setNama] = useState('');
    function handleButtonToConfirm(){
        if (password !== confirmPassword) {
            toast.error("Password and confirm password do not match.", {
                position: toast.POSITION.TOP_RIGHT,
            });
            return;
        }
        async function signUpNewUser() {
            const { data, error } = await (supabase as NonNullable<typeof supabase>).auth.signUp({
              email: email,
              password: password,
              options: {
                data: {
                    full_name: nama
                  },
              }
            })

            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        }
        signUpNewUser()          
        Router.push('/emailconfirm');
    }
    
    return (
        <div className={montserrat.className}>
            <div className="h-screen w-screen bg-gradient-to-br from-[#FFEAB2]">
                <div className="bg-bg-login h-full w-full bg-no-repeat bg-center bg-contain">
                    <div className="box-content h-[450px] w-[420px] p-8 absolute bottom-[110px] right-[150px] bg-white bg-opacity-60 flex flex-col justify-center items-center">
                        <div className="absolute top-[-60px] justify-center">
                        <Image src="/images/logoNoText.svg" alt="Logo" width={110} height={110} />
                        </div>                  
                        <p className="mb-15 mt-12 text-black text-4xl font-montserat font-bold text-center">
                            SIGN UP
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col">
                                <label className="mb-1">Name</label>
                                <input className="mb-3 w-[385px] h-[50px] border border-slate-500 rounded text-lg pl-2" type="text" id="name" name="nama" placeholder="  Enter name" value={nama} onChange={(e) => setNama(e.target.value)}></input>
                                <label className="mb-1">Email</label>
                                <input className="mb-3 w-[385px] h-[50px] border border-slate-500 rounded text-lg pl-2" type="text" id="email" name="email" placeholder="  Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <label className="mb-1">Password</label>
                                <input className="mb-3 w-[385px] h-[50px] border border-slate-500 rounded text-lg pl-2" type="password" id="password" name="password" placeholder="  Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                <label className="mb-1">Confirm Password</label>
                                <input className="mb-5 w-[385px] h-[50px] border border-slate-500 rounded text-lg pl-2" type="password" id="password" name="password" placeholder="  Enter confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                            </div>
                        </div>  
                    <button onClick={handleButtonToConfirm} style={{backgroundColor: '#2C9378', color: '#fff'}} className="mb-5 h-[37px] w-[121px] hover:bg-green-700 text-white font-semibold py-2 px-4 transform hover:scale-105">
                        SIGN UP
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register