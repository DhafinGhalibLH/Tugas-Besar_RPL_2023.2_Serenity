// Psikiater.tsx
import Image from 'next/image'
import { useState } from 'react';
import PsikiaterDetails from './psikiaterDetails'

interface PsikiaterProps {
    id: number;
    onButtonClick: (id: number | null) => void;
    isActive: boolean;
    isDisabled: boolean;
}

export default function Psikiater({ id, onButtonClick, isActive, isDisabled }: PsikiaterProps) {
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const handleClick = () => {
        if (!isDisabled) {
            onButtonClick(id);
            setIsOverlayActive(true);
        }
    }

    const handleClose = () => {
        onButtonClick(null);
        setIsOverlayActive(false);
    }

    return (
        <div>
            <div className="flex w-full justify-between items-end my-[25px] px-[16px]">
                <div className="flex space-x-[23px]">
                    <Image className="shadow-lg" src="/images/profilePict.svg" alt="profilePict" width={150} height={150}/>
                    <div className="flex flex-col items-start">
                        <p className="text-subtitle1">Nama Psikiater</p>
                        <p className="text-body1 my-[5px]">Spesialis Psikiater</p>
                        <div className="flex my-[5px] space-x-[10px] items-center">
                            <Image src="/images/experienceIcon.svg" alt="experiienceIcon" width={21} height={21}/>
                            <p className="text-tag">Pengalaman Kerja</p>
                        </div>
                        <p className="text-body1 my-[5px]">Harga Psikiater</p>
                    </div>
                </div>
                <button onClick={handleClick} className={`px-[30px] py-[10px] text-button text-secondary bg-primary2 ${isDisabled ? '' : 'hover:brightness-110'}`}>PILIH PSIKIATER</button>
            </div>
            {isActive && (
                <div className="absolute top-[171px] left-[425px] z-30">
                    <PsikiaterDetails show={isActive} onClose={handleClose} />
                </div>
            )}
            {isOverlayActive && (
                <div className="fixed inset-0 bg-[rgba(217,217,217,0.25)] z-20"></div>
            )}
        </div>
    )
}