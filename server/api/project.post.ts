import ProjectModel from '../models/Project';

type ProjectType = {
	title: string;
	description: string;
	technologies: string;
	category: string;
	repo?: string;
	link?: string;
};

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	try {
		const _project = await saveProjects(body);
		return {
			response: _project,
			error: null,
		};
	}
	catch (err) {
		console.log(err);
		return {
			response: null,
			error: 'error occur trying to dump project, please try again',
		};
	}
});

async function saveProjects(project: ProjectType) {
	const newProject = new ProjectModel({
		...project,
	});
	return await newProject.save({});
}
