import Link from "next/link"
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Cta from "./Cta";

export default function Footer() {
    return (
        <>
        <Cta />
         <footer className="py-[10px] border-t-[1px]">
            <div className="w-[94%] mx-auto max-w-[1200px] flex flex-col">
                <div className="w-full py-[30px] flex items-center justify-between">
                    <div className="flex items-center gap-[20px] text-gray-800">
                        <Link href={"/"} className="font-[400] text-[22px] flex flex-col leading-0">toolbird<span className="text-[8px] font-[200] leading-0 mt-[-6px]">by Gazella Team</span></Link>
                        <p className="text-[14px] font-[200] text-gray-600">&copy; Copyright {new Date().getFullYear()} toolbird. All rights reserved</p>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <FaTiktok size={26} color="rgb(75 85 99)" />
                        <FaInstagram size={28} color="rgb(75 85 99)" />
                        <FaLinkedin size={28} color="rgb(75 85 99)" />
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}