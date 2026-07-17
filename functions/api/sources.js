export async function onRequest(context) {

  const url = new URL(
    "/config/sources.json",
    context.request.url
  );

  const response = await fetch(url);

  const data = await response.json();

  return new Response(
    JSON.stringify(data),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "cache-control": "no-cache"
      }
    }
  );

}
