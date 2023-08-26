var submit = document.querySelector("#submit");
var from = document.querySelector("#from");
var button = document.querySelector("#button");
var bg = document.querySelector(".bg");
var robotUse = document.querySelector("#robot-use");
var userUse = document.querySelector("#user-use");
var result = document.querySelector("#result-sapn");
var robotSpan = document.querySelector("#robot-span");
var userSpan = document.querySelector("#user-span");
var h3 = document.querySelector("h3");
var end = document.querySelector("#end");
var endP = end.querySelector("p");
var endReset = end.querySelector("input");

// 下一回合
button.onclick = () => {
    bg.style = "background-color:rgba(0, 0, 0, 0.3)";
    from.className = "from"
}

// 生成随机数
var robot = ["st", "jd", "b"];
// userUse.href.baseVal
// 石头
var use = {
    st: "#icon-caiquanshitoujiandaobushitou",
    jd: "#icon-caiquanshitoujiandaobujiandao",
    b: "#icon-caiquanshitoujiandaobubu",
    wh: "#icon-question-full",
    jqr: "#icon-jiqiren",
    wj: "#icon-youxiwanjia"
}

// 计分
let scoring = 1
let robotScoring = 0;
let userScoring = 0;

// 点击提交
submit.onclick = (e) => {
    // 随机生成 0~2  三个随机数
    let round = Math.round(Math.random() * 2);
    // 清除 submit 默认提交事件
    e.preventDefault();
    from.className = "from none"
    bg.style = "background-color:rgba(0, 0, 0, 0)";

    var a = robot[round];
    var b = select.value

    robotUse.href.baseVal = use[a];
    userUse.href.baseVal = use[b];
    result.className = ""
        // robotScoring < 2 & userScoring < 2
    h3.innerHTML = "第" + scoring + "回合(共三个回合)";
    if (scoring < 3) {
        if (a == b) {
            result.innerHTML = "这局是平局";
        } else if ((a == "st" && b == "jd") || (a == "jd" && b == "b") || (a == "b" && b == "st")) {
            robotScoring++
            result.innerHTML = "机器人赢了";
        } else if ((b == "st" && a == "jd") || (b == "jd" && a == "b") || (b == "b" && a == "st")) {
            userScoring++
            result.innerHTML = "用户赢了";
        }
        // console.log(robotScoring, userScoring, scoring)
        robotSpan.innerHTML = "胜：" + robotScoring + " | 负：" + userScoring;
        userSpan.innerHTML = "胜：" + userScoring + " | 负：" + robotScoring;
    } else {
        button.className = "none"
        end.className = "end";
        // 比较两个分组的大小
        if (robotScoring == userScoring) {
            result.innerHTML = "这局是平局";
            endP.innerHTML = "还不错的嘛 和机器人打平了";
        } else if (robotScoring < userScoring) {
            result.innerHTML = "用户赢了";
            endP.innerHTML = "真厉害！机器人被你随便吊打";
        } else if (robotScoring > userScoring) {
            result.innerHTML = "机器人赢了";
            endP.innerHTML = "没关系啦！已经很棒了，要不再挑战一次";
        }
    }
    scoring++
    // 每局 都会自增
}

// 重新开始
endReset.onclick = () => {
    window.location.reload();
}