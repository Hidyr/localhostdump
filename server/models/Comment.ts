import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
	projectId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Project',
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	text: String,
}, { timestamps: true });

const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel;
