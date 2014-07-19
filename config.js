var env = process.env;

module.exports = {
	port: env.PORT,
	mongoURL: env.MONGO_URL,
	key: env.SECRET,
	secret: env.SECRET,
	auth: {
		google: {
			authorizationURL: env.AUTHORIZATION_URL,
			tokenURL: env.TOKEN_URL,
			clientID: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			callbackURL: env.CALLBACK_URL
		}
	}
};