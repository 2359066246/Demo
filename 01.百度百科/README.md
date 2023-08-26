# 我最喜欢的电视剧(百度百科)
要求地址：https://note.youdao.com/s/MZhfYg9z
预览地址：https://erdong-fe.github.io/FeProject2Dong/01.JavaScript/01.MyFavoriteTV/index.html

## 问题记录
8.20 
将之前的的样式重新排版了下  flex 布局大概理解了  但是flex-basis 和一些子属性   不是很理解
1. 修改了 顶部搜索栏样式
2. 重新修改了  content-table 的样式  现在使用的的flex  布局
3. 重新修改了  information-table  的样式  现在使用的的flex  布局



8.24 
1. 修改了一下 最小宽度，使移动端  没有多出来  溢出的
> 发现个问题 我之前写的代码  和现在有点不一样，如果现在直接，去修改最小宽是不行的，我需要比较的 这两个代码有什么区别

2. 关于 iamge  顶部三个 轮播图  如果只是设置 basis  属性 会溢出 但是再加上  withd=0  样式正常的情况  
宽设成0就等于以高为准，变成细长了，但是设置了宽和basis后就以basis为准 ; 就是可以不用，但是不能没有 就是设置flex的前提是子盒子要有自己的大小

``` csss
.iamge {
    flex-basis: 32%;
    /* width: 450px; */
    width: 0px;
    /* height: 330px; */
    border-radius: 15px;
}
```



待解决的
1.  content-table  使用vue的 语法渲染出来
2.  information-table 使用vue的 语法渲染出来
3.  忽然发现基本信息的 的横线，当屏幕占比出来的时候 会 溢出来 
    应该是这个地方 宽设置的有问题，可以再研究下

4.  输入框，不显示默认内容，的方法找一下  ( 8.21 这个地方  先用 input 中的 placeholder  属性去替代了)



## 知识点
placeholder 期望输入的值，当输入值的时候，里面的内容就会被替换掉
``` html
 <!-- placeholder="希望输入的值" -->
<input type="text" value="" placeholder="武林外传">
```