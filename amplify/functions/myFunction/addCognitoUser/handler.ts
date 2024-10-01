export const handler = async (event: any) => {
  const addNewUser = (args: any) => ({
    user: "",
    error: "Something went wrong",
  });

  const { user, error } = await addNewUser(event.arguments);

  return {
    user: user as any, // Using `any` here as TypeScript complains otherwise about the return type of the handler
    error,
  };
};
