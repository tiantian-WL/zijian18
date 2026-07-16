

export default {
  async fetch(request) {

    return new Response(
      JSON.stringify({
        code: 1,
        msg: "Worker运行成功",
        time: new Date().toISOString()
      }),
      {
        headers:{
          "content-type":"application/json;charset=UTF-8"
        }
      }
    );

  }
}
