export async function onRequest(context) {

  const response = await context.env.ASSETS.fetch(
    new Request("https://fake/config/sources.json")
  );

  const data = await response.json();

  return new Response(
    JSON.stringify(data),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    }
  );

}
