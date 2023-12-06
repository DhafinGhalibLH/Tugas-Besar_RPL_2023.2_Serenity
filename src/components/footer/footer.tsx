import Image from 'next/image'

export default function Footer() {
    return (
        <div className='font-montserrat'>
            <div className="flex items-center justify-center h-[154px] bg-primary2">
                <ul className="flex items-center text-body1 text-center text-secondary">
                <li className="mt-[107px] ml-[194px]">Sri Laksmi Purwoningtyas</li>
                <div className="mt-[23px] mx-[231px] flex flex-col items-center">
                    <Image src="/images/logoNoBg.svg" alt="logoNoBg" width={79} height={66} />
                    <li className="mt-[18px]">Ahmad Rivai Yahya</li>
                </div>
                <li className="mt-[107px] mr-[162px]">Dhafin Ghalib Luqman Hakim</li>
                </ul>
            </div>
            <div className='flex items-center justify-center h-[56px] bg-[#27826A]'>
                <p className='text-button text-secondary'>@SERENITY 2023, ALL RIGHT RESERVED</p>
            </div>
        </div>
    )
}