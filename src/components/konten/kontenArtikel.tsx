import Image from "next/image"

export default function kontenArtikel() {
    return (
        <button className="flex space-x-[25px] mx-[210px] my-[30px] items-center hover:shadow-lg">
            <Image src="/images/artikel/artikel6.svg" alt="artikel" width={270} height={190}/>
            <div className="flex flex-col items-start text-start">
                <p className="text-subtitle1">Judul Artikel</p>
                <p className="text-button text-primary2 bg-[#9EE56E4D] bg-opacity-30 px-[20px] py-[10px]">KATEGORI</p>
                <p className="text-body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sem vel nisi luctus efficitur vitae eget felis. Cras et facilisis ipsum, auctor placerat lorem. Nulla hendrerit quis sem eget laoreet.
                </p>
            </div>
        </button>
    )
}