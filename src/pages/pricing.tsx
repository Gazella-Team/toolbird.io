import Layout from '@/components/Layout'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'
import CurvePageIntro from '@/components/CurvePageIntro'
import PricingSliderBox from '@/components/pricing/PricingSliderBox'

export default function Pricing() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<Meta title={`Pricing - Toolbird.io`} />
			<CurvePageIntro
				hook="A price for every project"
				highlighted=""
				heading="Pricing"
				paragraph="Choose the plan that fits your needs. All plans come with a 14-day free trial."
			>
				<PricingSliderBox />
			</CurvePageIntro>
			{
				<BlurSection
					bottomMargin={false}
					heading="Get all your answers"
					hook="Frequently Asked Questions"
				>
					<PricingFAQ />
				</BlurSection>
			}
		</Layout>
	)
}
