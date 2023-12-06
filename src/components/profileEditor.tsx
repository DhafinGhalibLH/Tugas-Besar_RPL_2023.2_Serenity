import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface PopupProps {
    showForm: boolean;
    setShowForm: (show: boolean) => void;
}

const ProfileEditor: React.FC<PopupProps> = ({ showForm, setShowForm }) => {
    const [selectedGender, setSelectedGender] = useState('');

    if (!showForm) {
        return null;
    }

    return (
        <div className="form-popup absolute top-[160px] px-[21px] bg-secondary shadow-lg">
            {/* judul + closebutton */}
            <div className="flex justify-between pt-[30px] items-center">
                <p className="text-heading3">Ubah Profil</p>
                <button onClick={() => setShowForm(false)}><Image src="/images/closeButton.svg" alt="closeButton" width={15} height={15}/></button>
            </div>
            {/* nama lengkap */}
            <div className="flex flex-col my-[10px]">
                <p className="text-label text-monochrome_light">Nama Lengkap</p>
                <input type="text" placeholder="Nama Lengkap" className="p-[10px] text-body2 text-monochrome placeholder:text-monochrome border-[1px] border-monochrome_light"></input>
            </div>
            {/* tanggal lahir */}
            <div className="flex flex-col my-[10px]">
                <p className="text-label text-monochrome_light">Tanggal Lahir</p>
                <div className="flex space-x-[5px]">
                    <input type="text" placeholder="Tanggal" className="p-[10px] text-body2 text-monochrome placeholder:text-monochrome border-[1px] border-monochrome_light"></input>
                    <input type="text" placeholder="Bulan" className="p-[10px] text-body2 text-monochrome placeholder:text-monochrome border-[1px] border-monochrome_light"></input>
                    <input type="text" placeholder="Tahun" className="p-[10px] text-body2 text-monochrome placeholder:text-monochrome border-[1px] border-monochrome_light"></input>
                </div>
            </div>
            {/* Jenis Kelamin */}
            <div className="flex flex-col my-[10px]">
                <p className="text-label text-monochrome_light">Jenis Kelamin</p>
                <div className="flex justify-between mx-[100px]">
                    <ul className="flex space-x-[10px] items-center">
                        <li 
                            onClick={() => setSelectedGender('Laki-Laki')}
                            className={`flex justify-center items-center w-[15px] h-[15px] ${selectedGender === 'Laki-Laki' ? 'border-[1px] border-primary2' : 'border-[1px] border-monochrome_light'} rounded-full`}
                        >
                            <div className={`bg-primary2 rounded-full h-[10px] w-[10px] ${selectedGender === 'Laki-Laki' ? 'bg-primary2' : 'bg-secondary'}`}></div>
                        </li>
                        <li className="text-body2">Laki-Laki</li>
                    </ul>
                    <ul className="flex space-x-[10px] items-center">
                        <li 
                            onClick={() => setSelectedGender('Perempuan')}
                            className={`flex justify-center items-center w-[15px] h-[15px] ${selectedGender === 'Perempuan' ? 'border-[1px] border-primary2' : 'border-[1px] border-monochrome_light'} rounded-full`}
                        >
                            <div className={`bg-primary2 rounded-full h-[10px] w-[10px] ${selectedGender === 'Perempuan' ? 'bg-primary2' : 'bg-secondary'}`}></div>
                        </li>
                        <li className="text-body2">Perempuan</li>
                    </ul>
                </div>
            </div>
            {/* nomor telepon */}
            <div className="flex flex-col my-[10px]">
                <p className="text-label text-monochrome_light">Nomor Telepon</p>
                <input type="text" placeholder="Nomor Telepon" className="p-[10px] text-body2 text-monochrome placeholder:text-monochrome border-[1px] border-monochrome_light"></input>
            </div>
            {/* email */}
            <div className="flex flex-col my-[10px] mb-[50px]">
                <p className="text-label text-monochrome_light">Email</p>
                <input type="text" placeholder="Email" className="p-[10px] text-body2 text-monochrome placeholder:text-monochrome border-[1px] border-monochrome_light"></input>
            </div>
            {/* simpan button */}
            <div className="flex justify-center mb-[40px]">
                <button 
                    onClick={() => setShowForm(false)}
                    className="px-[40px] py-[10px] bg-primary2 hover:brightness-110 text-button text-secondary"
                >
                    SIMPAN
                </button>
            </div>
        </div>
    );
}

export default ProfileEditor;