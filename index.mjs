import { log } from "./log.mjs";
export const handler = async (event) => {
  log(JSON.stringify("Log de evento:", event));
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
