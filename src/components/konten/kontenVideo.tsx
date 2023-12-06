import Link from "next/link"
import Image from "next/image"

export default function KontenVideo() {
    return (
        <>
        <div className="flex space-x-[28px] my-[20px] items-center text-center">
            <div style={{ position: 'relative' }}>
                <Link href="detailVideo">
                    <Image className="z-30 hover:shadow-lg" src="/images/video.svg" alt="mainVideo" width={402} height={262}/>
                </Link>
                <p className="absolute bottom-10 right-5 w-fit bg-[#BDBDBD] bg-opacity-50 text-button">05:12</p>
                <p className= "text-subtitle1">Judul Video</p>
            </div>
            <div style={{ position: 'relative' }}>
                <Link href="detailVideo">
                    <Image className="z-30 hover:shadow-lg" src="/images/video.svg" alt="mainVideo" width={402} height={262}/>
                </Link>
                <p className="absolute bottom-10 right-5 w-fit bg-[#BDBDBD] bg-opacity-50 text-button">05:12</p>
                <p className= "text-subtitle1">Judul Video</p>
            </div>
            <div style={{ position: 'relative' }}>
                <Link href="detailVideo">
                    <Image className="z-30 hover:shadow-lg" src="/images/video.svg" alt="mainVideo" width={402} height={262}/>
                </Link>
                <p className="absolute bottom-10 right-5 w-fit bg-[#BDBDBD] bg-opacity-50 text-button">05:12</p>
                <p className= "text-subtitle1">Judul Video</p>
            </div>
        </div>
        </>
    )
}