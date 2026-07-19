import { sites } from "./config/sites";

export async function onRequest() {

  const data = sites.map(item => ({
    name: item.name,
    type: item.type,
    api: item.api
  }));

  return Response.json({
    code: 1,
    msg: "ok",
    data
  });

}
