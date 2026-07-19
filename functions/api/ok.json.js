import { sites } from "./config/sites";

export async function onRequest() {

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

  return Response.json({
    sites: okSites
  });

}
