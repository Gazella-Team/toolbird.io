import { Reveal } from "./Animations/Reveal"

type DefaultHeroProps = {
    heading:string,
    description:string
}
 
export default function DefaultHero(props:DefaultHeroProps) {
    return (
        <section className="bg-main pt-36 pb-20 mb-20">
            <div className="text-white w-[96%] mx-auto max-w-[1300px] flex flex-col gap-5">
                <Reveal delayTime={0}>
                    <h1 className="font-semibold text-6xl">{props.heading}</h1>
                </Reveal>
                <Reveal delayTime={0.1}>
                    <p className="max-w-3xl text-lg">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}