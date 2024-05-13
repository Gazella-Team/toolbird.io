import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'

interface PageIntroProps {
	heading: string
	paragraph: string
	highlighted: string
	hook: string
}

export default function PageIntro(props: PageIntroProps) {
	return (
		<section className="py-[70px] pb-[80px] relative">
			<div className='flex items-center justify-center'>
				<div className="absolute h-[500px] w-[700px] overflow-hidden" style={{background: "radial-gradient(circle, rgba(94,23,235,0.15552958683473385) 0%, rgba(255,255,255,0) 60%)"}}></div>
			</div>
			<div className="w-[96%] mx-auto max-w-[1000px] flex flex-col text-center">
				<Reveal delayTime={0.1}>
					<p className="font-[Caveat] text-main mb-4 text-3xl">
						{props.hook}
					</p>
				</Reveal>
				<Reveal delayTime={0.1}>
					<h1 className="text-[30px] mb-4 md:text-[40px] xl:text-[50px] leading-[110%] font-bold text-gray-800">
						{props.heading}{' '}
						{props.highlighted && (
							<span className="text-main heading">
								{props.highlighted}
							</span>
						)}
					</h1>
				</Reveal>
				<Reveal delayTime={0.2}>
					<p className="text-base md:text-lg xl:text-xl font-regular max-w-[400px] mx-auto text-gray-600">
						{props.paragraph}
					</p>
				</Reveal>
			</div>
		</section>
	)
}
