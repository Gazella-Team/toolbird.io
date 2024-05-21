import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import ToolHero from '@/components/toolpage/ToolHero'
import PricingTable from '@/components/pricingtable'
import SectionIntro from '@/components/SectionIntro'
import Features from '@/components/toolpage/Features'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import DashboardDisplay from '@/components/dashboarddisplay'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'

export default function Analytics() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Analytics"
				highlighted="your traffic"
				heading="Privacy friendly website analytics of"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere."
			/>
			<DashboardDisplay src={"/showcases/analysis.webp"} />
			<SectionIntro heading='Powerful insights' description='Discover, collaborate, and grow, our all-in-one platform empowers you to build.' hook='Features Included'>
				<BentoGridComponent />
			</SectionIntro>
		</Layout>
	)
}
