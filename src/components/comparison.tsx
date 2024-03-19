import { RevealLight } from "./Animations/RevealLight";
import SectionStarter from "./Ui/SectionStarter";

const comparisonData = [
    {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(75 85 99)" className="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
  </svg>
  , heading:"Analytics", image:"/showcases/repwaitlist.svg", description: "Privacy-friendly web-analytics tool", replaces:"/replaced/plausible.svg"},
  {icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(75 85 99)" className="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

, heading:"Status Page", image:"/showcases/repintegrations.svg", description: "Keep track and monitor your services", replaces:"/replaced/openstatus.svg"},
{icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(75 85 99)" className="w-8 h-8">
<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>
, heading:"Analytics", image:"/showcases/repwaitlist.svg", description: "Privacy-friendly web-analytics tool", replaces:"/replaced/plausible.svg"},
{icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(75 85 99)" className="w-8 h-8">
<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>

, heading:"Status Page", image:"/showcases/repintegrations.svg", description: "Keep track and monitor your services", replaces:"/replaced/openstatus.svg"},
]

export default function Comparison() {
    return (
        <section className="py-[100px]">
            <div className="w-[90%] mx-auto max-w-[1200px]">
                <SectionStarter heading="All tools in one place" paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy." />
                <div className="grid grid-cols-2 gap-[20px]">
                    {comparisonData.map((v, index) => <ComparisonCard key={index} Obj={v} />)}
                </div>
            </div>
        </section>
    )
}
//
const ComparisonCard = (props:any) => {
    return (
        <RevealLight delayTime={0.3}>
            <div className="flex flex-col border-[1px] rounded-[14px] text-left p-[30px]">
                <div className="flex items-center gap-[20px] mb-[40px]">
                    <div className="bg-gray-100 p-[14px] rounded-[14px]">
                        {props.Obj.icon}
                    </div>
                    <div>
                        <h1 className="font-[300] mb-[0px] text-gray-800 text-[20px] headingText">{props.Obj.heading}</h1>
                        <p className="font-[300] text-gray-600">{props.Obj.description}</p>
                    </div>
                </div>
                <img className="rounded-[14px] mb-[40px] border-[1px]" src={props.Obj.image}></img>
                <div className="flex items-center gap-[10px]">
                    <h2 className="font-[300] text-gray-800">Replaces:</h2>
                    <img className="w-[100px]" src={props.Obj.replaces}></img>
                </div>
            </div>
        </RevealLight>
    )
}