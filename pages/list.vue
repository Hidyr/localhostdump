<template>
	<div class="min-h-full">
		<Popover
			v-slot="{ open }"
			as="template"
		>
			<header :class="[open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'bg-white shadow-sm lg:static lg:overflow-y-visible']">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
						<div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
							<div class="flex flex-shrink-0 items-center">
								<a href="#">
									<img
										class="block h-10 w-auto text-rose-100"
										src="../assets/logo.svg"
										alt="Localhostdump"
									>
								</a>
							</div>
						</div>
						<div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
							<div class="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
								<div class="w-full">
									<label
										for="search"
										class="sr-only"
									>Search</label>
									<div class="relative">
										<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
											<MagnifyingGlassIcon
												class="h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</div>
										<input
											id="search"
											v-model="searchQuery"
											name="search"
											class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm/6"
											placeholder="Search"
											type="text"
										>
									</div>
								</div>
							</div>
						</div>
						<div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
							<!-- Mobile menu button -->
							<PopoverButton class="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
								<span class="absolute -inset-0.5" />
								<span class="sr-only">Open menu</span>
								<Bars3Icon
									v-if="!open"
									class="block h-6 w-6"
									aria-hidden="true"
								/>
								<XMarkIcon
									v-else
									class="block h-6 w-6"
									aria-hidden="true"
								/>
							</PopoverButton>
						</div>
						<div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
							<a
								href="#"
								class="text-sm font-medium text-gray-900 hover:underline"
							>Go Premium</a>
							<a
								href="#"
								class="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
							>
								<span class="sr-only">View notifications</span>
								<BellIcon
									class="h-6 w-6"
									aria-hidden="true"
								/>
							</a>

							<!-- Profile dropdown -->
							<Menu
								as="div"
								class="relative ml-5 flex-shrink-0"
							>
								<div>
									<MenuButton class="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
										<span class="absolute -inset-1.5" />
										<span class="sr-only">Open user menu</span>
										<img
											class="h-8 w-8 rounded-full"
											:src="user.imageUrl"
											alt=""
										>
									</MenuButton>
								</div>
								<transition
									enter-active-class="transition ease-out duration-100"
									enter-from-class="transform opacity-0 scale-95"
									enter-to-class="transform opacity-100 scale-100"
									leave-active-class="transition ease-in duration-75"
									leave-from-class="transform opacity-100 scale-100"
									leave-to-class="transform opacity-0 scale-95"
								>
									<MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<MenuItem
											v-for="item in userNavigation"
											:key="item.name"
											v-slot="{ active }"
										>
											<a
												:href="item.href"
												:class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']"
											>{{ item.name }}</a>
										</MenuItem>
									</MenuItems>
								</transition>
							</Menu>

							<a
								href="#"
								class="ml-6 inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
							>New Post</a>
						</div>
					</div>
				</div>

				<PopoverPanel
					as="nav"
					class="lg:hidden"
					aria-label="Global"
				>
					<div class="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
						<a
							v-for="item in navigation"
							:key="item.name"
							:href="item.href"
							:aria-current="item.current ? 'page' : undefined"
							:class="[item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50', 'block rounded-md px-3 py-2 text-base font-medium']"
						>{{ item.name }}</a>
					</div>
					<div class="border-t border-gray-200 pt-4">
						<div class="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
							<div class="flex-shrink-0">
								<img
									class="h-10 w-10 rounded-full"
									:src="user.imageUrl"
									alt=""
								>
							</div>
							<div class="ml-3">
								<div class="text-base font-medium text-gray-800">
									{{ user.name }}
								</div>
								<div class="text-sm font-medium text-gray-500">
									{{ user.email }}
								</div>
							</div>
							<button
								type="button"
								class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
							>
								<span class="absolute -inset-1.5" />
								<span class="sr-only">View notifications</span>
								<BellIcon
									class="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div class="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
							<a
								v-for="item in userNavigation"
								:key="item.name"
								:href="item.href"
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
							>{{ item.name }}</a>
						</div>
					</div>

					<div class="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
						<a
							href="#"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
						>New Post</a>

						<div class="mt-6 flex justify-center">
							<a
								href="#"
								class="text-base font-medium text-gray-900 hover:underline"
							>Go Premium</a>
						</div>
					</div>
				</PopoverPanel>
			</header>
		</Popover>

		<div class="py-10">
			<div class="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
				<div class="hidden lg:col-span-3 lg:block xl:col-span-2">
					<nav
						aria-label="Sidebar"
						class="sticky top-4 divide-y divide-gray-300"
					>
						<div class="space-y-1 pb-8">
							<a
								v-for="item in navigation"
								:key="item.name"
								:href="item.href"
								:class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50', 'group flex items-center rounded-md px-3 py-2 text-sm font-medium']"
								:aria-current="item.current ? 'page' : undefined"
							>
								<component
									:is="item.icon"
									:class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-1 mr-3 h-6 w-6 flex-shrink-0']"
									aria-hidden="true"
								/>
								<span class="truncate">{{ item.name }}</span>
							</a>
						</div>
						<div class="pt-10">
							<p
								id="communities-headline"
								class="px-3 text-sm font-medium text-gray-500"
							>
								Communities
							</p>
							<div
								class="mt-3 space-y-2"
								aria-labelledby="communities-headline"
							>
								<a
									v-for="community in communities"
									:key="community.name"
									:href="community.href"
									class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
								>
									<span class="truncate">{{ community.name }}</span>
								</a>
							</div>
						</div>
					</nav>
				</div>
				<main class="lg:col-span-9 xl:col-span-6">
					<div class="px-4 sm:px-0">
						<div class="sm:hidden">
							<label
								for="question-tabs"
								class="sr-only"
							>Select a tab</label>
							<select
								id="question-tabs"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-500"
							>
								<option
									v-for="tab in tabs"
									:key="tab.name"
									:selected="tab.current"
								>
									{{ tab.name }}
								</option>
							</select>
						</div>
						<div class="hidden sm:block">
							<nav
								class="isolate flex divide-x divide-gray-200 rounded-lg shadow"
								aria-label="Tabs"
							>
								<a
									v-for="(tab, tabIdx) in tabs"
									:key="tab.name"
									:href="tab.href"
									:aria-current="tab.current ? 'page' : undefined"
									:class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white px-6 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10']"
								>
									<span>{{ tab.name }}</span>
									<span
										aria-hidden="true"
										:class="[tab.current ? 'bg-rose-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']"
									/>
								</a>
							</nav>
						</div>
					</div>
					<div class="mt-4">
						<h1 class="sr-only">
							Recent questions
						</h1>
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
					</div>
				</main>
				<aside class="hidden xl:col-span-4 xl:block">
					<div class="sticky top-4 space-y-4">
						<section aria-labelledby="who-to-follow-heading">
							<div class="rounded-lg bg-white shadow">
								<div class="p-6">
									<h2
										id="who-to-follow-heading"
										class="text-base font-medium text-gray-900"
									>
										Who to follow
									</h2>
									<div class="mt-6 flow-root">
										<ul
											role="list"
											class="-my-4 divide-y divide-gray-200"
										>
											<li
												v-for="user in whoToFollow"
												:key="user.handle"
												class="flex items-center space-x-3 py-4"
											>
												<div class="flex-shrink-0">
													<img
														class="h-8 w-8 rounded-full"
														:src="user.imageUrl"
														alt=""
													>
												</div>
												<div class="min-w-0 flex-1">
													<p class="text-sm font-medium text-gray-900">
														<a :href="user.href">{{ user.name }}</a>
													</p>
													<p class="text-sm text-gray-500">
														<a :href="user.href">{{ '@' + user.handle }}</a>
													</p>
												</div>
												<div class="flex-shrink-0">
													<button
														type="button"
														class="inline-flex items-center gap-x-1.5 text-sm/6 font-semibold text-gray-900"
													>
														<PlusIcon
															class="h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
														Follow
													</button>
												</div>
											</li>
										</ul>
									</div>
									<div class="mt-6">
										<a
											href="#"
											class="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
										>View all</a>
									</div>
								</div>
							</div>
						</section>
						<section aria-labelledby="trending-heading">
							<div class="rounded-lg bg-white shadow">
								<div class="p-6">
									<h2
										id="trending-heading"
										class="text-base font-medium text-gray-900"
									>
										Trending
									</h2>
									<div class="mt-6 flow-root">
										<ul
											role="list"
											class="-my-4 divide-y divide-gray-200"
										>
											<li
												v-for="post in trendingPosts"
												:key="post.id"
												class="flex space-x-3 py-4"
											>
												<div class="flex-shrink-0">
													<img
														class="h-8 w-8 rounded-full"
														:src="post.user.imageUrl"
														:alt="post.user.name"
													>
												</div>
												<div class="min-w-0 flex-1">
													<p class="text-sm text-gray-800">
														{{ post.body }}
													</p>
													<div class="mt-2 flex">
														<span class="inline-flex items-center text-sm">
															<button
																type="button"
																class="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
															>
																<ChatBubbleLeftEllipsisIcon
																	class="h-5 w-5"
																	aria-hidden="true"
																/>
																<span class="font-medium text-gray-900">{{ post.comments }}</span>
															</button>
														</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div class="mt-6">
										<a
											href="#"
											class="block w-full rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
										>View all</a>
									</div>
								</div>
							</div>
						</section>
					</div>
				</aside>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import {
	ChatBubbleLeftEllipsisIcon,
	MagnifyingGlassIcon,
	PlusIcon,
} from '@heroicons/vue/20/solid';
import {
	ArrowTrendingUpIcon,
	Bars3Icon,
	BellIcon,
	FireIcon,
	HomeIcon,
	UserGroupIcon,
	XMarkIcon,
} from '@heroicons/vue/24/outline';

