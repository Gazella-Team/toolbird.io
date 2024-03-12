import Link from "next/link"

export default function WaitlistInput() {
    return (
        <div className="bg-gray-200 h-[50px] flex items-center rounded-full">
            <div className="flex items-center p-[4px]">
                <input className="h-[40px] font-[300] placeholder:text-[15px] placeholder:text-gray-600 flex items-center px-[30px] rounded-full" placeholder="Your email" />
                <Link className="h-[40px] bg-main text-[15px] text-white font-[300] px-[30px] flex rounded-full items-center justify-center w-[140px] ml-[-40px]" href={"/waitlist"}>Sign Up</Link>
            </div>
    </div>
    )
}