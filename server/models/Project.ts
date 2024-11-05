import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
	author: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	tech: {
		type: [String],
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	repo: {
		type: String,
		required: false,
	},
	link: {
		type: String,
		required: false,
	},
	likes: {
		type: [String],
		required: false,
	},
	forks: {
		type: [String],
		required: false,
	},
});

const projectModel = mongoose.model('Project', projectSchema);

export default projectModel;
