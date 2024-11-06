import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: (v: string) => /\S+@\S+\.\S+/.test(v),
			message: (props: { value: string }) => `${props.value} is not a valid email!`,
		},
	},
	fullName: {
		type: String,
		required: true,
	},
	provider: {
		type: String,
		enum: ['github', 'gmail', 'linkedin'],
		required: true,
	},
	providerId: {
		type: String,
		required: true,
		unique: true,
	},
	profileImage: {
		type: String,
	},
	lastLogin: {
		type: Date,
		default: Date.now,
	},
}, { timestamps: true });

const userModel = mongoose.model('User', userSchema);

export default userModel;
