import {
	people01,
	people02,
	people03,
	facebook,
	instagram,
	linkedin,
	twitter,
	airbnb,
	binance,
	coinbase,
	dropbox,
	send,
	shield,
	star,
	dev,
	ref,
	soft,
	canva,
	web,
	flow,
	trello,
	freepik,
	adobeIllus,
	bolt,
	flexible,
	pricing,
	integrations,
	nlp,
	scalable,
	nlpSolution,
	support,
	heart,
	priority,
	automation,
} from "../assets";

export const navLinks = [
	{
		id: "solutions",
		title: "Solutions",
	},
	{
		id: "features",
		title: "Features",
	},
	{
		id: "pricing",
		title: "Pricing",
	},
];

export const features = [
	{
		id: "feature-1",
		sparkle: "Not just automation",
		h2: "Insightful auto-replies that sound like you",
		icon: support,
		title: "Branded Instant Replies",
		content:
			"Turn inbound messages (from forms, emails, and DMs) into human-like responses, written in your brand voice — instantly.",
	},
	{
		id: "feature-3",
		sparkle: "Not just AI workflows",
		h2: "Smart summaries and reports for decision-making",
		icon: heart,
		title: "Feedback Intelligence Engine",
		content:
			"Whispr collects customer feedback (from forms, chat, NPS, support tickets) and generates structured insights and sentiment-based reports in seconds.",
	},
	{
		id: "feature-4",
		sparkle: "Not just tools",
		h2: "Social content, emails, and support replies on-brand",
		icon: automation,
		title: "Content-from-Conversations",
		content:
			"Whispr repurposes customer language and inquiries into LinkedIn posts, newsletters, blog intros, and support docs — all in your tone.",
	},
	{
		id: "feature-4",
		sparkle: "Not just tools",
		h2: "A feedback loop that gets smarter every time",
		icon: priority,
		title: "Self-Learning Loop",
		content:
			"The more messages Whispr processes, the better it becomes at matching tone, intent, and user needs — through auto-finetuning and tagging.",
	},
];

export const workModel = [
	{
		id: "model-1",
		value: "1",
		title: "Discovery Intro Call",
		content:
			"We walk you through how Whispr works, review your current systems, and determine if you're a strong fit for what we offer. No fluff, just clarity. Deployment in days, not months. No dev or analyst team needed.",
	},
	{
		id: "model-2",
		value: "2",
		title: "Onboarding & Strategy Setup",
		content:
			"Once aligned, we collect your brand assets, workflows, and preferred channels. Then we map the feedback loops and define the content or insights Whispr will automate for you.",
	},
	{
		id: "model-3",
		value: "3",
		title: "Build, Deliver, Refine",
		content:
			"We build your Whispr system using LLM, N8N, and NLP, test in your environment, and refine based on your team’s feedback, ensuring it feels like your voice and fits your ops.",
	},
];

export const stats = [
	{
		id: "stats-1",
		title: "Rapid Setup",
		content: "Get your automation launched in 5–7 days, not weeks.",
		icon: bolt,
	},
	{
		id: "stats-2",
		title: "Smart Output Actions",
		content:
			"Automatically creates: branded replies, content snippets, summaries, or tags into CRM.",
		icon: flexible,
	},
	{
		id: "stats-3",
		title: "Predictable Subscription",
		content:
			"One flat monthly rate with all updates, refinements, and support included.",
		icon: pricing,
	},
	{
		id: "stats-4",
		title: "Input Channel Integrations",
		content:
			"Collects feedback and messages from: forms, email, Typeform, Google Sheets, etc.",
		icon: integrations,
	},
	{
		id: "stats-5",
		title: "NLP-Powered Efficiency",
		content:
			"Sentiment analysis, intent detection, and tone-aware content generation using your favorite LLM.",
		icon: nlp,
	},

	{
		id: "stats-6",
		title: "Scalable Solutions",
		content:
			"Connects seamless with your tools for smooth worfklow automations.",
		icon: scalable,
	},
];

