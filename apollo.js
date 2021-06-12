import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
  await AsyncStorage.setItem("token", JSON.stringify(token));
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  await AsyncStorage.removeItem("token");
  isLoggedInVar(false);
};

const client = new ApolloClient({
  uri: "https://pharmstagram-backend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
