var form = document.getElementById("form");
var address = document.getElementById("address");
var notes = document.getElementById("notes");
// 奶茶口味：
// form.nc_name.value
// 数量：
// form.number.value
// 杯型：
// form.bx.value
// 甜度：
// form.sugar.value
// 免费小料：
// getCheckbox(form.xl)
// 加价小料：
// getCheckbox(form.jlxl)
// 是否去冰：
// form.qb.value
// 是否去茶底：
// form.cd.value
// 地址
// address.value
// 手机号
// form.phone.value
// 送达时间
// form.time.value
// 备注：
// notes.value
// 支付方式
// form.money.value
// 封装个复选框的函数

function getCheckbox(element) {
    for (let i = 0; i < element.length; i++) {
        var str = "";
        // 我感觉 我这地方 写的很垃圾 ，不知道有没有其他写法
        for (let i = 0; i < element.length; i++) {
            if (i == element.length - 1 || i == 0) {
                if (element[i].checked == true) {
                    str += element[i].value;
                }
            } else if (element[i].checked == true) {
                str += element[i].value + ",";
            }
        }
    }
    return str
}


// 提交函数
var submit = document.getElementById("submit");
submit.onclick = function() {
    // alert("表单已经提交");
    var form_xl = getCheckbox(form.xl)
    var form_jlxl = getCheckbox(form.jlxl)
    let str =
        `【您的订单已经生成】
        ------------------------
        奶茶口味：${form.nc_name.value}
        数量：${form.number.value}
        杯型：${form.bx.value}
        甜度：${form.sugar.value}
        免费小料：${form_xl}
        加价小料：${form_jlxl}
        是否加冰：${form.qb.value}
        是否去茶底：${form.cd.value}
        地址：${address.value}
        手机号：${form.phone.value}
        期待送达时间：${form.time.value}
        备注：${notes.value}
        支付方式：${form.money.value}
    `;
    alert(str)
    return false;

}