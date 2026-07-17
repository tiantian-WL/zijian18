export async function onRequest() {

  const data = {
    code: 1,
    msg: "ok",
    data: [
      {
        name: "155资源",
        type: "api",
        api: "https://155api.com/api.php/provide/vod"
      }
    ]
  };

  return new Response(
    JSON.stringify(data),
    {
      headers:{
        "content-type":"application/json;charset=UTF-8"
      }
    }
  );

}
