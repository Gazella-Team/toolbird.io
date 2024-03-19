import { Reveal } from "../Animations/Reveal"

export default function SectionStarter(props:any) {
    return (
        <section>
            <div>
                <Reveal delayTime={0.3}>
                    <h1 className="font-[300] text-gray-800 text-[40px] headingText">{props.heading}<span className="text-main text-[80px]">.</span></h1>
                </Reveal>
                <Reveal delayTime={0.3}>
                    <p className="font-[300] text-[18px] w-[60%] text-gray-600 mb-[50px]">{props.paragraph}</p>
                </Reveal>
            </div>
        </section>
    )
}