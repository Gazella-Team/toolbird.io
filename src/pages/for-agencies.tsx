import Layout from '@/components/Layout'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'
import CurvePageIntro from '@/components/CurvePageIntro'
import Link from 'next/link'

export default function ForAgencies() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<Meta title={`Toolbird: A web analytics tool to help agenices and freelancers gain more visitors and increase conversion rates`} />
			<section
				style={{
					background:
						'linear-gradient(0deg, rgba(255,255,255,0.7105435924369747) 0%, rgba(255,255,255,0.8898153011204482) 12%, rgba(255,255,255,0.9514399509803921) 22%, rgba(255,255,255,1) 100%)',
				}}
				className="py-24"
			>
				<div className="w-[86%] text-gray-800 flex flex-col gap-10 paragraph mx-auto max-w-xl">
					<h2 className="text-5xl font-semibold">
						Toolbird: A fast, privacy-friendly and intuitive web analytics tool for freelancers and agencies.
					</h2>
					<div>
						<p className="text-gray-600">
                            As an agency or a freelancer, you can greatly benefit from tracking and analyzing the traffic going through your website. Not only does it help you understand the behaviour of your online visitors, but it can also guide you to make data-driven decisions to optimize your website as optimally as possible.
							<br></br>
							<br></br>

						</p>
					</div>
                    <img className='rounded-2xl' src='/showcases/dashboard.webp'></img>
					<div className="flex mt-5 flex-col gap-6">
						<h2 className="text-2xl font-semibold">
							The problem with Google Analytics for agencies
						</h2>
						<p className="text-gray-600">
                            Although Google Analytics is a powerful tool, it results in several challenges for agencies and freelancers. These challenges are primarily related to its complexity and privacy concerns.
                            <br></br>
                            <br></br>
                            Google Analytics offers a large amount of features, which can be overwhelming for beginners and even intermediate users. Setting up each website, configuring custom events and filtering and analyzing data correctly can be challenging for non-experienced users.
							<br></br>
							<br></br>
                            The setup of Google Analytics can be time-consuming, requiring precise configuration to ensure accurate data collection.
                            <br></br>
							<br></br>
                            At Toolbird we&apos;ve developed what we call an ideal alternative to Google Analytics for agencies and freelancers.
                            Without compromising on features, we offer a fast, intuitive and privacy-friendly web analytics tool, allowing you to setup analytics within minutes, with no training or previous experience needed.
                            <br></br>
							<br></br>
                            Check out our live demo <span><Link className='text-main underline' target='_blank' href={"https://app.toolbird.io/share/toolbird.io"}>here</Link></span>
						</p>
					</div>
					<div className="flex mt-5 flex-col gap-6">
						<h2 className="text-2xl font-semibold">
							How Toolbird benefits agencies and freelancers
						</h2>
						<p className="text-gray-600">
                            As an agency or a freelancer promoting your service through a website, you can use Toolbird to track and analyze the behaviour of your online website leads. With this data you&apos;re capable of optimizing your page to ensure more visitors and in the end more conversions/sales.
                            <br></br>
                            <br></br>
                            With Toolbird you&apos;re able to track where in the world your visitors are based, what pages they visit the most, what device, browser and operating system they visit you from and much more.
                            <br></br>
                            <br></br>
                            By using our custom event tracking feature, you can gain insights on how specific visitors interact with each individual element on your website, making it easier to make data-driven decions on where to optimize your funnel.
						</p>
					</div>
					<div className="flex mt-5 flex-col gap-6">
						<h2 className="text-2xl font-semibold">
							Start tracking your web traffic within minutes
						</h2>
						<p className="text-gray-600">
                        Toolbird is designed to prioritize simplicity and ease of use, making it an ideal solution for agencies and freelancers who need to track website analytics without dealing with the complexities of more advanced features.
						</p>
					</div>
					<div className="flex mt-5 flex-col gap-6">
						<h2 className="text-2xl font-semibold">
							Try out Toolbird for free - no credit card
						</h2>
						<p className="text-gray-600">
                            Interested in seeing how Toolbird Analytics can improve your agency- or freelance business? We&apos;d like to offer you a 2 week free trial to see if it&apos;s something for you. <span><Link className='text-main underline' target='_blank' href={"https://app.toolbird.io/auth/register"}>Get started in just a minute</Link></span>
						</p>
					</div>
				</div>
			</section>
		</Layout>
	)
}
