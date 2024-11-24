import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useProjectStore = defineStore('projectStore', {
	state: () => {
		return {
			currentProject: useStorage('currentProject', {}),
		};
	},
	getters: {
		getCurrentProject(state) {
			return state.currentProject;
		},
	},
	actions: {
		setCurrentProject(project) {
			this.currentProject = project;
		},
	},
});
