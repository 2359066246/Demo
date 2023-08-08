// 导入jquery



$.ajax({
    type: 'get', // 请求的方式，例如 GET 或 POST
    url: 'http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?', // 请求的 URL 地址
    data: {
        scope: 103,
        format: "json",
        appid: 379020,
        bk_key: "武林外传",
        bk_length: 600
    }, // 这次请求要携带的数据

    dataType: "jsonp",
    success: function(res) {
        console.log(res)
        console.log(res.key)
    }, // 请求成功之后的回调函数
    error: function() {}, //请求失败
    complete: function() {} //请求完成
})

$.getJSON("./js/index.json", function(data) {
    // console.log(data)
});
// $.getJSON("http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=武林外传&bk_length=600", function(data) {
//     console.log(data)
// });


function baidu() {
    let script = document.createElement('script')
    script.src = 'http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?cb=aa&scope=103&format=json&appid=379020&bk_key=武林外传&bk_length=600'
    document.body.appendChild(script)
        // console.log(script, '标签')
}


function aa(res) {
    console.log(res, '返回值')
        // vm.arr = res.s
        // console.log(vm.arr, '代表当期vue实例')
}