
function GetUrlRelativePath() {
    var url = document.location.toString();
    var arrUrl = url.split("//");

    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);

    if (relUrl.indexOf("?") != -1) {
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}

$(document).ready(function () {
    const app = cloudbase.init({
        env: "hexo-blog-1gs1lv1j2bf8c35a",//自行替换
        region: "ap-shanghai",//自行替换
    });

    app.callFunction({
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
    // const {
    //     Query,
    //     User
    // } = AV;
    // AV.init({
    //     appId: "{YOUR_APPID}",
    //     appKey: "{YOUR_APPKEY}",
    //     serverURL: "{YOUR_URL}"
    // });
    // var dianzans = [];
    // var hrefs = [];
    // var ids = [];
    // const query2 = new AV.Query('dianzan');
    // query2.find().then((dzs) => {
    //     for (i = dzs.length - 1; i >= 0; i--) {
    //         dianzans.push(dzs[i]["attributes"]["count"]);
    //         hrefs.push(dzs[i]["attributes"]["href"]);
    //         ids.push(dzs[i]["id"])
    //     }
    //     index = hrefs.indexOf(GetUrlRelativePath());
    //     console.log(dianzans[index])
    //     if (dianzans[index] === undefined) {
    //         document.getElementsByClassName("dianzan-count")[0].innerText = "0";
    //     } else {
    //         document.getElementsByClassName("dianzan-count")[0].innerText = dianzans[index];
    //     }
    // });
})

function setCount() {
    var dianzans = [];
    var hrefs = [];
    var ids = [];
    const query2 = new AV.Query('dianzan');
    query2.find().then((dzs) => {
        for (i = dzs.length - 1; i >= 0; i--) {
            dianzans.push(dzs[i]["attributes"]["count"]);
            hrefs.push(dzs[i]["attributes"]["href"]);
            ids.push(dzs[i]["id"])
        }
        index = hrefs.indexOf(GetUrlRelativePath());
        console.log(dianzans[index])
        if (dianzans[index] === undefined) {
            document.getElementsByClassName("dianzan-count")[0].innerText = "0";
        } else {
            document.getElementsByClassName("dianzan-count")[0].innerText = dianzans[index] + 1;
        }
    });
}

function dianzan() {
    const app = cloudbase.init({
        env: "hexo-blog-1gs1lv1j2bf8c35a",//自行替换
        region: "ap-shanghai",//自行替换
    });
    app.callFunction({
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


    // try {
    //     var dianzans = [];
    //     var hrefs = [];
    //     var ids = [];
    //     const query = new AV.Query('dianzan');
    //     query.find().then((dzs) => {
    //         for (i = dzs.length - 1; i >= 0; i--) {
    //             dianzans.push(dzs[i]["attributes"]["count"]);
    //             hrefs.push(dzs[i]["attributes"]["href"]);
    //             ids.push(dzs[i]["id"])
    //         }
    //         if (hrefs.indexOf(GetUrlRelativePath()) == -1) {
    //             console.log(1)
    //             const TestObject = AV.Object.extend('dianzan');
    //             const testObject = new TestObject();
    //             testObject.set('href', GetUrlRelativePath());
    //             testObject.set('count', 1);
    //             testObject.save();
    //         } else {
    //             index = hrefs.indexOf(GetUrlRelativePath());
    //             console.log(ids[index])
    //             query.get(ids[index]).then((todo) => {
    //                 todo.set('count', dianzans[index] + 1);
    //                 todo.save();
    //             });
    //         }
    //         setCount();
    //     });
    // } catch (err) {
    //     const TestObject = AV.Object.extend('dianzan');
    //     const testObject = new TestObject();
    //     testObject.set('href', GetUrlRelativePath());
    //     testObject.set('count', 1);
    //     testObject.save();
    // }

}

