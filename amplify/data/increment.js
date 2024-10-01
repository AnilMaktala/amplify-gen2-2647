export function request(ctx) {
  return {
    operation: "UpdateItem",
    key: {
      id: { S: ctx.args.id },
    },
    update: {
      expression: "ADD #value :one",
      expressionValues: { ":one": { N: 1 } },
      expressionNames: { "#value": "value" },
    },
  };
}

export function response(ctx) {
  return ctx.result.value;
}
