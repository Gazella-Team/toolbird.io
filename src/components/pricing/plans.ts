type Plan = {
	priceId: string
	monthlyPrice: number
	websites: string
	seats: string
	dataRetention: string
}

const PLANS: Plan[] = [
	{
		priceId: '10K',
		monthlyPrice: 9,
		websites: '3 websites',
		seats: '2 seats',
		dataRetention: '2 years',
	},
	{
		priceId: '25K',
		monthlyPrice: 15,
		websites: '5 websites',
		seats: '2 seats',
		dataRetention: '2 years',
	},
	{
		priceId: '100K',
		monthlyPrice: 19,
		websites: '10 websites',
		seats: 'Unlimited seats',
		dataRetention: 'Unlimited',
	},
	{
		priceId: '250K',
		monthlyPrice: 29,
		websites: '25 websites',
		seats: 'Unlimited seats',
		dataRetention: 'Unlimited',
	},
	{
		priceId: '500K',
		monthlyPrice: 39,
		websites: '50 websites',
		seats: 'Unlimited seats',
		dataRetention: 'Unlimited',
	},
	{
		priceId: '1M',
		monthlyPrice: 49,
		websites: 'Unlimited websites',
		seats: 'Unlimited seats',
		dataRetention: 'Unlimited',
	},
	{
		priceId: '2M',
		monthlyPrice: 79,
		websites: 'Unlimited websites',
		seats: 'Unlimited seats',
		dataRetention: 'Unlimited',
	},
	{
		priceId: '5M',
		monthlyPrice: 99,
		websites: 'Unlimited websites',
		seats: 'Unlimited seats',
		dataRetention: 'Unlimited',
	},
]

export default PLANS