import { defineFunction } from "@aws-amplify/backend";

export const addCognitoUser = defineFunction({
  entry: "./handler.ts",
});
