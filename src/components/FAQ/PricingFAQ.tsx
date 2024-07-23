import FAQ from '.'

const questions = [
	{
		question: 'What happens if I go over the monthly plan limits?',
		answer: "We do not enforce hard caps on monthly limits for tracking website events. If you exceed your monthly limit, we will continue to monitor your website's events without interruption. Our team will then contact you to discuss upgrading your plan to better suit your tracking needs.",
	},
	{
		question: 'Is Toolbird Analytics free?',
		answer: 'No, Toolbird is not free. Toolbird is a bootstrapped Company and we need to charge for our services to keep the lights on. We offer a 14-day free trial for all new users to try out our service before committing to a paid plan.',
	},
	{
		question:
			'What is the difference between page views and custom events?',
		answer: 'Page views are the number of times your website has been viewed. Custom events are specific actions that users take on your website, such as clicking a button or submitting a form. Custom events are events that you define and track using Toolbird Analytics. Custom events are included in the pageviews limit.',
	},
]

export default function PricingFAQ() {
	return <FAQ questions={questions} />
}
