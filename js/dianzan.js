
import cloudbase from "@cloudbase/js-sdk";

const app = cloudbase.init({
  env: "hexo-blog-1gs1lv1j2bf8c35a",//自行替换
  region: "ap-shanghai",//自行替换
});
app
  .callFunction({
    // 云函数名称
    name: "like_for_hexo",
    // 传给云函数的参数
    data: {
      a: 1,
    },
  })
  .then((res) => {
    console.log(res);//成功返回结果
  })
  .catch(console.error);//错误返回结果

