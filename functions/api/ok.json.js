import { sites } from "../../config/sites.js";
import { spiders } from "../../config/spiders.js";


export async function onRequest(context) {


  // =========================
  // API资源站
  // =========================

  const okSites = sites
    .filter(site => site.enable)
    .sort((a, b) => a.order - b.order)
    .map(site => ({
      key: site.key,
      name: site.name,
      type: 1,
      api: site.api,
      playUrl: "",
      search: 1
    }));



  // =========================
  // JS爬虫
  // =========================

  const okSpiders = spiders
    .filter(item => item.enable)
    .sort((a, b) => a.order - b.order)
    .map(item => ({
      key: item.key,
      name: item.name,
      url: https://zijian18.pages.dev/item.file
    }));



  // =========================
  // 返回OK影视配置
  // =========================

  const data = {

    code: 1,

    msg: "ok",

    sites: okSites,

    spiders: okSpiders

  };


  return new Response(

    JSON.stringify(data, null, 2),

    {

      headers: {

        "content-type":
        "application/json;charset=UTF-8",

        "cache-control":
        "no-cache"

      }

    }

  );

}
