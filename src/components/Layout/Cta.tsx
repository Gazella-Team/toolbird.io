import Link from 'next/link'
import CustomerSlider from '../customer-slider'

export default function Cta() {
	return (
		<>
			<section className="py-16 mt-24 pb-0 relative">
				<div className="w-[86%] relative mx-auto max-w-6xl mb-20 text-center">
					<div className="flex items-center justify-center mb-10">
						<div className="shadow-clean p-1 shadow-main/50 bg-white rounded-full border border-gray-600/10">
							<img
								className="w-12"
								src="/logos/birdlogo.png"
							></img>
						</div>
					</div>
					<h2 className="text-[35px] md:text-[45px] xl:text-[50px] leading-[110%] max-w-[600px] mb-4 mx-auto font-extrabold text-gray-800">
						Ready to experience{' '}
						<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
							worldclass
						</span>{' '}
						analytics for your website?
					</h2>
					<p className="text-base md:text-lg xl:text-lg paragraph max-w-[350px] mx-auto text-gray-600">
						Increase your project overview today with the ultimate
						toolbox for SaaS developers.
					</p>
					<div className="flex items-center paragraph relative justify-center gap-3 mt-8 font-medium">
						<Link
							href={'https://app.toolbird.io/auth/register'}
							className="bg-gray-800 border-[3px] border-gray-800 font-normal text-sm text-white px-4 py-1 rounded-full"
						>
							Start 14-day free trial
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
