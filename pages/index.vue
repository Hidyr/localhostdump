<script setup>
const { data } = await useFetch('/api/project');

const projects = ref(data?.value?.projects || []);

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
				class="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md transition-colors"
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
					class="w-full px-4 py-2 border rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
          class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
						? 'bg-gray-600 text-white'
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
