import { Reveal } from '../Animations/Reveal'

export default function BentoGridComponent() {
	return (
		<section className="mx-auto max-w-xl lg:max-w-none">
			<div
				style={{
					background:
						'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)',
				}}
				className="flex flex-col gap-5"
			>
				<div className="flex flex-col gap-5">
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
						<BentoGridCard
							Obj={{
								image: '/showcases/live-data.webp',
								heading: 'Live data',
								description:
									'Track the exact number of visitors being live on your page with our intuitive real-time dashboard.',
							}}
						/>
						<BentoGridCard
							Obj={{
								image: '/showcases/filtering.webp',
								heading: 'Advanced filtering',
								description:
									'Filter the displayed data by time, locations, devices, pages, sources and more, to gain precise insights.',
							}}
						/>
					</div>
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
						<BentoGridCard
							Obj={{
								heading: 'Analyze funnels',
								description:
									'Get a thorough understanding of your users journeys to convert better.',
							}}
						/>
						<BentoGridCard
							Obj={{
								heading: 'Explore sessions',
								description:
									'Track user-sessions and learn more about individual user journeys.',
							}}
						/>
						<BentoGridCard
							Obj={{
								heading: 'Live data',
								description:
									'Track the exact number of visitors being live on your page with our dashboard.',
							}}
						/>
					</div>
					{/*
					<div className='grid grid-cols-1 gap-5 md:grid-cols-[60%_1fr]'>
						<BentoGridCard
							Obj={{
								image: '/showcases/custom-tracking.webp',
								heading: 'Custom event tracking',
								description:
									'Get analytics on custom events of your choice. Track how specific elements on your website perform.',
							}}
						/>
											<BentoGridCard
							Obj={{
								image: '/showcases/chart.webp',
								heading: 'Data visualization',
								description:
									'All data is selectively displayed on a intuitive chart, to ensure as good an overview of your website as possible.',
							}}
						/>
					</div>
					 */}
				</div>
			</div>
		</section>
	)
}

function BentoGridCard(props: any) {
	return (
		<div className="bg-white border paragraph text-center rounded-[25px] border-gray-600/10 shadow-clean">
			{props.Obj.image && (
				<div className="relative">
					<img
						className="h-[270px] w-full object-cover rounded-t-[25px]"
						src={props.Obj.image}
					></img>
					<div
						className="absolute inset-0 h-full rounded-t-[25px]"
						style={{
							background:
								'linear-gradient(0deg, rgba(255,255,255,0.8225884103641457) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.7441570378151261) 100%)',
						}}
					></div>
				</div>
			)}
			<div className="p-10 flex flex-col gap-2">
				<h2 className="font-semibold text-lg text-gray-800">
					{props.Obj.heading}
				</h2>
				<p className="text-gray-600 font-normal text-sm mx-auto max-w-[400px]">
					{props.Obj.description}
				</p>
			</div>
		</div>
	)
}
