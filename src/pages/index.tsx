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
import { CheckCircle2, Webhook } from 'lucide-react'

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
				description="Track where your visitors come from, what device they are using and where in the world they are located."
				hook="Features Included"
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
								High Commission Structure
							</h2>
							<p className="text-gray-600">
							For every paid customer you refer, you earn one of the best percentages in the industry of the sale.
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
								Reliable Monthly Payouts
							</h2>
							<p className="text-gray-600">
								We offer reliable monthly payouts through PayPal and Wire to ensure timely payments.					
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
								Ready-to-use resources
							</h2>
							<p className="text-gray-600">
								Our program comes with ready-to-use templates and scripts to get you started the best way possbile.					
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
								User-friendly dashboard
							</h2>
							<p className="text-gray-600">
								Track your clicks, conversions, and commissions with ease thorugh our intuitive dashboard.						
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
								Lifetime income
							</h2>
							<p className="text-gray-600">
								Our commisions are lifetime recurring, meaning your earnings stay with you monthly and forever.
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
								Affiliate community
							</h2>
							<p className="text-gray-600">
								Get access to an affiliate community providing instant help and resources to any question.
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
								Dedicated support
							</h2>
							<p className="text-gray-600">
							Our team will help you through every step. They&apos;ll help you understand the product to promote it well.							</p>
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
								Referral visibility
							</h2>
							<p className="text-gray-600">
							Get real-time status of your referrals in your dashboard. We use a cookie life of 60 days.							
							</p>
						</div>
					</div>
				</div>
			</BlurSection>
		</Layout>
	)
}
