import mongoose from 'mongoose';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	// Retrieve MongoDB URI from runtime config
	const mongoURI = process.env.NODE_ENV === 'production' ? `${config.mongoURIProd}` : `${config.mongoURILocal}`;

	if (!mongoURI) {
		throw new Error('MongoDB URI is not provided in runtime configuration.');
	}

	// Connect to MongoDB
	mongoose.connect(mongoURI, {});

	mongoose.connection.on('connected', () => {
		console.log('Connected to MongoDB successfully');
	});

	mongoose.connection.on('error', (error) => {
		console.error('Error connecting to MongoDB:', error);
	});
});
