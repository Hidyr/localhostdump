<script setup>
const props = defineProps({
	project: {
		type: Object,
		required: true,
	},
});
const emit = defineEmits(['emitCurrentProject']);

const emitProject = () => {
	emit('emitCurrentProject', props.project);
};
</script>

<template>
	<div
		class="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6 cursor-pointer"
		@click="emitProject"
	>
		<div class="md:flex justify-between items-start">
			<div>
				<h3 class="text-xl font-bold">
					{{ project.title }}
				</h3>
				<p class="text-sm text-gray-500">
					{{ project.author }} on {{ project.date }}
				</p>
			</div>
			<div class="flex gap-2 items-center">
				<span
					v-for="tech in project.tech"
					:key="tech"
					class="px-2 py-1 text-xs bg-gray-100 rounded-full"
				>
					{{ tech }}
				</span>
				<span
					v-if="project.category"
					class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
				>
					{{ project.category }}
				</span>
			</div>
		</div>

		<p class="text-gray-700 my-4">
			{{ project.description }}
		</p>

		<div class="flex flex-wrap gap-3 mb-4">
			<a
				v-if="project.repo"
				:href="project.repo"
				target="_blank"
				class="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-600"
			>
				<Icon
					name="lucide:github"
					class="w-4 h-4 shrink-0 text-gray-400"
				/>
				Repository
			</a>
			<a
				v-if="project.site"
				:href="project.site"
				target="_blank"
				class="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-600"
			>
				<Icon
					name="lucide:external-link"
					class="w-4 h-4 shrink-0 text-gray-400"
				/>
				Live Demo
			</a>
		</div>

		<div class="flex gap-4 text-sm text-gray-600 mb-4">
			<span class="flex items-center gap-1">
				<Icon
					name="lucide:thumbs-up"
					class="w-4 h-4 shrink-0 text-gray-400"
				/>
				{{ project.totalLikes }}
			</span>
			<span class="flex items-center gap-1">
				<Icon
					name="lucide:message-square"
					class="w-4 h-4 shrink-0 text-gray-400"
				/>
				{{ project.comments }}
			</span>
			<span class="flex items-center gap-1">
				<Icon
					name="lucide:git-fork"
					class="w-4 h-4 shrink-0 text-gray-400"
				/>
				{{ project.totalForks }}
			</span>
		</div>

		<div class="flex justify-between">
			<button class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-gray-400">
				<Icon
					name="lucide:git-fork"
					class="w-4 h-4 shrink-0 text-gray-400"
				/>
				Fork Project
			</button>
			<button class="p-2 text-red-500 hover:text-red-700 transition-colors">
				<Icon
					name="lucide:trash-2"
					class="w-4 h-4 shrink-0 text-gray-400"
				/>
			</button>
		</div>
	</div>
</template>
