import { Reveal } from "./Animations/Reveal"

type DefaultHeroProps = {
    heading:string,
    description:string
}
 
export default function DefaultHero(props:DefaultHeroProps) {
    return (
        <section className="bg-[url(/bgs/curve.svg)] min-h-[500px] bg-bottom bg-cover pt-36 pb-20 mb-20">
            <div className="text-white w-[96%] mx-auto max-w-[1300px] flex flex-col gap-3">
                <h1 className="font-semibold text-6xl">{props.heading}</h1>
            </div>
        </section>
    )
}