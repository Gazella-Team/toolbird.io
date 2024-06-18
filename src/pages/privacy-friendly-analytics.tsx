import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/PageIntro'

export default function PrivacyFriendlyAnalytics() {
	return (
		<Layout white={true}>
            <Meta title={`Privacy-friendly Analytics - Toolbird.io`} />
			<PageIntro
				hook="Google Analytics alternative"
				highlighted="analytics"
				heading="Privacy-friendly website"
				paragraph="We offer plans that suit any project. Start for free today, no credit card required."
			/>
            <section
				className="border-y paragraph border-gray-600/10 py-16"
				style={{
					background:
						'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
				}}
			>
				<div className="mx-auto w-[86%] max-w-2xl flex flex-col gap-16 leading-8 text-gray-600">
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							To Whom Does This Policy Apply
						</h2>
						<p>
							This Privacy Policy applies to customers and site
							visitors. Each customer is responsible for posting
							its own terms, conditions, and privacy policies, and
							ensuring compliance with all applicable laws and
							regulations.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							Changes To This Privacy Policy
						</h2>
						<p>
							This Privacy Policy may change from time to time, as
							our Platform and our business may change. Your
							continued use of the Platform after any changes to
							this Privacy Policy indicates your agreement with
							the terms of the revised Privacy Policy.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							What Information Do We Collect
						</h2>
						<p>
							We collect information directly from you when you
							provide it to us explicitly on our Site. We do not
							use third-party cookies on our Site.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							How To Contact Us
						</h2>
						<p>
							For privacy-related questions, please contact us at
							contact@toolbird.io
						</p>
					</div>
				</div>
			</section>
		</Layout>
	)
}
