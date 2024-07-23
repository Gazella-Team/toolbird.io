import Layout from '@/components/Layout'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'
import CurvePageIntro from '@/components/CurvePageIntro'

export default function Pricing() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<Meta title={`Pricing - Toolbird.io`} />
			<CurvePageIntro
				hook="Flexible pricing"
				highlighted=""
				heading="Pricing for everyone"
				paragraph="We offer plans that suit any project. Get started within a few minutes."
			>
			<PricingTable />
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
