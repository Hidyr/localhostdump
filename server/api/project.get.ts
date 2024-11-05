import ProjectModel from '../models/Project';

const dummyProjects = [
	{
		title: 'AI Recipe Generator',
		author: 'devJane',
		date: '2024-03-15',
		tech: ['Python', 'Flask', 'OpenAI'],
		category: 'FoodTech',
		description: 'Started building an AI-powered recipe generator. Got the basic API working but lost motivation when I realized the complexity of handling ingredient substitutions and dietary restrictions.',
		likes: 24,
		comments: 8,
		forks: 3,
		repo: 'https://github.com/devjane/ai-recipe-gen',
		site: 'https://ai-recipe-demo.netlify.app',
	},
	{
		title: 'Crypto Portfolio Tracker',
		author: 'blockchainBob',
		date: '2024-02-28',
		tech: ['React', 'Node.js', 'MongoDB'],
		category: 'FinTech',
		description: 'A dashboard for tracking crypto investments across multiple wallets. Abandoned due to API rate limiting issues and complexity of handling multiple blockchain networks.',
		likes: 45,
		comments: 12,
		forks: 7,
		repo: 'https://github.com/blockchainbob/crypto-tracker',
		site: null,
	},
	{
		title: 'DevMentor - AI Programming Tutor',
		author: 'aiEnthusiast',
		date: '2024-03-22',
		tech: ['Vue.js', 'FastAPI', 'PostgreSQL'],
		category: 'EduTech',
		description: 'An AI-powered programming tutor that helps beginners learn to code. Abandoned when ChatGPT released their Code Interpreter which basically did what I was building.',
		likes: 89,
		comments: 15,
		forks: 12,
		repo: 'https://github.com/aienthusiast/devmentor',
		site: 'https://devmentor-demo.vercel.app',
	},
	{
		title: 'CropSense - Agricultural Monitoring',
		author: 'farmTech',
		date: '2024-02-15',
		tech: ['React Native', 'IoT', 'Firebase'],
		category: 'AgriTech',
		description: 'A mobile app using IoT sensors to monitor crop health, soil moisture, and predict potential issues. Abandoned due to high hardware costs and complexity of sensor integration.',
		likes: 67,
		comments: 19,
		forks: 11,
		repo: 'https://github.com/farmtech/cropsense',
		site: null,
	},
	{
		title: 'MindfulED - Mental Health Platform',
		author: 'wellnessDev',
		date: '2024-01-10',
		tech: ['Next.js', 'GraphQL', 'WebRTC'],
		category: 'HealthTech',
		description: 'A platform connecting students with mental health resources and peer support. Stopped development when navigating complex privacy and counseling regulations.',
		likes: 112,
		comments: 27,
		forks: 16,
		repo: 'https://github.com/wellnessdev/mindfueled',
		site: 'https://mindfueled-demo.vercel.app',
	},
	{
		title: 'Urban Mobility Game',
		author: 'gameDevStudio',
		date: '2024-03-05',
		tech: ['Unity', 'C#', 'ARKit'],
		category: 'GameTech',
		description: 'An augmented reality game about city transportation management. Lost momentum when balancing realistic simulation with engaging gameplay became too challenging.',
		likes: 203,
		comments: 45,
		forks: 28,
		repo: 'https://github.com/gamedevstudio/urban-mobility',
		site: null,
	},
	{
		title: 'SmartHome Energy Optimizer',
		author: 'energyInnovator',
		date: '2024-02-20',
		tech: ['Python', 'Raspberry Pi', 'Machine Learning'],
		category: 'SmartHome',
		description: 'An intelligent system to optimize home energy consumption using machine learning. Abandoned after realizing the complexity of creating accurate predictive models.',
		likes: 84,
		comments: 22,
		forks: 14,
		repo: 'https://github.com/energyinnovator/smart-home-optimizer',
		site: 'https://smart-home-demo.netlify.app',
	},
];

export default defineEventHandler(async () => {
	const _projects = await getProjects();
	return {
		projects: [
			..._projects,
			...dummyProjects,
		],
	};
});

async function getProjects() {
	return await ProjectModel.find({});
}
