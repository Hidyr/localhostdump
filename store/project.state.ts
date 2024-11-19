import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projectStore', {
	state: () => {
		return {
			currentProject: null,
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
