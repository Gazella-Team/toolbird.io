import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import Goals from '@/components/goals'
import Stats from '@/components/stats'

export default function About() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="By developers, for developers"
				highlighted="startup"
				heading="From highschool to new"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere."
			/>
		</Layout>
	)
}
