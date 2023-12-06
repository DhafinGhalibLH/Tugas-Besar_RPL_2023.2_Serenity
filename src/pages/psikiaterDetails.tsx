// PsikiaterDetails.tsx
import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface PsikiaterDetailsProps {
    show: boolean;
    onClose: () => void;
}

    const PsikiaterDetails: React.FC<PsikiaterDetailsProps> = ({ show, onClose }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedType, setSelectedType] = useState('Pilih tipe konsultasi');
    const [selectedDate, setSelectedDate] = useState('');
    const [selected, setSelected] = useState('');

    if (!show) {
        return null;
    }

    const handleSelect = (type: string) => {
        setSelectedType(type);
        setShowDropdown(false);
    }

    const getDates = () => {
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            dates.push(date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' }));
        }
        return dates;
    }

    return (
        <div className="absolute w-[590px] p-[40px] items-center justify-center bg-secondary shadow-lg">
            <div className="flex flex-col">
                {/* tulisan konsultasi + close */}
                <div className="flex justify-between">
                    <h2 className="text-heading3">Konsultasi</h2>
                    <button onClick={onClose}>
                        <Image src="/images/closeButton.svg" alt="Close button" width={24} height={24} />
                    </button>
                </div>  
                {/* Psikiaternya */}
                <div className="flex space-x-[23px] mt-[15px]">
                    <Image className="shadow-lg" src="/images/profilePict.svg" alt="profilePict" width={170} height={170}/>
                    <div className="flex flex-col w-[164px] justify-center items-start relative">
                        <div className="relative w-fit text-subtitle1 my-[5px]">
                            Nama Psikiater
                        </div>
                        <div className="relative w-fit text-body1 my-[5px]">
                            Spesialisasi Psikiater
                        </div>
                        <div className="flex space-x-[12px] my-[5px]">
                            <div className="inline-flex items-center space-x-[10px] p-[5px] relative flex-[0_0_auto] bg-white shadow-[0px_4px_4px_#0000000d]">
                                <Image className="relative mt-[-1.07px] mb-[-1.07px] ml-[-1.07px]" alt="Icon shopping bag" src="/images/experienceIconPrimary2.svg" width={21} height={21}/>
                                <div className="relative w-fit text-tag font-[number:var(--tag-font-weight)] text-black text-[length:var(--tag-font-size)] tracking-[var(--tag-letter-spacing)] leading-[var(--tag-line-height)] whitespace-nowrap [font-style:var(--tag-font-style)]">
                                    3 tahun
                                </div>
                            </div>
                            <div className="inline-flex items-center space-x-[10px] p-[5px] relative flex-[0_0_auto] bg-white shadow-[0px_4px_4px_#0000000d]">
                                <Image className="relative" alt="star" src="/images/starPrimary2.svg" width={21} height={21}/>
                                <div className="relative w-fit text-tag">
                                    4.7
                                </div>
                            </div>
                        </div>
                        <div className="relative text-tag my-[5px]">
                            Kode Praktik 31039540
                        </div>
                    </div>
                </div>
                {/* tipe konsultasi */}
                <div className="relative z-10">
                    <h3 className="my-[15px] text-subtitle2">Tipe Konsultasi</h3>
                    <button onClick={() => setShowDropdown(!showDropdown)} className="flex justify-between items-center w-full px-[15px] py-[10px] border-[1px] border-primary2">
                        <div className={`text-body1 text-start ${showDropdown ? 'text-monochrome_light' : ''}`}>{selectedType}</div>
                        <Image src="/images/dropdownListIcon.svg" alt="dropdown" width={18} height={9}/>
                    </button>
                    {showDropdown && 
                        <div className="absolute w-full bg-secondary">
                            <p className="px-[15px] py-[10px] text-body1 text-start hover:bg-[#EBEBEB]" onClick={() => handleSelect('Konsultasi chat')}>Konsultasi chat</p>
                            <p className="px-[15px] py-[10px] text-body1 text-start hover:bg-[#EBEBEB]" onClick={() => handleSelect('Konsultasi voice call')}>Konsultasi voice call</p>
                            <p className="px-[15px] py-[10px] text-body1 text-start hover:bg-[#EBEBEB]" onClick={() => handleSelect('Konsultasi video call')}>Konsultasi video call</p>    
                        </div>
                    }
                </div>
                {/* jadwal tanggal */}
                <div className="flex mt-[10px]">
                    <Image src="/images/jadwal.svg" alt="jadwal" width={56} height={46}/>
                    <div className="overflow-x-auto no-scrollbar w-[450px]">
                        <div className="flex space-x-[20px]">
                            {getDates().map(date => (
                                <button 
                                    key={date} 
                                    onClick={() => setSelectedDate(date)} 
                                    className={`min-w-[120px] h-[54px] px-[15px] py-[10px] text-body2 text-center ${date === selectedDate ? 'bg-secondary' : 'bg-[#A6A5A5] bg-opacity-25 text-[#A6A5A5]'}`}
                                >
                                    {date}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* jadwal psikiater jam */}
                    {/* pagi */}
                    <div className="flex space-x-[15px]">
                        <Image src="/images/pagi.svg" alt="pagi" width={25} height={20}/>
                        <h3 className="my-[15px] text-subtitle2">Pagi</h3>
                    </div>
                    <div className="flex space-x-[10px]">
                        <button 
                            onClick={() => setSelected('09.00-10.00')} 
                            className={`px-[15px] py-[5px] text-body2 text-center ${selected === '09.00-10.00' ? 'bg-secondary' : 'bg-[#A6A5A5] bg-opacity-25 text-[#A6A5A5]'}`}
                        >
                            09.00-10.00
                        </button>
                        <button 
                            onClick={() => setSelected('10.00-11.00')} 
                            className={`px-[15px] py-[5px] text-body2 text-center ${selected === '10.00-11.00' ? 'bg-secondary' : 'bg-[#A6A5A5] bg-opacity-25 text-[#A6A5A5]'}`}
                        >
                            10.00-11.00
                        </button>
                    </div>
                    {/* siang */}
                    <div className="flex space-x-[15px]">
                        <Image src="/images/siang.svg" alt="siang" width={25} height={20}/>
                        <h3 className="my-[15px] text-subtitle2">Siang</h3>
                    </div>
                    <div className="flex space-x-[10px]">
                        <button 
                            onClick={() => setSelected('13.00-14.00')} 
                            className={`px-[15px] py-[5px] text-body2 text-center ${selected === '13.00-14.00' ? 'bg-secondary' : 'bg-[#A6A5A5] bg-opacity-25 text-[#A6A5A5]'}`}
                        >
                            13.00-14.00
                        </button>
                    </div>
                    {/* malam */}
                    <div className="flex space-x-[15px]">
                        <Image src="/images/malam.svg" alt="malam" width={25} height={20}/>
                        <h3 className="my-[15px] text-subtitle2">Malam</h3>
                    </div>
                    <div className="flex space-x-[10px]">
                        <button 
                            onClick={() => setSelected('20.00-21.00')} 
                            className={`px-[15px] py-[5px] text-body2 text-center ${selected === '20.00-21.00' ? 'bg-secondary' : 'bg-[#A6A5A5] bg-opacity-25 text-[#A6A5A5]'}`}
                        >
                            20.00-21.00
                        </button>
                    </div>
                {/* harga + tombol fiksasi */}
                <div className="flex justify-between items-center mt-[15px]">
                    <div className="flex flex-col">
                        <p className="text-subtitle1">Harga</p>
                        <p className="text-body1">Rp. 200.000</p>
                    </div>
                    <a href="../" className="px-[30px] py-[10px] text-button text-secondary bg-primary2 hover:brightness-110">JADWALKAN SEKARANG</a>
                </div>
            </div>
        </div>
    );
}

export default PsikiaterDetails;