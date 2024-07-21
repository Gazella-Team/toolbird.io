import HeroDashboard from '@/components/HeroDashboard'
import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import BlurSection from '@/components/blur-section'
import CustomerSlider from '@/components/customer-slider'
import AnalyticsFeatureBox from '@/components/feature-boxes/analytics-feature-box'
import Hero from '@/components/hero'
import Hero02 from '@/components/hero-02'
import Hero03 from '@/components/hero-03'
import Mission from '@/components/mission'
import PricingTable from '@/components/pricingtable'
import Tooltip from '@/components/ui/Tooltip'
import { CheckCircle2, Webhook } from 'lucide-react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export default function Home() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<div className='hidden lg:block'>
				<Hero03>
					<HeroDashboard />
				</Hero03>
			</div>
			<div className='block lg:hidden'>
				<Hero />
				<HeroDashboard />
			</div>
			<SectionIntro
				topMargin={true}
				heading="Powerful insights"
				description="Track where your visitors come from, what device they are using and where in the world they are located."
				hook="Features Included"
			>
				<BentoGridComponent />
			</SectionIntro>
			<SectionIntro
				topMargin={true}
				heading="People 💜 Toolbird"
				description="Read why people from various industries prefer using Toolbird for web analytics."
				hook="Wall Of Love"
			>
				{" "}
			</SectionIntro>
			<CustomerSlider />
			<BlurSection
					bottomMargin={false}
					heading="Why Toolbird is the best analytics provider"
					hook="Supercharge Your Web Analytics"
				>
				<div className="grid grid-cols-1 lg:grid-cols-2 paragraph gap-x-32 gap-y-16 w-[90%] mt-12 mx-auto">
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Privacy Focused
							</h2>
							<p className="text-gray-600">
							We have your visitors in mind. All Toolbird Analytics is compliant with GDPR, CCPA and PECR.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Fast and Intuitive
							</h2>
							<p className="text-gray-600">
								Our intuitive dashboard allows your to get the entire overview of your analytics at one glance.		
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Lightweight Script
							</h2>
							<p className="text-gray-600">
								Many analytics scripts slow down your page. Toolbird is made as light as possible, to ensure web-speed.			
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								1 minute setup
							</h2>
							<p className="text-gray-600">
								No advanced onboardings. With Toolbird you can start collecting data within minutes.					
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								100% Data Ownership
							</h2>
							<p className="text-gray-600">
								When using Toolbird you own all of your data. We won&apos;t use or sell your data to third-parties.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Flat Monthly Fee
							</h2>
							<p className="text-gray-600">
								No billing surprises. With Toolbird you get unlimited analytics for as little as $9/month.
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Dedicated Support
							</h2>
							<p className="text-gray-600">
								Our dedicated team provides 24/7 live support to any question or trouble you may encounter.						
							</p>
						</div>
					</div>
					<div className="flex gap-4">
						<div className="w-10">
							<CheckCircle2
								fill="rgb(40 40 51)"
								className="text-white"
								size={30}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="font-semibold text-xl text-gray-800">
								Advanced Analytics
							</h2>
							<p className="text-gray-600">
								Toolbird matches beyond the standards of the latest technology within the web analytics industry.					
							</p>
						</div>
					</div>
				</div>
			</BlurSection>
			<SectionIntro
				topMargin={true}
				heading="Get unlimited analytics for one monthly flat fee"
				description=""
				hook="Pricing For Everyone"
			>
				<section className="mb-24 mt-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-6">
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
										$9
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
								<div className="paragraph">
									<h3 className="pt-7 px-8 pb-0 text-gray-500 font-medium">
										Everything in Hobby, plus:
									</h3>
									<div className="py-10 pt-6 px-8 flex flex-col gap-6 font-regular">
										<div className="flex items-center gap-4">
											<FaCheckCircle
												size={18}
												className="text-main"
											/>
											<Tooltip
												jsx={
													<span>
														$10 per additional user{' '}
													</span>
												}
											>
												<h2 className="text-gray-600 underline decoration-dotted hover:cursor-help">
													3 team seats
												</h2>
											</Tooltip>
										</div>
										<div className="flex items-center gap-4">
											<FaCheckCircle
												size={18}
												className="text-main"
											/>
											<h2 className="text-gray-600">
												Custom support
											</h2>
										</div>
										<div className="flex items-center gap-4">
											<FaCheckCircle
												size={18}
												className="text-main"
											/>
											<h2 className="text-gray-600">
												Unlimited data retention
											</h2>
										</div>
										<div className="flex items-center gap-4">
											<FaCheckCircle
												size={18}
												className="text-main"
											/>
											<h2 className="text-gray-600">
												100.000 page views*
											</h2>
										</div>
										<div className="flex items-center gap-4">
											<FaCheckCircle
												size={18}
												className="text-main"
											/>
											<h2 className="text-gray-600">
												10.000 custom events*
											</h2>
										</div>
										<div className="flex items-center gap-4">
											<FaCheckCircle
												size={18}
												className="text-main"
											/>
											<h2 className="text-gray-600">
												10 websites
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
								<h1 className="text-5xl font-bold">
									Let&apos;s talk
								</h1>
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
							<div>
								<h3 className="p-7 pb-0 paragraph text-gray-500 font-medium">
									Custom specifications:
								</h3>
								<div className="py-10 pt-6 px-7 paragraph flex flex-col gap-6">
									<div className="flex items-center gap-4">
										<FaCheckCircle
											size={18}
											className="text-gray-800"
										/>
										<h2 className="text-gray-800">Custom seats</h2>
									</div>
									<div className="flex items-center gap-4">
										<FaCheckCircle
											size={18}
											className="text-gray-800"
										/>
										<h2 className="text-gray-800">
											Prioritized support
										</h2>
									</div>
									<div className="flex items-center gap-4">
										<FaCheckCircle
											size={18}
											className="text-gray-800"
										/>
										<h2 className="text-gray-800">
											Unlimited page views
										</h2>
									</div>
									<div className="flex items-center gap-4">
										<FaCheckCircle
											size={18}
											className="text-gray-800"
										/>
										<h2 className="text-gray-800">
											Unlimited custom events
										</h2>
									</div>
									<div className="flex items-center gap-4">
										<FaCheckCircle
											size={18}
											className="text-gray-800"
										/>
										<h2 className="text-gray-800">
											Unlimited websites
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</SectionIntro>
		</Layout>
	)
}
