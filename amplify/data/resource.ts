import { a, defineData, type ClientSchema } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-conformation/resource";

const schema = a
  .schema({
    UserProfile: a
      .model({
        email: a.string(),
        profileOwner: a.string(),
        kdnr: a.integer(),
      })
      //.secondaryIndexes((index) => [index("email")])
      .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),
    AtomicCounter: a
      .model({
        id: a.id(),
        value: a.integer(),
      })
      .authorization((allow) => [allow.authenticated()]),
    // increment: a
    //   .mutation()
    //   .arguments({
    //     id: a.string().required(),
    //   })
    //   // return type of the query
    //   .returns(a.integer())
    //   // .handler(
    //   //   a.handler.custom({
    //   //     dataSource: a.ref("AtomicCounter"),
    //   //     entry: "./increment.js",
    //   //   })
    //   // )
    //   .authorization((allow) => [allow.authenticated()]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "TestAPI",
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",

    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
