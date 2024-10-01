"use client";
import "@/app/App.css";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Amplify } from "aws-amplify";
import { fetchAuthSession } from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs, {
  API: {
    GraphQL: {
      async headers() {
        const idToken = (await fetchAuthSession()).tokens?.idToken?.toString();

        if (!idToken) return {};
        return {
          Authorization: idToken,
        };
      },
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <QueryClientProvider client={queryClient}> */}
      <body>{children}</body>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* </QueryClientProvider> */}
    </html>
  );
}
