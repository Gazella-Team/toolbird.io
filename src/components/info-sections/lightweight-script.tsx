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
							Our lightweight script don&apos;t compromise on
							speed
						</h2>
					</div>
					<p className="paragraph text-lg text-gray-600 max-w-md mb-4">
						Get a detailed reporting tab for each client and also
						all client reporting data in one easy dashboard. No more
						switching between platforms.
					</p>
					<div className="flex flex-col paragraph gap-5">
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Less than 4kb
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Less than 4kb
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaCheckCircle size={20} className="text-main" />
							<p className="text-lg text-gray-600">
								Less than 4kb
							</p>
						</div>
					</div>
					<div className="flex mt-6">
						<Link
							href="https://app.toolbird.io/auth/register"
							className="bg-main paragraph border-[3px] border-main font-normal text-sm text-white px-4 py-2 rounded-full"
						>
							Get started for free
						</Link>
					</div>
				</div>
				<div className="bg-white border paragraph text-center rounded-[25px] border-gray-600/10">
					<img
						className="h-full w-full object-cover rounded-[25px]"
						src="/showcases/speed.webp"
					></img>
					<div
						className="absolute inset-0 h-full rounded-[25px]"
						style={{
							background:
								'linear-gradient(0deg, rgba(255,255,255,0.8225884103641457) 0%, rgba(255,255,255,0) 1%, rgba(255,255,255,0.0441570378151261) 100%)',
						}}
					></div>
				</div>
			</div>
		</section>
	)
}
