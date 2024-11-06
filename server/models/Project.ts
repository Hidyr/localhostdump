import mongoose from 'mongoose';
import User from './User';
import Comment from './Comment';

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
projectSchema.virtual('author').get(async function () {
	const user = await User.findById(this.userId).select('username');
	return user ? user.username : null;
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
projectSchema.virtual('totalComments').get(async function () {
	return await Comment.countDocuments({ projectId: this._id });
});

projectSchema.set('toJSON', { virtuals: true });
projectSchema.set('toObject', { virtuals: true });

const projectModel = mongoose.model('Project', projectSchema);

export default projectModel;
