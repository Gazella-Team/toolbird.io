import Link from "next/link";
import Flyout from "./Flyout";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

export default function Navbar(props:any) {
    return (
        <nav className="h-[80px] bg-white text-main absolute w-full flex items-center border-b-[1px]">
        <div className="w-[96%] max-w-[1370px] mx-auto text-gray-800 flex items-center justify-between">
            <div className="w-[25%]">
                <Link href={"/"} >
                    <img className="w-[100px]" src="/logos/logograytext.svg"></img>
                </Link>
            </div>
            <div className="w-[25%] flex items-center gap-[16px] justify-end">
                <Link target="_blank" className="text-gray-800 font-[500] px-[6px] py-[10px] text-[15px] rounded-full" href={"https://toolbird.gazellateam.com/auth/login"}>Log In</Link>
                <Link className="bg-main text-white text-center px-[24px] py-[10px] text-[15px] rounded-full font-[500]" href={"/"}>Join Waitlist</Link>
            </div>
            
        </div>
    </nav>
    )
}