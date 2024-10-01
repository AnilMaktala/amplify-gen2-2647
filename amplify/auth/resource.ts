import { defineAuth, defineFunction } from "@aws-amplify/backend";
import { postConfirmation } from "./post-conformation/resource"
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Welcome to Amplify 🚀",
    },
  },
  triggers: {
    postConfirmation,
  },
});
