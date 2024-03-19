import { Reveal } from "../Animations/Reveal";
import { useRouter } from 'next/router'
import Link from "next/link";
import WaitlistInput from "./WaitlistInput";

export default function MainHero(props:any) {
    const router = useRouter()
    const path = router.pathname
    return (
        <section className={path === "/" ? "bg-slate-50 w-full pt-[170px] pb-[480px]":"bg-[url(/bgs/hero.svg)] bg-cover bg-center w-full pt-[170px] pb-[480px]"}>
            <div className="text-gray-800 text-center w-[94%] mx-auto max-w-[1100px]">
                <Reveal delayTime={0}>
                    <h1 className={path === "/" ? "font-[500] text-[65px] leading-[75px] w-[60%] mx-auto mb-[14px]":"font-[500] tracking-tight text-[70px] leading-[80px] mb-[14px]"}>{props.heading}</h1>
                </Reveal>
                <Reveal delayTime={0}>
                    <p className="font-[200] text-[18px] w-[80%] mx-auto text-gray-600 max-w-[1000px]">{props.paragraph}</p>
                </Reveal>
                {path === "/" ? 
                <Reveal delayTime={0.2}>
                    <div className="flex items-center justify-center gap-[16px] mt-[50px]">
                        <WaitlistInput />
                    </div>
                </Reveal>
                :
                null}
            </div>
        </section>
    )
}