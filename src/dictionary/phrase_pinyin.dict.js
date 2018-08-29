"use strict";
var phrase_pinyin_dict = {
    "阿訇": "ahong",
    "阿罗汉": "aluohan",
    "阿木林": "amulin",
    "阿姨": "ayi",
    "阿谀": "eyu",
    "阿附": "efu",
    "阿胶": "ejiao",
    "阿弥陀佛": "emituofo",
    "了解": "liaojie",
    "了如指掌": "liaoruzhizhang",
    "一目了然": "yimuliaoran",
    "俩人": "liaren",
    "你们俩": "nimenlia",
    "我们俩": "womenlia",
    "他们俩": "tamenlia",
    "子弹": "zidan",
    "炮弹": "paodan",
    "弹药": "danyao",
    "调查": "diaocha",
    "声调": "shengdiao",
    "音乐": "yinyue",
    "乐曲": "yuequ",
    "乐器": "yueqi",
    "乐谱": "yuepu",
    "缝隙": "fengxi",
    "胸脯": "xiongpu",
    "裂缝": "liefeng",
    "干部": "ganbu",
    "才干": "caigan",
    "干劲": "ganjin",
    "骨干": "gugan",
    "爱好": "aihao",
    "恶心": "exin",
    "挨个": "aige",
    "挨近": "aijin",
    "挨打": "aida",
    "挨说": "aishuo",
    "拗口": "aokou",
    "执拗": "zhiniu",
    "翅膀": "chibang",
    "蛤蚌": "gebang",
    "蚌埠": "bengbu",
    "薄弱": "boruo",
    "稀薄": "xibo",
    "单薄": "danbo",
    "淡薄": "danbo",
    "尖嘴薄舌": "jianzuiboshe",
    "厚薄": "houbao",
    "碉堡": "diaobao",
    "堡垒": "baolei",
    "堡子": "buzi",
    "吴堡": "wubu",
    "瓦窑堡": "wayaobu",
    "柴沟堡": "chaigoubu",
    "十里堡": "shilipu",
    "暴露": "baolou",
    "一曝十寒": "yipushihan",
    "背脊": "beiji",
    "背景": "beijing",
    "背静": "beijing",
    "手臂": "shoubi",
    "臂膀": "bibang",
    "胳臂": "gebei",
    "复辟": "fubi",
    "裨益": "biyi",
    "裨补": "bibu",
    "骠骑": "piaoqi",
    "骠勇": "piaoyong",
    "屏除": "bingchu",
    "屏气": "bingqi",
    "屏弃": "bingqi",
    "屏息": "bingxi",
    "屏幕": "pingmu",
    "屏风": "pingfeng",
    "屏藩": "pingfan",
    "剥削": "boxue",
    "淡泊": "danbo",
    "漂泊": "piaobo",
    "停泊": "tingbo",
    "湖泊": "hupo",
    "血泊": "xuepo",
    "大伯": "dabo",
    "伯伯": "bobo",
    "老伯": "laobo",
    "大伯子": "dabaizi",
    "颠簸": "dianbo",
    "簸箕": "boji",
    "胳膊": "gebo",
    "萝卜": "luobo",
    "矿藏": "kuangcang",
    "宝藏": "baozang",
    "不差累黍": "buchaleishu",
    "不差": "bucha",
    "偏差": "piancha",
    "色差": "secha",
    "差别": "chabie",
    "视差": "shicha",
    "误差": "wucha",
    "电势差": "dianshicha",
    "一念之差": "yinianzhicha",
    "差池": "chachi",
    "言差语错": "yanchayucuo",
    "一差二错": "yichaercuo",
    "阴差阳错": "yinchayangcuo",
    "差等": "chadeng",
    "差额": "chae",
    "差价": "chajia",
    "差强人意": "chaqiangrenyi",
    "差数": "chashu",
    "差异": "chayi",
    "差不多": "chabuduo",
    "差不离": "chabuli",
    "差点": "chadian",
    "参差": "cenci",
    "颤动": "chandong",
    "发颤": "fachan",
    "战栗": "zhanli",
    "颤栗": "zhanli",
    "打颤": "dazhan",
    "场合": "changhe",
    "场所": "changsuo",
    "冷场": "lengchang",
    "捧场": "pengchang",
    "外场": "waichang",
    "圩场": "xuchang",
    "场院": "changyuan",
    "一场雨": "yichangyu",
    "排场": "paichang",
    "嘲讽": "chaofeng",
    "嘲骂": "chaoma",
    "嘲笑": "chaoxiao",
    "安步当车": "anbudangche",
    "杯水车薪": "beishuichexin",
    "闭门造车": "bimenzaoche",
    "螳臂当车": "tangbidangche",
    "称心": "chenxin",
    "称意": "chengyi",
    "称职": "chenzhi",
    "对称": "duichen",
    "相称": "xiangchen",
    "包乘制": "baochengzhi",
    "乘便": "chengbian",
    "乘风破浪": "chengfengpolang",
    "乘客": "chengke",
    "乘势": "chengshi",
    "乘兴": "chengxing",
    "澄清": "chengqing",
    "尺寸": "chicun",
    "尺头": "chitou",
    "冲床": "chongchuang",
    "冲模": "chongmu",
    "装模作样": "zhuangmuzuoyang",
    "遗臭万年": "yichouwannian",
    "粘贴": "zhantie",
    "校舍": "xiaoshe",
    "数学": "shuxue",
    "数字": "shuzi",
    "数目": "shumu",
    "退避三舍": "tuibisanshe",
    "乳臭": "ruxiu",
    "铜臭": "tongxiu",
    "处罚": "chufa",
    "处分": "chufen",
    "处决": "chujue",
    "处理": "chuli",
    "处女": "chunv",
    "处置": "chuzhi",
    "畜力": "chuli",
    "家畜": "jiachu",
    "牲畜": "shengchu",
    "幼畜": "youchu",
    "畜产": "xuchan",
    "畜牧": "xumu",
    "畜养": "xuyang",
    "草创": "caochuang",
    "创举": "chuangju",
    "首创": "shouchuang",
    "创造": "chuangzao",
    "创作": "chuangzuo",
    "创伤": "chuangshang",
    "重创": "zhongchuang",
    "绰绰有余": "chuochuoyouyu",
    "宽绰": "kuanchuo",
    "枞树": "congshu",
    "枞阳": "zongyang",
    "万头攒动": "wantoucuandong",
    "万箭攒心": "wanjiancuanxin",
    "报答": "baoda",
    "答复": "dafu",
    "搭理": "dali",
    "答应": "daying",
    "苏打": "suda",
    "大夫": "daifu",
    "大王": "daiwang",
    "大城": "daicheng",
    "逮捕": "daibu",
    "当地": "dangdi",
    "当年": "dangnian",
    "当日": "dangri",
    "当天": "dangtian",
    "当时": "dangshi",
    "适当": "shidang",
    "颠倒": "diandao",
    "颠三倒四": "diansandaosi",
    "倾箱倒箧": "qingxiangdaoqie",
    "排山倒海": "paishandaohai",
    "倒板": "daoban",
    "倒仓": "daocang",
    "倒嚼": "daojiao",
    "倒嗓": "daosang",
    "倒戈": "daoge",
    "潦倒": "liaodao",
    "提防": "difang",
    "的确": "dique",
    "打点": "dadian",
    "都市": "dushi",
    "首都": "shoudu",
    "大都": "dadu",
    "撺掇": "cuanduo",
    "掂掇": "dianduo",
    "忖度": "cunduo",
    "度德量力": "duodeliangli",
    "理发": "lifa",
    "脱发": "tuofa",
    "结发": "jiefa",
    "牌坊": "paifang",
    "坊巷": "fangxiang",
    "粉坊": "fenfang",
    "磨坊": "mofang",
    "碾坊": "nianfang",
    "染坊": "ranfang",
    "油坊": "youfang",
    "谷坊": "gufang",
    "葛藤": "geteng",
    "葛布": "gebu",
    "瓜葛": "guage",
    "补给": "buji",
    "供给": "gongji",
    "给予": "jiyu",
    "配给": "peiji",
    "自给自足": "zijizizu",
    "重荷": "zhonghe",
    "负荷": "fuhe",
    "恐吓": "konghe",
    "威吓": "weihe",
    "系鞋带": "jixiedai",
    "系绳子": "jishengzi",
    "放假": "fangjia",
    "假期": "jaqi",
    "请假": "qingjia",
    "暑假": "shujia",
    "五更": "wugeng",
    "三更": "sangeng",
    "更生": "gengsheng",
    "脖颈": "bogeng",
    "提供": "tigong",
    "供销": "gongxiao",
    "口供": "kougong",
    "翻供": "fangong",
    "上供": "shanggong",
    "勾当": "goudang",
    "估衣": "guyi",
    "骨碌": "gulu",
    "骨朵": "guduo",
    "冠心病": "guanxinbing",
    "秦桧": "qingui",
    "哈达": "hada",
    "哈什蚂": "hashima",
    "可汗": "kehan",
    "巷道": "hangdao",
    "寒号": "hanhao",
    "唱和": "changhe",
    "附和": "fuhe",
    "曲高和寡": "qugaohegua",
    "搀和": "chanhuo",
    "搅合": "jiaohe",
    "暖和": "nuanhuo",
    "热和": "rehuo",
    "软和": "ruanhuo",
    "一丘之貉": "yiqiuzhihe",
    "貉绒": "haorong",
    "貉子": "haozi",
    "喝彩": "hecai",
    "喝道": "hedao",
    "喝令": "heling",
    "喝止": "hezhi",
    "呼幺喝六": "huyaoheliu",
    "蛮横": "manheng",
    "横财": "hengcai",
    "饥荒": "jihuang",
    "奇数": "jishu",
    "通缉": "tongji",
    "侦缉": "zhenji",
    "茶几": "chaji",
    "条几": "tiaoji",
    "雪茄": "xuejia",
    "夹带": "jiadai",
    "夹道": "jiadao",
    "间道": "jiandao",
    "间谍": "jiandie",
    "间断": "jianduan",
    "间或": "jianhuo",
    "间接": "jianjie",
    "间距": "jianju",
    "间隙": "jianxi",
    "挑拨离间": "tiaobolijian",
    "味同嚼蜡": "weitongjiaola",
    "咬文嚼字": "yaowenjiaozi",
    "咀嚼": "jujue",
    "侥幸": "jiaoxing",
    "角斗": "juedou",
    "口觉": "koujue",
    "主角": "zhujue",
    "配角": "peijue",
    "角力": "jueli",
    "围剿": "weijiao",
    "剿说": "chaoshuo",
    "剿袭": "chaoxi",
    "校勘": "jiaokan",
    "校样": "jiaoyang",
    "校正": "jiaozheng",
    "校对": "jiaodui",
    "校订": "jiaoding",
    "结巴": "jieba",
    "结实": "jieshi",
    "芥菜": "jiecai",
    "芥末": "jiemo",
    "芥蓝菜": "gailancai",
    "刚劲": "gangjing",
    "强劲": "qiangjing",
    "劲敌": "jingdi",
    "疾风劲草": "jifengjingcao",
    "矩形": "juxing",
    "规矩": "guiju",
    "龟裂": "junlie",
    "卡子": "qiazi",
    "关卡": "guanqia",
    "看管": "kanguan",
    "看护": "kanhu",
    "看守": "kanshou",
    "看门": "kanmen",
    "坷垃": "kela",
    "贝壳": "beike",
    "脑壳": "naoke",
    "驳壳枪": "bokeqiang",
    "地壳": "diqiao",
    "甲壳": "jiaqiao",
    "躯壳": "quqiao",
    "空心吃药": "kongxinchiyao",
    "空白": "kongbai",
    "钻空": "zuankong",
    "溃烂": "kuilan",
    "溃脓": "huinong",
    "烙印": "laoyin",
    "烙铁": "laotie",
    "烙饼": "laobing",
    "炮烙": "paoluo",
    "勒逼": "lebi",
    "勒令": "leling",
    "勒派": "lepai",
    "勒索": "lesuo",
    "悬崖勒马": "xuanyalema",
    "擂台": "leitai",
    "打擂": "dalei",
    "累赘": "leizhui",
    "带累": "dailei",
    "累及": "leiji",
    "连累": "lianlei",
    "牵累": "qianlei",
    "管窥蠡测": "guankuilice",
    "蠡县": "lixian",
    "范蠡": "fanli",
    "打量": "daliang",
    "掂量": "dianliang",
    "思量": "siliang",
    "估量": "guliang",
    "测量": "celiang",
    "衡量": "hengliang",
    "量体裁衣": "liangticaiyi",
    "笼子": "longzi",
    "牢笼": "laolong",
    "笼络": "longluo",
    "笼统": "longtong",
    "笼罩": "longzhao",
    "佝偻": "goulou",
    "伛偻": "yulv",
    "赤身露体": "chishenluti",
    "露天": "lutian",
    "露骨": "lugu",
    "抛头露面": "paotoulumian",
    "露富": "loufu",
    "露苗": "loumiao",
    "露相": "louxiang",
    "露马脚": "loumajiao",
    "捋胡子": "lvhuzi",
    "绿林": "lulin",
    "鸭绿江": "yalujiang",
    "络腮": "luosai",
    "落膘": "luobiao",
    "落花生": "luohuasheng",
    "着落": "zhuoluo",
    "落价": "laojia",
    "落色": "laoshai",
    "落枕": "laozhen",
    "落炕": "laokang",
    "落子": "laozi",
    "丢三落四": "diusanlasi",
    "瓜蔓": "guawan",
    "蔓延": "manyan",
    "不蔓不枝": "bumanbuzhi",
    "压蔓": "yawan",
    "流氓": "liumang",
    "秘鲁": "bilu",
    "靡费": "mifei",
    "风靡": "fengmi",
    "萎靡": "weimi",
    "披靡": "pimi",
    "泌阳": "biyang",
    "模子": "muzi",
    "模具": "muju",
    "模样": "muyang",
    "困难": "kunnan",
    "难兄难弟": "nanxiongnandi",
    "排忧解难": "paiyoujienan",
    "发难": "fanan",
    "刁难": "diaonan",
    "责难": "zenan",
    "尿脬": "suipao",
    "率领": "shuailing",
    "草率": "caoshuai",
    "坦率": "tanshuai",
    "出没": "chumo",
    "没落": "moluo",
    "出没无常": "chumowuchang",
    "没收": "moshou",
    "宁可": "ningke",
    "宁愿": "ningyuan",
    "安宁": "anning",
    "里弄": "lilong",
    "弄堂": "longtang",
    "疟疾": "nüeji",
    "发疟子": "fayaozi",
    "婀娜": "enuo",
    "袅娜": "niaonuo",
    "排子车": "paiziche",
    "迫击炮": "paijipao",
    "心宽体胖": "xinkuantipan",
    "喷嚏": "penti",
    "喷香": "penxiang",
    "嚏喷": "tipen",
    "唱片儿": "changpianer",
    "画片儿": "huapianer",
    "相片儿": "xiangpianer",
    "影片儿": "yingpianer",
    "仆从": "pucong",
    "朴刀": "podao",
    "朴硝": "poxiao",
    "厚朴": "houpo",
    "曝光": "baoguang",
    "蹊跷": "qiqiao",
    "荨麻": "xunma",
    "打哈欠": "dahaqian",
    "勉强": "mianqiang",
    "牵强": "qianqiang",
    "强词夺理": "qiangciduoli",
    "强迫": "qiangpo",
    "强颜欢笑": "qiangyanhuanxiao",
    "倔强": "juejiang",
    "翘首": "qiaoshou",
    "翘楚": "qiaochu",
    "连翘": "lianqiao",
    "亲家": "qingjia",
    "大曲": "daqu",
    "红曲": "hongqu",
    "苣荬菜": "qumaicai",
    "懒散": "lansan",
    "零散": "lingsan",
    "散漫": "sanman",
    "哭丧": "kusang",
    "丧事": "sangshi",
    "扫兴": "saoxing",
    "扫帚": "saozhou",
    "色子": "shaizi",
    "活塞": "huosai",
    "瓶塞": "pingsai",
    "煞尾": "shawei",
    "煞白": "shabai",
    "厦门": "xiamen",
    "紫衫": "zishan",
    "红杉": "hongshan",
    "水杉": "shuishan",
    "杉木": "shamu",
    "苫布": "shanbu",
    "草苫": "caoshan",
    "宿舍": "sushe",
    "什么": "shenme",
    "桑葚": "sangshen",
    "桑葚儿": "sangrener",
    "似的": "shide",
    "钥匙": "yaoshi",
    "游说": "youshui",
    "说服": "shuifu",
    "数见不鲜": "shuojianbuxian",
    "不遂": "busui",
    "毛遂自荐": "maosuizijian",
    "半身不遂": "banshenbusui",
    "莎草": "suocao",
    "缩砂密": "sushami",
    "重沓": "chongta",
    "疲沓": "pita",
    "妥帖": "tuotie",
    "服服帖帖": "fufutietie",
    "俯首帖耳": "fushoutieer",
    "请帖": "qingtie",
    "字帖儿": "zitieer",
    "字帖": "zitie",
    "碑帖": "beitie",
    "瓦刀": "wadao",
    "圩子": "weizi",
    "委靡": "weimi",
    "尾巴": "weiba",
    "马尾巴": "mayiba",
    "乌拉": "wula",
    "屡见不鲜": "lvjianbuxian",
    "相机行事": "xiangjixingshi",
    "银行": "yinhang",
    "内省": "neixing",
    "反省": "fanxing",
    "省亲": "xingqin",
    "不省人事": "buxingrenshi",
    "星宿": "xingxiu",
    "二十八宿": "ershibaxiu",
    "苜蓿": "muxu",
    "削减": "xuejian",
    "瘦削": "shouxue",
    "切削": "qiexiao",
    "削铅笔": "xiaoqianbi",
    "削球": "xiaoqiu",
    "贫血": "pinxue",
    "心血": "xinxue",
    "呕心沥血": "ouxinlixue",
    "血泪": "xuelei",
    "狗血喷头": "gouxuepentou",
    "殷红": "yanhong",
    "锁钥": "suoyue",
    "弃甲曳兵": "qijiayebing",
    "摇曳": "yaoye",
    "曳光弹": "yeguangdan",
    "树荫": "shuyin",
    "林荫道": "linyindao",
    "应届": "yingjie",
    "应许": "yingxu",
    "应承": "yingcheng",
    "应付": "yingfu",
    "应声": "yingsheng",
    "应时": "yingshi",
    "应验": "yingyan",
    "应傲": "yingao",
    "应用": "yingyong",
    "应运": "yingyun",
    "应征": "yingzheng",
    "里应外合": "liyingwaihe",
    "呼吁": "huyu",
    "晕倒": "yundao",
    "头晕": "touyun",
    "月晕": "yueyun",
    "血晕": "xieyun",
    "晕车": "yunche",
    "登载": "dengzai",
    "记载": "jizai",
    "搭载": "dazai",
    "怨声载道": "yuanshengzaidao",
    "重载": "chongzai",
    "转载": "zhuanzai",
    "装载": "zhuangzai",
    "千载难逢": "qianzainanfeng",
    "载歌载舞": "zaigezaiwu",
    "选择": "xuanze",
    "择不开": "zhaibukai",
    "择菜": "zhaicai",
    "择席": "zhaixi",
    "轧钢": "zhagang",
    "轧辊": "zhagun",
    "着慌": "zhaohuang",
    "着急": "zhaoji",
    "着凉": "zhaoliang",
    "着忙": "zhaomang",
    "着水": "zheshui",
    "着迷": "zhaomi",
    "着手": "zhuoshou",
    "着眼": "zhuoyan",
    "着意": "zhuoyi",
    "着重": "zhuozhong",
    "不着边际": "buzhuobianji",
    "失着": "shizhao",
    "骨殖": "gushi",
    "中奖": "zhongjiang",
    "中靶": "zhongba",
    "种子": "zhongzi",
    "播种": "bozhong",
    "种植": "zhongzhi",
    "种树": "zhongshu",
    "种花": "zhonghua",
    "种草": "zhongcao",
    "压轴": "yazhou",
    "属望": "zhuwang",
    "土著": "tuzhu",
    "运转": "yunzhuan",
    "经幢": "jingchuang",
    "钻探": "zuantan",
    "钻孔": "zuankong",
    "钻床": "zuanchuang",
    "钻杆": "zuangan",
    "钻具": "zuanju",
    "柞蚕": "zuocan",
    "柞绸": "zuochou",
    "柞水": "zhashui",
    "作坊": "zuofang",
    "传记": "zhuanji",
    "水浒传": "shuihuzhuan",
    "传说": "chuanshuo",
    "传闻": "chuanwen",
    "传问": "chuanwen",
    "传承": "chuancheng",
    "左传": "zuozhuan",
    "转身": "zhuanshen",
    "转动": "zhuandong",
    "转速": "zhuansu",
    "背包": "beibao",
    "投奔": "touben",
    "扁担": "biandan",
    "扁舟": "pianzhou",
    "便宜": "pianyi",
    "便宜行事": "bianyixingshi",
    "古刹": "gucha",
    "刹车": "shache",
    "禅让": "shanrang",
    "封禅": "fengshan",
    "称呼": "chenghu",
    "称道": "chengdao",
    "伺候": "cihou",
    "攒动": "cuandong",
    "攒射": "cuanshe",
    "积攒": "jizan",
    "单于": "chanyu",
    "提溜": "diliu",
    "目的": "mudi",
    "粮囤": "liangdun",
    "囤积": "tunji",
    "更换": "genghuan",
    "更事": "gengshi",
    "枸橘": "gouju",
    "枸杞": "gouqi",
    "吐谷浑": "tuyuhun",
    "大汗": "dahan",
    "引吭高歌": "yinhanggaoge",
    "吭声": "kengsheng",
    "和面": "huomian",
    "和泥": "huoni",
    "和药": "huoyao",
    "会计": "kuaiji",
    "财会": "caikuai",
    "哄堂": "hongtang",
    "哄骗": "hongpian",
    "起哄": "qihong",
    "豁口": "huokou",
    "奇偶": "jiou",
    "几案": "jian",
    "茄子": "qiezi",
    "将校": "jiangxiao",
    "将兵": "jiangbing",
    "僬侥": "jiaoyao",
    "龟兹": "qiuci",
    "苤蓝": "pielan",
    "勒紧": "leijin",
    "脉脉": "momo",
    "埋怨": "manyuan",
    "悄然": "qiaoran",
    "悄寂": "qiaoji",
    "切磋": "qiecuo",
    "切割": "qiege",
    "弯曲": "wanqu",
    "曲调": "qudiao",
    "曲艺": "quyi",
    "曲牌": "qupai",
    "堵塞": "duse",
    "阻塞": "zuse",
    "塞翁失马": "saiwengshima",
    "边塞": "biansai",
    "塞外": "saiwai",
    "折本": "sheben",
    "什物": "shiwu",
    "什锦": "shijin",
    "标识": "biaozhi",
    "博闻强识": "bowenqiangzhi",
    "相似": "xiangsi",
    "说客": "shuike",
    "数落": "shuluo",
    "沓子": "tazi",
    "调皮": "tiaopi",
    "调换": "diaohuan",
    "拓本": "taben",
    "拓片": "tapian",
    "尉迟": "yuchi",
    "尉犁": "yuli",
    "鲜见": "xianjian",
    "行伍": "hangwu",
    "行市": "hangshi",
    "殷殷": "yinyin",
    "佣金": "yongjin",
    "佣钱": "yongqian",
    "熨帖": "yutie",
    "熨烫": "yuntang",
    "参与": "canyu",
    "吁求": "yuqiu",
    "耕种": "gengzhong",
    "属文": "zhuwen",
    "属意": "zhuyi",
    "正月": "zhengyue",
    "正旦": "zhengdan",
    "丽水": "lishui",
    "台州": "taizhou",
    "作为": "zuowei",
    "成为": "chengwei",
    "为难": "weinan",
    "咽喉": "yanhou",
    "呜咽": "wuye",
    "哽咽": "gengye",
    "鲜为人知": "xianweirenzhi",
    "羽扇纶巾": "yushanguanjin",
    "惟妙惟肖": "weimiaoweixiao",
    "一唱一和": "yichangyihe",
    "寡廉鲜耻": "gualianxianchi",
    "自怨自艾": "ziyuanziyi",
    "歃血为盟": "shaxueweimeng",
    "揠苗助长": "yamiaozhuzhang",
    "各奔前程": "gebenqiancheng",
    "创巨痛深": "chuangjutongshen",
    "大而无当": "daerwudang",
    "大腹便便": "dafupianpian",
    "箪食壶浆": "dansihujiang",
    "刀耕火种": "daogenghuozhong",
    "等量齐观": "dengliangqiguan",
    "法家拂士": "fajiabishi",
    "飞来横祸": "feilaihenghuo",
    "封妻荫子": "fengqiyinzi",
    "好吃好喝": "haochihaohe",
    "好吃懒做": "haochilanzuo",
    "好吹牛": "haochuiniu",
    "好大喜功": "haodaxigong",
    "好动": "haodong",
    "好学": "haoxue",
    "好好学习": "haohaoxuexi",
    "好高骛远": "haogaowuyuan",
    "好古": "haogu",
    "好管闲事": "haoguanxianshi",
    "好客": "haoke",
    "好奇": "haoqi",
    "好色": "haose",
    "好胜": "haosheng",
    "喜好": "xihao",
    "可恶": "kewu",
    "厌恶": "yanwu",
    "憎恶": "zengwu",
    "好逸恶劳": "haoyiwulao",
    "公诸同好": "gongzhutonghao",
    "冠盖相属": "guangaixiangzhu",
    "荷枪实弹": "heqiangshitan",
    "哭天抢地": "kutianqiangdi",
    "患难与共": "huannanyugong",
    "吉人天相": "jirentianxiang",
    "济济一堂": "jijiyitang",
    "间不容发": "jianburongfa",
    "教学相长": "jiaoxuexiangzhang",
    "令人发指": "lingrenfazhi",
    "深恶痛疾": "shenwutongji",
    "拾级而上": "shejiershang",
    "敷衍塞责": "fuyanseze",
    "否极泰来": "pijitailai",
    "呱呱坠地": "guguzhuidi",
    "直言贾祸": "zhiyanguhuo",
    "图穷匕见": "tuqiongbixian",
    "虚与委蛇": "xuyuweiyi",
    "力能扛鼎": "linenggangding",
    "如法炮制": "rufapaozhi",
    "泥古不化": "nigubuhua",
    "重庆": "chongqing",
    "柏林": "bolin",
    "并州": "bingzhou",
    "吐蕃": "tubo",
    "大埔": "dabu",
    "黄埔": "huangpu",
    "宝坻": "baodi",
    "白纸坊": "baizhifang",
    "东阿": "donge",
    "东莞": "dongguan",
    "涡河": "guohe",
    "镐京": "haojing",
    "华山": "huashan",
    "济南": "jinan",
    "六安": "luan",
    "渑池": "mianchi",
    "天姥山": "tianmushan",
    "中牟": "zhongmu",
    "蔚县": "yuxian",
    "浒墅关": "xushuguan",
    "莘庄": "xinzhuang",
    "监利": "jianli",
    "歙县": "shexian",
    "燕山": "yanshan",
    "处方": "chufang",
    "扒手": "pashou",
    "扒草": "pacao",
    "数据": "shuju",
    "重新": "chongxin",
    "无数": "wushu",
    "成都": "chengdu",
    "重来": "chonglai",
    "重复": "chongfu",
    "重申": "chongshen",
    "重阳": "chongyang",
    "重逢": "chongfeng",
    "重叠": "chongdie",
    "重霄": "chongxiao",
    "重唱": "chongchang",
    "重洋": "chongyang",
    "重峦叠嶂": "chongluandiezhang",
    "成长": "chengzhang",
    "膀胱": "pangguang",
    "膀肿": "pangzhong",
    "膀胱区疼痛": "pangguangqutengtong",
    "膀胱镜": "pangguangjing",
    "洪洞": "hongdong",
    "一撮儿盐": "yicuoryan",
    "一撮盐": "yicuoyan",
    "一撮毛": "yizuomao",
    "枪杆": "qianggan",
    "烟杆": "yangan",
    "东涌": "dongchong",
    "西涌": "xichong",
    "东西涌": "dongxichong",
    "霞涌": "xiachong",
    "葵涌": "kuichong"
};
module.exports = phrase_pinyin_dict;
