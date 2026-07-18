export async function onRequest(context) {

  // 读取 sources 接口
  const url = new URL("/api/sources", context.request.url);

  const res = await fetch(url);

  const json = await res.json();

  // 转换成 OK影视需要的 sites 格式
  const sites = json.data.map((item,index)=>({
      key:"site"+index,
      name:item.name,
      type:1,
      api:item.api,
      playUrl:"",
      search:1
  }));

  return Response.json({
      sites
  });

}
