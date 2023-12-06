import Image from 'next/image'
import Psikiater from './psikiater'
import { useState } from 'react'

export default function ListPsikiater() {
    const [activePsikiater, setActivePsikiater] = useState<number | null>(null);

    const handleButtonClick = (id: number | null) => {
        setActivePsikiater(id);
    }

    return (
        <div className="w-full bg-secondary ml-[19.5px] mb-[44px] rounded-[10px] shadow-lg">
            <ul className="px-[13px] pt-[19px]">
                <li className="mb-[5px] text-subtitle2">Hasil Pencarian</li>
                <li className="border-t-[1px] border-primary"></li>
                {[1, 2, 3, 4, 5].map(id => (
                    <Psikiater key={id} id={id} onButtonClick={handleButtonClick} isActive={activePsikiater === id} isDisabled={activePsikiater !== null && activePsikiater !== id} />
                ))}
                <div className="flex items-center justify-center my-[13px]">
                    <Image src="/images/swiper.svg" alt="swiper" width={85} height={10}/>
                </div>
            </ul>  
        </div>
    )
}