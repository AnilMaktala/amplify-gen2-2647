import { Schema } from "@/amplify/data/resource";
import { QueryClient } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";

export const queryClient = new QueryClient();

export const client = generateClient<Schema>({ authMode: "apiKey" });
