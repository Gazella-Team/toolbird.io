import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'
import { HiCurrencyDollar } from 'react-icons/hi'
import Tooltip from './ui/Tooltip'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import PLANS from './pricing/plans'
import http from '@/queries/http'

export default function PricingTable() {
	const [value, setValue] = useState(0)
	const [submitting, setSubmitting] = useState(false)
	const selectedPlan = PLANS[value]

	return (
		<section className="mb-24">
			<div className="mx-auto paragraph flex items-center w-[86%] justify-between max-w-6xl bg-white rounded-3xl border p-10 border-gray-600/10 shadow-clean mb-6">
				<div className="flex pb-0 w-full items-center justify-center gap-4">
					<h2 className="text-xl font-normal text-gray-600">
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
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl w-[86%] gap-14 lg:gap-6">
				<div
					style={{
						background:
							'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
					}}
					className="bg-white relative rounded-3xl border-2 border-main text-gray-800 shadow-main/30 shadow-clean"
				>
					<div>
						<div className="flex flex-col gap-2 pb-12 px-7 pt-10 bg-white rounded-t-3xl">
							<div className="flex items-center gap-3 bg-white">
								<div className="bg-main rounded-full h-4 w-4"></div>
								<h3 className="font-semibold text-2xl text-gray-800">
									Pro
								</h3>
							</div>
							<p className="text-gray-600 paragraph">
								For ambitious websites
							</p>
						</div>
						<div className="px-7 pb-14 bg-white">
							<h1 className="text-5xl font-bold">
								${selectedPlan.monthlyPrice}
								<span className="ml-1 text-base paragraph font-[400] text-gray-600">
									/ month
								</span>
							</h1>
						</div>
						<div className="bg-slate-50 border-y py-5 px-7 border-gray-600/10">
							<div className="flex">
								<Link
									target="_blank"
									href="https://app.toolbird.io/auth/register"
									className="bg-main text-center paragraph w-full border-[3px] border-main text-sm font-medium text-white px-6 py-2 rounded-full"
								>
									Start 14-day free trial
								</Link>
							</div>
						</div>
						<div className="paragraph flex flex-col gap-6">
							<h3 className="pt-7 px-8 pb-0 text-gray-500 font-medium">
								Everything in Hobby, plus:
							</h3>
							<div className="py-10 pt-2 px-8 flex flex-col gap-4 font-regular">
								<div className="flex items-center gap-4">
									<FaCheckCircle />
									<button data-state="closed">
											<h2 className="text-gray-600">
												{selectedPlan.priceId} monthly
												pageviews
											</h2>
										</button>
									</div>
									<div className="flex items-center gap-4">
									<FaCheckCircle />
									<h2 className="text-gray-600">
											{selectedPlan.websites}
										</h2>
									</div>
									<div className="flex items-center gap-4">
									<FaCheckCircle />
									<h2 className="text-gray-600">
											{selectedPlan.dataRetention} data
											retention
										</h2>
									</div>
									<div className="flex items-center gap-4">
										<FaCheckCircle />
										<h2 className="text-gray-600">
											{selectedPlan.seats}
										</h2>
									</div>
								</div>
						</div>
					</div>
				</div>
				<div className="bg-white relative rounded-3xl border border-gray-600/10 text-gray-800 shadow-clean">
					<div className="flex relative flex-col gap-2 pb-12 px-7 pt-10">
						<div className="flex items-center gap-3">
							<div className="bg-gray-800 rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">
								Enterprise
							</h3>
						</div>
						<p className="text-gray-600 paragraph">
							For larger organizations
						</p>
					</div>
					<div className="px-7 pb-14">
						<h1 className="text-5xl font-bold">Let&apos;s talk</h1>
					</div>
					<div className="bg-slate-50 paragraph border-y py-5 px-7 border-gray-600/10">
						<div className="flex">
							<Link
								target="_blank"
								href="https://cal.com/lasseosmann/toolbird-demo"
								className="bg-gray-800 text-center w-full border-[3px] border-gray-800 text-sm font-medium text-white px-6 py-2 rounded-full"
							>
								Contact sales
							</Link>
						</div>
					</div>
					<div className='paragraph flex flex-col gap-6'>
						<h3 className="p-7 pb-0 paragraph text-gray-500 font-medium">
							Custom specifications:
						</h3>
						<div className="py-10 pt-2 px-8 flex flex-col gap-4 font-regular">
								<div className="flex items-center gap-4">
									<FaCheckCircle />
									<button data-state="closed">
											<h2 className="text-gray-600">
												Unlimited monthly
												pageviews
											</h2>
										</button>
									</div>
									<div className="flex items-center gap-4">
									<FaCheckCircle />
									<h2 className="text-gray-600">
											Unlimited websites
										</h2>
									</div>
									<div className="flex items-center gap-4">
									<FaCheckCircle />
									<h2 className="text-gray-600">
											Unlimited data
											retention
										</h2>
									</div>
									<div className="flex items-center gap-4">
										<FaCheckCircle />
										<h2 className="text-gray-600">
											Unlimited seats
										</h2>
									</div>
							</div>
					</div>
				</div>
			</div>
		</section>
	)
}
