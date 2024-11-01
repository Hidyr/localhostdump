<script setup>
const emit = defineEmits(['close', 'submit']);

const newProject = ref({
	title: '',
	author: '',
	tech: '',
	category: '',
	description: '',
	repo: '',
	site: '',
});

const categories = [
	'FoodTech', 'FinTech', 'EduTech', 'AgriTech',
	'HealthTech', 'Game', 'GameTech', 'SmartHome', 'AI', 'Blockchain',
	'ProductivityTech', 'WebDev', 'MobileDev', 'others',
];

const submitProject = () => {
	// Basic validation
	if (!newProject.value.title || !newProject.value.description) {
		alert('Please fill in at least the title and description');
		return;
	}

	// Process tech tags
	const techArray = newProject.value.tech
		? newProject.value.tech.split(',').map(t => t.trim())
		: [];

	const projectToSubmit = {
		...newProject.value,
		tech: techArray,
		date: new Date().toISOString().split('T')[0],
		likes: 0,
		comments: 0,
		forks: 0,
	};

	emit('submit', projectToSubmit);
	emit('close');
};
</script>

<template>
	<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
		<div class="bg-white rounded-lg p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">
			<div class="flex justify-between items-center mb-6">
				<h2 class="text-2xl font-bold">
					Dump a Project
				</h2>
				<button
					class="text-gray-600 hover:text-gray-900"
					@click="$emit('close')"
				>
					<Icon
						name="lucide:x"
						class="w-6 h-6"
					/>
				</button>
			</div>

			<form
				class="space-y-4"
				@submit.prevent="submitProject"
			>
				<div>
					<label class="block mb-2 font-medium">Project Title</label>
					<input
						v-model="newProject.title"
						type="text"
						required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Enter project title"
					>
				</div>

				<div>
					<label class="block mb-2 font-medium">Author</label>
					<input
						v-model="newProject.author"
						type="text"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Your username"
					>
				</div>

				<div>
					<label class="block mb-2 font-medium">Technologies (comma-separated)</label>
					<input
						v-model="newProject.tech"
						type="text"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="React, Node.js, TypeScript"
					>
				</div>

				<div>
					<label class="block mb-2 font-medium">Category</label>
					<select
						v-model="newProject.category"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">
							Select a category
						</option>
						<option
							v-for="cat in categories"
							:key="cat"
							:value="cat"
						>
							{{ cat }}
						</option>
					</select>
				</div>

				<div>
					<label class="block mb-2 font-medium">Description</label>
					<textarea
						v-model="newProject.description"
						required
						rows="4"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="What was your project about? Why did you abandon it?"
					/>
				</div>

				<div>
					<label class="block mb-2 font-medium">Repository Link (optional)</label>
					<input
						v-model="newProject.repo"
						type="url"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="https://github.com/username/project"
					>
				</div>

				<div>
					<label class="block mb-2 font-medium">Live Site Link (optional)</label>
					<input
						v-model="newProject.site"
						type="url"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="https://your-project-demo.com"
					>
				</div>

				<div class="flex justify-end space-x-4 pt-4">
					<button
						type="button"
						class="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
						@click="$emit('close')"
					>
						Cancel
					</button>
					<button
						type="submit"
						class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
					>
						Dump Project
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
