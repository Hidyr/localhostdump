import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
	userId: {
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
	technologies: {
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
	fork: {
		type: [String],
		required: false,
	},
});

const projectModel = mongoose.model('Project', projectSchema);

export default projectModel;
