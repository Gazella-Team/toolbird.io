import { useState } from 'react'
import PLANS from './plans'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Check = () => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			className="text-main"
			height="18"
			width="18"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
		</svg>
	)
}

export default function PricingSliderBox() {
	const [value, setValue] = useState(0)

	const selectedPlan = PLANS[value]
	return (
		<div>
			<div className="flex flex-col p-12 pb-0 w-full items-center justify-center gap-4">
				<h2 className="text-2xl font-normal text-gray-600">
					Up to{' '}
					<span className="text-gray-800 font-semibold">
						{selectedPlan.priceId}
					</span>{' '}
					monthly pageviews
				</h2>
				<div className="w-full mx-auto max-w-lg flex items-center justify-between gap-4">
					<p className="text-sm text-gray-700">10K</p>
					<Slider
						value={value}
						min={0}
						max={PLANS.length - 1}
						onChange={(value) => setValue(value as number)}
					/>
					<p className="text-sm text-gray-700">5M+</p>
				</div>
			</div>
			<div className="flex pb-10 items-center justify-center mt-8">
				<div
					className="w-full max-w-[400px] bg-white relative rounded-3xl border-2 border-main text-gray-800 shadow-main/30 shadow-clean"
					style={{
						background:
							'linear-gradient(329deg, rgb(244, 244, 244) 0%, rgb(250, 248, 255) 17%, rgb(247, 247, 247) 37%, rgb(253, 252, 255) 67%, rgb(252, 251, 255) 94%);',
					}}
				>
					<div>
						<div className="flex flex-col gap-6 p-6 bg-white rounded-t-3xl">
							<div className="flex items-center gap-2 bg-white">
								<div className="bg-main rounded-full h-4 w-4"></div>
								<h3 className="font-semibold text-2xl text-gray-800">
									Pro
								</h3>
							</div>
							<h1 className="text-5xl font-extrabold">
								${selectedPlan.monthlyPrice}
								<span className="ml-1 text-base paragraph font-[400] text-gray-600">
									/ month
								</span>
							</h1>
						</div>
						<div className="bg-slate-50 border-y py-3 px-7 border-gray-600/10">
							<div className="flex">
								<button className="bg-main transition-all text-center paragraph w-full hover:bg-main/80 text-sm font-semibold text-white px-6 py-2 rounded-full transiton-all">
									Start 14-day free trial
								</button>
							</div>
						</div>
						<div className="paragraph">
							<h3 className="pt-5 pb-2 px-8 text-gray-500 font-medium">
								Features
							</h3>
							<div className="py-10 pt-2 px-8 flex flex-col gap-3 font-regular">
								<div className="flex items-center gap-4">
									<Check />
									<button data-state="closed">
										<h2 className="text-gray-600">
											{selectedPlan.priceId} monthly
											pageviews
										</h2>
									</button>
								</div>
								<div className="flex items-center gap-4">
									<Check />
									<h2 className="text-gray-600">
										{selectedPlan.websites}
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<Check />
									<h2 className="text-gray-600">
										{selectedPlan.dataRetention} data
										retention
									</h2>
								</div>
								<div className="flex items-center gap-4">
									<Check />
									<h2 className="text-gray-600">
										{selectedPlan.seats}
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
