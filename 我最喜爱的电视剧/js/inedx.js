var vm = new Vue({
    el: '#app',
    data: {
        // 属性
        top: {
            top_h1: '武林外传',
            top_p: '2006年尚敬执导的电视剧',
            top_images: ["./images/overview-image1.jpeg", "./images/overview-image2.jpeg", "./images/overview-image3.jpeg"]
        },
        // ontent_data_span: ["收藏", "点赞", "转发"],
        // ontent_data_p: ["2200", "22000", "12200"] 
        // {
        //     ontent_data_span: ["收藏", "点赞", "转发"],
        //     ontent_data_p: ["2200", "22000", "12200"]
        // }
        content: {
            content_data: [{ ontent_data_span: "收藏", ontent_data_p: "2200" }, { ontent_data_span: "点赞", ontent_data_p: "22000" }, { ontent_data_span: "转发", ontent_data_p: "12200" }],
            content_tetx: ["《武林外传》是由尚敬执导，闫妮、沙溢、姚晨、喻恩泰、姜超、王莎莎等主演的章回体古装情景喜剧。", "该剧于2006年1月2日在CCTV8黄金档首播，并陆续在中国大陆各地方电视台重播。", "该剧在香港由无线电视首播，在台湾由八大电视台首播。", "该剧的故事围绕着一个在虚拟的明代（约在万历年间）的关中地区小镇七侠镇中同福客栈里的女掌柜佟湘玉和她的几个伙计展开。这群年轻人在同一屋檐下演绎了一幕幕经典的搞笑场面，在欢笑与眼泪中陪伴观众们一起渐渐成长。", "本剧抨击了宣扬暴力的武侠文化，并对当时的社会现象进行了模仿、讽刺与批判。"],
            content_table: [{}],
            content_image: "./images/overall-image.jpeg"
        },
        information: {
            information_table: [
                { information_th: "中文名", information_td: "武林外传" },
                { information_th: "主演", information_td: "间妮、沙溢、姚晨、喻恩泰、姜超、王莎莎、倪虹" },
                { information_th: "外文名", information_td: " My Own Swordsman" },
                { information_th: "集数", information_td: "  80集(电视播出80集，网络平台81集)" },
                { information_th: "出品公司", information_td: "北京联盟影业投资有限公司" },
                { information_th: "每集长度", information_td: "47分钟" },
                { information_th: "导演", information_td: "尚敬" },
                { information_th: "编剧", information_td: "宁财神、程娇娥" },
            ]
        },
        performer: [{
            img: "./images/actor1.jpeg",
            h3: "佟湘玉",
            span1: "演员",
            span2: "间妮",
            p: "寡妇门前是非多，而她这个只是在儿时见过丈夫的寡妇，是非少不了。身兼同福客栈的掌柜，和龙门镖局的千金，她从小娇生惯养锦衣玉食，下嫁衡山派掌门，却成了寡妇，从此要肩负起照顾尚未成年的小姑子的责任。所谓长嫂如母，她一直在努力当一名好嫂子兼幼教家，同时，身为掌柜，她还得全心全意去扶助身边的人们。这样的生活，她能适应吗"

        }, {
            img: "./images/actor2.jpeg",
            h3: "白展堂",
            span1: "演员",
            span2: "沙溢",
            p: "浪子回头金不换，而他这个已经回了头的浪子，要到哪儿去换那块传说中的大金子? 他本是传说中的盗圣，却不热爱本职工作一个曾经有过惨痛历史的人，他想洗尽污点，但是那么多风起云涌的灿烂回忆，乃至退出江湖隐居此处，过上一种全新的生活。他真能放得下吗?一边是常年追缉他的女捕头，一边是始终在身边，且脉脉含情的佟掌柜，他该选择谁呢?"

        }, {
            img: "./images/actor3.jpeg",
            h3: "郭芙蓉",
            span1: "演员",
            span2: "姚晨",
            p: "她的父亲是一代大侠，母亲是缉盗专家，可谓家世显赫。双亲的威名，始终把她笼罩在阴影之下。从小争胜好胜的她，选择了一条离家出走的道路，却在父亲终于同意让她再次闯江湖的第一站，却被扣在了同福客栈，从此开始了艰苦卓绝的杂役生涯。一个渴望行侠仗义的江湖小女子，一身娇横任性的毛病，她会习惯这种鸡毛蒜皮的生活吗"

        }, ]
    }
})