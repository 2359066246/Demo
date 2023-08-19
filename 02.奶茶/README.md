# 制作点单系统

## 问题记录
8.14
目前遇到两个问题  
1、 复选框的值不知道怎么获取(8.19已解决)
2、在表格的这个地方  flex布局有问题


8.19
1. 不记得 怎么再简写的 怎么显示这个了
```js
开始这个地方取值时候 用错了  
试了一下 {},{{}},{$}  正确写法 应该是${}
`您点的奶茶口味是:${form.nc_name.value};
您点的数量: ${form.number.value}; 
```
2.   这个写法 好像是只支持 模板
``` js
` `
` 这个写法好像是调用不了 函数的` 
```
3. 给表单元素 添加了required 属性没用  
   不知道为啥提交没有提示  不确定  是不是 因为我 submit 函数写的有问题嘛


## 知识点

1. 复选框值选中
``` js
function getCheckbox(element) {
    for (let i = 0; i < element.length; i++) {
        var str = "";
        // 我感觉 我这地方 写的很垃圾 ，不知道有没有其他写法
        for (let i = 0; i < element.length; i++) {
            if (element[i].checked == true) {
                str += element[i].value + ",";
            }
        }
    }
    return str
}
```


2. 阻止submi默认提交事件
``` js
// 阻止submit 按钮的默认提交事件 调用函数返回 false
var submit = document.getElementById("submit");
submit.onclick = function() {
    alert("表单已经提交");
    return false;

}
```