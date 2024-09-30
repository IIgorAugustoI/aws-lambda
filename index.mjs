import { log } from "./log.mjs";
export const handler = async (event) => {
  log(JSON.stringify("Evento:", event));
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
};
