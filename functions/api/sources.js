export async function onRequest(context) {

  return new Response(
    JSON.stringify({
      code: 1,
      msg: "OK影视接口运行成功",
      data: []
    }),
    {
      headers:{
        "content-type":"application/json;charset=UTF-8"
      }
    }
  );

}
