import Link from 'next/link'
import DashboardDisplay from './dashboarddisplay'
import Features from './features'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import NiceModal from '@ebay/nice-modal-react'
import JoinWaitlistModal from './modals/JoinWaitlistModal'
import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
	return (
		<section className="py-[100px] pb-[0px]">
			<div className="w-[86%] mx-auto max-w-6xl flex flex-col gap-5 text-center">
				<Reveal delayTime={0.1}>
					<p className="font-[Caveat] text-main text-3xl">
						#1 toolbox for SaaS developers
					</p>
				</Reveal>
				<Reveal delayTime={0.1}>
					<h1 className="text-4xl md:text-5xl xl:text-6xl max-w-[800px] mx-auto leading-[110%] font-black text-gray-800 heading">
						The ultimate toolbox for SaaS developers
					</h1>
				</Reveal>
				<Reveal delayTime={0.2}>
					<p className="text-base md:text-lg xl:text-xl font-regular max-w-[600px] mx-auto w-[85%] text-gray-600">
						Manage web analytics, cron jobs, monitoring, feature
						flags, waitlists, client feedback and more within just
						one platform. Toolbird makes building tech products
						easier
					</p>
				</Reveal>
				<RevealLight delayTime={0.4}>
					<div className="flex items-center justify-center gap-3 mt-4 font-medium">
						<button
							onClick={() => NiceModal.show(JoinWaitlistModal)}
							className="bg-main font-semibold border-[3px] border-main text-white text-sm px-6 py-2 rounded-full"
						>
							Join waitlist
						</button>
						<ScrollLink
							smooth={true}
							to="products"
							className="bg-transparent font-semibold border-[3px] border-main text-main text-sm px-6 py-2 rounded-full hover:bg-main hover:text-white transition-all"
							href={''}
						>
							View features
						</ScrollLink>
					</div>
				</RevealLight>
			</div>
		</section>
	)
}
