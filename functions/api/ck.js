export async function onRequest() {

  const api =
    "https://ckzy.me/api.php/provide/vod";

  const res = await fetch(
    api + "?ac=list&pg=1"
  );

  const data = await res.json();

  return new Response(
    JSON.stringify(data),
    {
      headers:{
        "content-type":
        "application/json;charset=UTF-8"
      }
    }
  );

}
