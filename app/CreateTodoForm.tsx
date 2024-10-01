// Create a react component that creates a todo using the Amplify Gen 2 data client
import { useState } from "react";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();

type Todo = Schema["Todo"]["type"];

const CreateTodo = () => {
  const [content, setContent] = useState<Todo["content"]>("");

  const onCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data: todo, errors } = await client.models.Todo.create({
      content,
    });

    if (errors) {
      console.error(errors);
    } else {
      console.log({ todo });
    }
  };

  return (
    <form onSubmit={onCreateTodo}>
      <input name="todo" onChange={(e) => setContent(e.target.value)} />
      <button>Create Todo</button>
    </form>
  );
};

export default CreateTodo;