export const faq = [
	{
		question: "What’s included in the 7-day trial?",
		answer: `You get a fully functional mini-version of Whispr tailored to your business: 1 live automation workflow (e.g., replies or feedback insights), 1 branded reply or content examples, 1 customer feedback summary report, Temporary access to a Microsoft Teams channel for communication.`,
	},
	{
		question: "Is it really free?",
		answer: `Yes, only put credits for your own LLM. There’s no charge during the 7-day period. If you decide not to continue, you pay nothing.`,
	},
	{
		question: "What happens after payment?",
		answer: `After payment, you'll be redirected to fill out a small form and book our Onboarding meeting where we'll address your processes and strategize your automations.`,
	},
	{
		question:
			"Can I keep the workflow after the Whispr trial if I don’t continue?",
		answer: `No, the IP and workflows remain proprietary unless you subscribe. But you can see it working live in your system during the trial.`,
	},
	{
		question: "Will I need to pay any extras?",
		answer: `We only request an automation account like N8N, Make.com, Zapier, etc.. so we can manage your processes as collaborators. All will be explained in our 15m Intro Call. At the Whispr free trial we'll create your Agent in our own instance, only after you'll need your own N8N hosting.`,
	},
	{
		question: "Can I request customized workflows for General AI Automation?",
		answer:
			"Yes. We'll build one task at a time and you can add as many requests as you like or we'll add them for you.",
	},
	{
		question: "What if I don’t like the solution provided?",
		answer:
			"Client satisfaction is our top priority. If you’re not fully satisfied with the initial delivery you can simply leave a comment and we'd continue revising until you are 100% satisfied.",
	},
	{
		question: "Can these workflows integrate with my existing tools?",
		answer:
			"Yes, our workflows are designed to integrate seamlessly with popular business tools and they will be acessed on the Onboarding Call.",
	},
	{
		question: "What kind of data do you need from us to build the workflows?",
		answer:
			"The data we require depends on the workflow. For example, feedback analysis may include customers reviews, surveys, or social media data. Social Media Automation may include content schedules, branding guidelines, and target audience preferences. We will guide you through data preparation during the onboarding process. ",
	},
	{
		question: "How do I know if my business needs automation workflows?",
		answer:
			"If your team is spending too much time on repetitive tasks, missing opportunities due to delays, or struggling with inefficiencies, automation could be the answer. Book a 15m free consultation, and we’ll help you identify areas where automation can make an immediate impact.",
	},
];

export const feedback = [
	{
		id: "feedback-1",
		content:
			"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
		name: "Herman Jensen",
		title: "Founder & Leader",
		img: people01,
	},
	{
		id: "feedback-2",
		content:
			"Money makes your life easier. If you're lucky to have it, you're lucky.",
		name: "Steve Mark",
		title: "Founder & Leader",
		img: people02,
	},
	{
		id: "feedback-3",
		content:
			"It is usually people in the money business, finance, and international trade that are really rich.",
		name: "Kenn Gallagher",
		title: "Founder & Leader",
		img: people03,
	},
];

export const footerLinks = [
	{
		title: "Useful Links",
		links: [
			{
				name: "Client Login",
				link: "https://checkout.flowity.ai/p/login/9AQ4hz28q77O8EwfYY",
			},
			{
				name: "15m Intro Call",
				link: "https://cal.com/flowityai/intro-call",
			},
			{
				name: "Privacy Policy",
				link: "https://www.notion.so/ninacressoni/Privacy-policy-of-FLOWITY-AI-6f22759a4a7e4e91b47483c8dbf6d9ca?pvs=4",
			},
			{
				name: "Terms & Services",
				link: "https://www.notion.so/ninacressoni/Terms-and-conditions-of-FLOWITY-AI-f8b6e82af20a40ebbb8b5630e7bd45b3?pvs=4",
			},
		],
	},
	{
		title: "Community",
		links: [
			{
				name: "Ebook Store",
				link: "https://store.flowity.ai",
			},
			{
				name: "Flow Nexus Newsletter",
				link: "https://flowity.beehiiv.com",
			},
		],
	},
	{
		title: "Collaborations",
		links: [
			{
				name: "Freepik",
				link: "https://www.freepik.com/",
			},
		],
	},
];

export const socialMedia = [
	{
		id: "social-media-1",
		icon: instagram,
		link: "https://www.instagram.com/flowity.ai",
	},
	{
		id: "social-media-2",
		icon: twitter,
		link: "https://www.twitter.com/ninaneev",
	},
	{
		id: "social-media-3",
		icon: linkedin,
		link: "https://www.linkedin.com/company/flowityai",
	},
];

export const clients = [
	{
		id: "client-1",
		logo: trello,
	},
	{
		id: "client-2",
		logo: freepik,
	},
	{
		id: "client-3",
		logo: adobeIllus,
	},
	{
		id: "client-4",
		logo: dropbox,
	},
];
