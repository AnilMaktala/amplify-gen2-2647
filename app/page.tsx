"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import CustomerCreateForm from "@/ui-components/CustomerCreateForm";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

const App = () => {
  const createMessage = async () => {
    const { data, errors } = await client.models.Message.create({
      roomId: "123",
      content: "Hello",
    });

    console.log({ data, errors });
  };

  const listByDate = async () => {
    const { data, errors } = await client.models.Message.listByDate(
      { roomId: "123" },
      { sortDirection: "ASC" }
    );

    console.log({ data, errors });
  };

  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <>
            <h1>Hello {user?.username}</h1>
            <h1>Protected content!</h1>

            <button onClick={createMessage}>Create Message</button>
            <button onClick={listByDate}>List By Date</button>

            <CustomerCreateForm />
          </>
        );
      }}
    </Authenticator>
  );
};

export default App;
