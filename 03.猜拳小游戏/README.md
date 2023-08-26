# 猜拳小游戏

要求地址：https://erdong-fe.github.io/FeProject2Dong/01.JavaScript/03.RockPaperScissors


## 8/25 
1. 在写弹窗的时候发现 这个不能使用自带的，如果使用自带的，可能会出现问题

``` css
/* 这样写居中，在遇到移动端适配的时候 好像会出现问题 */
    position: fixed;
    /* display: none; */
    top: 40%;
    left: 50%;
    /* 将div的左上角移动到页面中央 */
    transform: translate(-50%, -50%);
```
2. 阻止表单默认提交事件
https://www.cnblogs.com/ldywebhome/p/15039088.html
``` js
var submit = document.getElementById("submit")
submit.onclick = (e) => {
    // e.preventDefault();
    return false
}
```