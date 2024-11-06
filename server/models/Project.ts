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
	site: {
		type: String,
		required: false,
	},
	likes: {
		type: [String],
		default: [],
	},
	forks: {
		type: [String],
		default: [],
	},
}, { timestamps: true });

// Virtual for author (to be populated separately)
projectSchema.virtual('author', {
	ref: 'User',
	localField: 'userId',
	foreignField: '_id',
	justOne: true,
});

// Virtual for totalLikes
projectSchema.virtual('totalLikes').get(function () {
	return this.likes.length;
});

// Virtual for totalForks
projectSchema.virtual('totalForks').get(function () {
	return this.forks.length;
});

// Virtual for totalComments
projectSchema.virtual('totalComments', {
	ref: 'Comment',
	localField: '_id',
	foreignField: 'projectId',
	count: true,
});

projectSchema.set('toJSON', { virtuals: true });
projectSchema.set('toObject', { virtuals: true });

const projectModel = mongoose.model('Project', projectSchema);

export default projectModel;
