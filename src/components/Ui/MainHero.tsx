import { Reveal } from "../Animations/Reveal";
import { useRouter } from 'next/router'
import Link from "next/link";
import WaitlistInput from "./WaitlistInput";

export default function MainHero(props:any) {
    const router = useRouter()
    const path = router.pathname
    return (
        <section className={path === "/" ? "bg-slate-50 w-full pt-[170px] pb-[480px]":"bg-[url(/bgs/hero.svg)] bg-cover bg-center w-full pt-[170px] pb-[480px]"}>
            <div className="text-gray-800 w-[90%] mx-auto max-w-[1200px] flex items-center">
                <div>
                    <Reveal delayTime={0}>
                        <h1 className={path === "/" ? "font-[500] headingText text-[65px] leading-[65px] w-[100%] mb-[20px]":"font-[500] tracking-tight text-[70px] leading-[80px] mb-[14px]"}>{props.heading}<span className="text-main">.</span></h1>
                    </Reveal>
                    <Reveal delayTime={0}>
                        <p className="font-[300] text-[18px] w-[100%] text-gray-600 max-w-[1000px]">{props.paragraph}</p>
                    </Reveal>
                </div>
                <div className="w-[70%]">
                    <img className="w-[140px] select-none" src="/arrows/arrow.svg"></img>
                </div>
            </div>
        </section>
    )
}