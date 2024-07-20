import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import { useEffect } from 'react'
import { annotate } from 'rough-notation'

export default function Hero03({children}:{children:React.ReactNode}) {
	return (
        <>
        <section className="py-[50px] pt-[60px] sm:pt-[80px] bg-[url(/curve.svg)] bg-center bg-cover min-h-[540px] sm:min-h-[800px]">
			<div className="w-[86%] mx-auto max-w-6xl flex flex-col text-center gap-4">
				<Reveal delayTime={0}>
					<p className="font-[Caveat] text-main mb-4 text-3xl">
						The all-in-one toolbox
					</p>
				</Reveal>
				<Reveal delayTime={0}>
					<h1 className="text-[40px] leading-[120%] md:text-[50px] xl:text-6xl xl:leading-[120%] max-w-[1000px] mx-auto font-bold text-gray-800">
						Easy to use and privacy-friendly Google Analytics alternative
					</h1>
				</Reveal>
                <Reveal delayTime={0.1}>
				    <p className="text-base paragraph md:text-lg mt-4 xl:text-lg font-regular max-w-xl mx-auto text-gray-600">
                        Toolbird is privacy-focused, lightweight and intuitive web analytics, allowing you to track analytics of all traffic going through your website.
					</p>
				</Reveal>
                <RevealLight delayTime={0.4}>
					<div className="flex items-center paragraph relative justify-center gap-3 mt-4 font-medium">
						<Link
							href="https://app.toolbird.io/auth/register"
							className="bg-main border-[3px] border-main font-medium text-sm text-white px-4 py-2 rounded-full"
						>
							Get started for free
						</Link>
						<Link
							href="https://app.toolbird.io/share/toolbird.io"
							className="bg-gray-800 border-[3px] border-gray-800 font-medium text-sm text-white px-4 py-2 rounded-full"
						>
							View live demo
						</Link>
					</div>
				</RevealLight>
			</div>
		</section>
        <div className='mt-[-280px]'>
            {children}
        </div>
        </>
	)
}
