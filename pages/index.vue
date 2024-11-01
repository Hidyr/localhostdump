<script setup>
const projects = ref([
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
]);

// Search and Filtering
const searchQuery = ref('');
const selectedCategories = ref([]);
const sortBy = ref('date'); // default sort
const sortDirection = ref('desc');

// Computed properties for filtering and sorting
const filteredAndSortedProjects = computed(() => {
	const result = projects.value.filter((project) => {
		const matchesSearch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase())
			|| project.description.toLowerCase().includes(searchQuery.value.toLowerCase())
			|| project.tech.some(tech => tech.toLowerCase().includes(searchQuery.value.toLowerCase()));

		const matchesCategory = selectedCategories.value.length === 0
			|| selectedCategories.value.includes(project.category);

		return matchesSearch && matchesCategory;
	});

	// Sorting logic
	return result.sort((a, b) => {
		let comparison = 0;
		switch (sortBy.value) {
			case 'likes':
				comparison = a.likes - b.likes;
				break;
			case 'comments':
				comparison = a.comments - b.comments;
				break;
			case 'forks':
				comparison = a.forks - b.forks;
				break;
			case 'date':
			default:
				comparison = new Date(b.date) - new Date(a.date);
				break;
		}
		return sortDirection.value === 'desc' ? comparison : -comparison;
	});
});

// Modal and project management
const showModal = ref(false);

const addNewProject = (project) => {
	projects.value.unshift({
		...project,
		likes: 0,
		comments: 0,
		forks: 0,
	});
};

// Unique categories and tech stacks
const uniqueCategories = computed(() => {
	return [...new Set(projects.value.map(p => p.category))];
});

const toggleCategory = (category) => {
	if (selectedCategories.value.includes(category)) {
		selectedCategories.value = selectedCategories.value.filter(c => c !== category);
	}
	else {
		selectedCategories.value.push(category);
	}
};
</script>

<template>
	<div class="max-w-4xl mx-auto p-6 bg-gray-100">
		<!-- Header -->
		<div class="md:flex justify-between items-center mb-8">
			<div>
				<h1 class="text-3xl font-bold mb-2">
					LocalhostDump
				</h1>
				<p class="text-gray-600">
					Where abandoned projects find new life
				</p>
			</div>
			<button
				class="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black transition-colors"
				@click="showModal = true"
			>
				<Icon
					name="lucide:plus-circle"
					class="w-5 h-5"
				/>
				Dump Project
			</button>
		</div>

		<!-- Filters and Search -->
		<div class="mb-6 flex flex-col md:flex-row gap-4">
			<!-- Search Input -->
			<div class="flex-grow relative">
				<input
					v-model="searchQuery"
					type="text"
					placeholder="Search projects..."
					class="w-full px-4 py-2 border rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
				<Icon
					name="lucide:search"
					class="absolute left-3 top-3 text-gray-400 w-5 h-5"
				/>
			</div>

			<!-- Sort Dropdown -->
			<!-- <div class="flex items-center space-x-2">
        <select
          v-model="sortBy"
          class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="date">Sort by Date</option>
          <option value="likes">Sort by Likes</option>
          <option value="comments">Sort by Comments</option>
          <option value="forks">Sort by Forks</option>
        </select>
        <button
          @click="sortDirection = sortDirection === 'desc' ? 'asc' : 'desc'"
          class="p-2 border rounded-md hover:bg-gray-100"
        >
          <Icon
            :name="sortDirection === 'desc' ? 'lucide:arrow-down' : 'lucide:arrow-up'"
            class="w-5 h-5"
          />
        </button>
      </div> -->
		</div>

		<!-- Category Filter -->
		<div class="mb-6 flex flex-wrap gap-2">
			<span
				v-for="category in uniqueCategories"
				:key="category"
				:class="[
					'px-3 py-1 rounded-full cursor-pointer transition-colors',
					selectedCategories.includes(category)
						? 'bg-blue-600 text-white'
						: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
				]"
				@click="toggleCategory(category)"
			>
				{{ category }}
			</span>
		</div>

		<!-- Projects List -->
		<div
			v-if="filteredAndSortedProjects.length"
			class="space-y-4"
		>
			<ProjectCard
				v-for="(project, index) in filteredAndSortedProjects"
				:key="index"
				:project="project"
			/>
		</div>
		<div
			v-else
			class="text-center py-8 text-gray-500"
		>
			<Icon
				name="lucide:folder-open"
				class="mx-auto mb-4 w-12 h-12"
			/>
			<p>No projects found. Try different search or filter criteria.</p>
		</div>

		<!-- Project Modal -->
		<ProjectModal
			v-if="showModal"
			@close="showModal = false"
			@submit="addNewProject"
		/>
	</div>
</template>