const user = {
	name: 'Chelsea Hagon',
	email: 'chelsea.hagon@example.com',
	imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Home', href: '#', icon: HomeIcon, current: true },
	{ name: 'Popular', href: '#', icon: FireIcon, current: false },
	{ name: 'Communities', href: '#', icon: UserGroupIcon, current: false },
	{ name: 'Trending', href: '#', icon: ArrowTrendingUpIcon, current: false },
];
const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];
const communities = [
	{ name: 'Movies', href: '#' },
	{ name: 'Food', href: '#' },
	{ name: 'Sports', href: '#' },
	{ name: 'Animals', href: '#' },
	{ name: 'Science', href: '#' },
	{ name: 'Dinosaurs', href: '#' },
	{ name: 'Talents', href: '#' },
	{ name: 'Gaming', href: '#' },
];
const tabs = [
	{ name: 'Recent', href: '#', current: true },
	{ name: 'Most Liked', href: '#', current: false },
	{ name: 'Most Answers', href: '#', current: false },
];

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

const whoToFollow = [
	{
		name: 'Leonard Krasner',
		handle: 'leonardkrasner',
		href: '#',
		imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	// More people...
];
const trendingPosts = [
	{
		id: 1,
		user: {
			name: 'Floyd Miles',
			imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
		comments: 291,
	},
	// More posts...
];
</script>
