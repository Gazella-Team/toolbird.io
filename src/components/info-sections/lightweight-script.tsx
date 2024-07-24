import { CircleCheck } from 'lucide-react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export default function LightweightScript() {
	return (
		<section className="pt-32 pb-8">
			<div className="w-[86%] mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div
					style={{
						background:
							'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)',
					}}
					className="flex py-24 flex-col gap-6"
				>
					<div className="flex flex-col gap-3">
						<p className="font-[Caveat] text-main text-2xl">
							No website slowdowns
						</p>
						<h2 className="text-4xl font-semibold text-gray-800 max-w-md">
							Lightweight script
						</h2>
					</div>
					<p className="paragraph text-lg text-gray-600 max-w-md mb-4">
						Our script is less than 4kb in size and is implementable
						on any website. It doesn&apos;t slow down your website
						and is perfect for any website that needs tracking.
					</p>
					<div className="flex flex-col paragraph gap-5">
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Less than 4kb in size
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Implementable on any website
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								2 minute setup
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
				<div className="bg-white border paragraph text-center rounded-[25px] border-gray-600/10">
					<img
						className="h-full w-full object-cover rounded-[25px]"
						src="/showcases/speed.webp"
					></img>
				</div>
			</div>
		</section>
	)
}
