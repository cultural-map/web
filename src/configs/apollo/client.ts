import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	uri: import.meta.env.API_URL,
	connectToDevTools: !import.meta.env.PROD,
});
