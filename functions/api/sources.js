export async function onRequest() {

  const data = {
    code: 1,
    msg: "ok",
    data: [
      {
        name: "155资源",
        type: "api",
        api: "https://155api.com/api.php/provide/vod"
      },

   {
    name:"非凡资源",
    type:"api",
    api:"https://cj.ffzyapi.com/api.php/provide/vod"
   },
{
  name: "🔞奶香香", 
  type:"api",
  api: "https://naixxzy.com/api.php/provide/vod"},
      
      
      {
        name: "CK资源",
        type: "api",
        api: "https://ckzy.me/api.php/provide/vod"
      }
    ]
  };

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
