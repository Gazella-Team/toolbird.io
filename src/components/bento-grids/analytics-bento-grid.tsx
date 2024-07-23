import { Reveal } from '../Animations/Reveal'

export default function BentoGridComponent() {
	return (
		<section className='mx-auto max-w-xl lg:max-w-none'>
			<div
				style={{
					background:
						'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 50%)',
				}}
				className="flex flex-col gap-5"
			>
				<div className="flex flex-col gap-5">
					<div className='grid grid-cols-1 gap-5 lg:grid-cols-[60%_1fr]'>
						<BentoGridCard
							Obj={{
								image: '/showcases/map.webp',
								heading: 'Geographic Data',
								description:
									'Track what countries, regions and cities your visitors visit you from, to get better insights on your audiences locations.',
							}}
						/>
						<BentoGridCard
							Obj={{
								image: '/showcases/device.webp',
								heading: 'Device data',
								description:
									'Track what browser, operating system and physical device your visitors use to better optimize your page.',
							}}
						/>
					</div>
					<div className='grid grid-cols-1 gap-5 lg:grid-cols-[1fr_60%]'>
						<BentoGridCard
							Obj={{
								image: '/showcases/referrer.webp',
								heading: 'Refferer data',
								description:
									'Get advanced insights on where your online visitors are referred to your page from.',
							}}
						/>
											<BentoGridCard
							Obj={{
								image: '/showcases/page.webp',
								heading: 'Page data',
								description:
									'Track exactly what pages your visitors use the most, when they enter, how long they stay, and when they leave.',
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
