import Image from 'next/image'
import { useState } from 'react';

export default function FilterPsikiater() {
    const [selectedGender, setSelectedGender] = useState<Record<number, boolean>>({}) ;
    const [selectedPengalaman, setSelectedPengalaman] = useState<Record<number, boolean>>({}) ;
    const [selectedHarga, setSelectedHarga] = useState<Record<number, boolean>>({}) ;

    const handleClickGender = (id: number) => {
        setSelectedGender(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    const handleClickPengalaman = (id: number) => {
        setSelectedPengalaman(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    const handleClickHarga= (id: number) => {
        setSelectedHarga(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }
    
    const Gender = ['Laki-Laki', 'Perempuan'];
    const Pengalaman = ['Di atas 10 tahun', '5-10 tahun', 'Di bawah 5 tahun'];
    const Harga = ['> Rp100.000', ' Rp50.000 - Rp100.000', '< Rp50.000'];

    return (
    <div className="w-[289px] bg-secondary mr-[19.5px] mb-[753px] rounded-[10px] shadow-lg">   
        <ul className="px-[13px] py-[13px]">
            <li className="mb-[5px] text-subtitle1">Filter</li>  
            <li className="border-t-[1px] border-primary"></li>
            {/* filter jenis kelamin */}
            <div className="ml-[16px]">
                <li className="my-[5px] text-subtitle2">Jenis Kelamin Psikiater</li>
                {Gender.map((item, index) => (
                    <div key={index} className="flex space-x-[26px] items-center">
                        <li 
                            onClick={() => handleClickGender(index)}
                            className={`flex justify-center items-center ml-[16px] w-[15px] h-[15px] ${selectedGender[index] ? 'border-[1px] border-primary2' : 'border-[1px] border-monochrome_light'} rounded-full`}
                        >
                            <div className={`bg-primary2 rounded-full h-[10px] w-[10px] ${selectedGender[index] ? 'bg-primary2' : 'bg-secondary'}`}></div>
                        </li>
                        <li className="my-[5px] text-body2">{item}</li>
                    </div>
                ))}
            </div>
            {/* filter pengalaman kerja */}
            <div className="ml-[16px]">
                <li className="my-[5px] text-subtitle2">Pengalaman Kerja</li>
                    {Pengalaman.map((item, index) => (
                        <div key={index} className="flex space-x-[26px] items-center">
                            <li 
                                onClick={() => handleClickPengalaman(index)}
                                className={`flex justify-center items-center ml-[16px] w-[15px] h-[15px] ${selectedPengalaman[index] ? 'border-[1px] border-primary2' : 'border-[1px] border-monochrome_light'} rounded-full`}
                            >
                                <div className={`bg-primary2 rounded-full h-[10px] w-[10px] ${selectedPengalaman[index] ? 'bg-primary2' : 'bg-secondary'}`}></div>
                            </li>
                            <li className="my-[5px] text-body2">{item}</li>
                        </div>
                    ))}
            </div>
            {/* filter harga */}
            <div className="ml-[16px]">
                <li className="my-[5px] text-subtitle2">Harga Konsultasi</li>
                {Harga.map((item, index) => (
                    <div key={index} className="flex space-x-[26px] items-center">
                        <li 
                            onClick={() => handleClickHarga(index)}
                            className={`flex justify-center items-center ml-[16px] w-[15px] h-[15px] ${selectedHarga[index] ? 'border-[1px] border-primary2' : 'border-[1px] border-monochrome_light'} rounded-full`}
                        >
                            <div className={`bg-primary2 rounded-full h-[10px] w-[10px] ${selectedHarga[index] ? 'bg-primary2' : 'bg-secondary'}`}></div>
                        </li>
                        <li className="my-[5px] text-body2">{item}</li>
                    </div>
                ))}
            </div>
        </ul>
    </div>        
    )
}