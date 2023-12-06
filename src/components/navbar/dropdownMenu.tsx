import Link from "next/link";

export default function dropdownMenu() {
  return (
    <div className="absolute top-[67px] left-[28px] w-[157px] bg-white rounded-r-[15px] rounded-b-[15px] border-[1px] border-t-primary2">
      <ul className="py-[10px] px-[10px]">
        <li>
          <div className="w-[136px] h-[29px] bg-transparent hover:bg-[#EBEBEB] rounded-[7.5px] px-[6px]">
            <Link href="artikel">Artikel</Link>
          </div>
        </li>
        <li className="border-t-[0.5px] border-monochrome my-[9px]"></li>
        <li>
          <div className="w-[136px] h-[29px] bg-transparent hover:bg-[#EBEBEB] rounded-[7.5px] px-[6px]">
            <Link href="video">Video</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

