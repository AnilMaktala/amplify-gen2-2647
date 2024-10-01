import { defineFunction } from "@aws-amplify/backend";

export const myFunction = defineFunction({
  name: "myFunction",
  runtime: 18,
  entry: "./handler.ts",
});
