import { CircleCheck } from 'lucide-react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export default function CustomTracking() {
	return (
		<section className="pt-12 pb-8">
			<div className="w-[86%] mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div className="bg-white border paragraph text-center rounded-[25px] border-gray-600/10">
					<img
						className="h-full w-full object-cover rounded-[25px]"
						src="/showcases/custom-tracking.webp"
					></img>
				</div>
				<div
					style={{
						background:
							'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)',
					}}
					className="flex py-24 relative flex-col gap-6"
				>
					<div className="flex flex-col gap-3">
						<p className="font-[Caveat] text-main text-2xl">
							Custom event tracking
						</p>
						<h2 className="text-4xl max-w-md font-semibold text-gray-800">
							Track custom events
						</h2>
					</div>
					<p className="paragraph text-lg text-gray-600 max-w-md mb-4">
						With Toolbird you can track engagement
						with specific elements on your website.
						Use custom event tracking to analyze and optimize
						your website to perfection.

					</p>
					<div className="flex flex-col paragraph gap-5">
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Quick setup
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Unlimited components
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Visual data
							</p>
						</div>
					</div>
					<div className="flex mt-6">
						<Link
							href="https://app.toolbird.io/auth/register"
							className="bg-main hover:bg-main/80 transition-all paragraph font-medium text-sm text-white px-5 py-3 rounded-full"
						>
							Start 14-day free trial
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
