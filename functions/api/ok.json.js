export async function onRequest() {

  const data = {
    sites: [
      {
        key: "155",
        name: "155资源",
        type: 1,
        api: "https://155api.com/api.php/provide/vod",
        playUrl: "",
        search: 1
      },
      {
        key: "ck",
        name: "CK资源",
        type: 1,
        api: "https://ckzy.me/api.php/provide/vod",
        playUrl: "",
        search: 1
      }
    ]
  };

  return new Response(
    JSON.stringify(data),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    }
  );

}
