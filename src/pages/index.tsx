import HeroDashboard from '@/components/HeroDashboard'
import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import SecondBentoGridComponent from '@/components/bento-grids/landing-bento-grid'
import BlurSection from '@/components/blur-section'
import CustomerSlider from '@/components/customer-slider'
import AnalyticsFeatureBox from '@/components/feature-boxes/analytics-feature-box'
import Hero from '@/components/hero'
import Hero02 from '@/components/hero-02'
import Hero03 from '@/components/hero-03'
import CustomTracking from '@/components/info-sections/custom-tracking'
import LightweightScript from '@/components/info-sections/lightweight-script'
import Mission from '@/components/mission'
import PricingSliderBox from '@/components/pricing/PricingSliderBox'
import PricingTable from '@/components/pricingtable'
import Tooltip from '@/components/ui/Tooltip'
import { CheckCircle2, Webhook } from 'lucide-react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export default function Home() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<div className="hidden lg:block">
				<Hero03>
					<HeroDashboard />
				</Hero03>
			</div>
			<div className="block lg:hidden">
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
				heading="Detailed analytics"
				description="Go in depth with analyzing your web-visitors engagement and behaviour."
				hook="More Than Just Analytics"
			>
				<SecondBentoGridComponent />
			</SectionIntro>
			{/*
			<SectionIntro
				topMargin={true}
				heading="People 💜 Toolbird"
				description="Read why people from various industries prefer using Toolbird for web analytics."
				hook="Wall Of Love"
			>
				{' '}
			</SectionIntro>
			<CustomerSlider />
			 */}
			<LightweightScript />
			<CustomTracking />
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
								We have your visitors in mind. All Toolbird
								Analytics is compliant with GDPR, CCPA and PECR.
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
								Our intuitive dashboard allows your to get the
								entire overview of your analytics at one glance.
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
								Many analytics scripts slow down your page.
								Toolbird is made as light as possible, to ensure
								web-speed.
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
								No advanced onboardings. With Toolbird you can
								start collecting data within minutes.
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
								When using Toolbird you own all of your data. We
								won&apos;t use or sell your data to
								third-parties.
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
								No billing surprises. With Toolbird you get
								unlimited analytics for as little as $9/month.
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
								Our dedicated team provides 24/7 live support to
								any question or trouble you may encounter.
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
								Toolbird matches beyond the standards of the
								latest technology within the web analytics
								industry.
							</p>
						</div>
					</div>
				</div>
			</BlurSection>
			<SectionIntro
				topMargin={true}
				heading="Pricing"
				description=""
				hook="A price for everyone"
			>
				<section className="">
					<PricingSliderBox />
				</section>
			</SectionIntro>
		</Layout>
	)
}
