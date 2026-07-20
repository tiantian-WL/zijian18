import { tvbox } from "../../config/tvbox.js";


export async function onRequest() {


  const spiders = tvbox
    .filter(item => item.enable)
    .sort((a,b)=>a.order-b.order)
    .map(item=>({
      key:item.key,
      name:item.name,
      url:item.url
    }));


  const data = {

    code:1,

    msg:"ok",

    spider:spiders

  };


  return new Response(

    JSON.stringify(data,null,2),

    {
      headers:{
        "content-type":
        "application/json;charset=UTF-8"
      }
    }

  );

}
