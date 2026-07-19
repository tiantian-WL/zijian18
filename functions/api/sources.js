const data = sites
  .filter(site => site.enable)
  .sort((a, b) => a.order - b.order)
  .map(site => ({
    name: site.name,
    type: site.type,
    api: site.api
  }));
