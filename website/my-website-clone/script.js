const formatter = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const shortNumber = new Intl.NumberFormat("zh-CN");

const imagePool = [
  { src: "./download.png", fallback: "./download.png", position: "center center" },
  {
    src: "./bcca1c371389e7da16618e22d1f8fd05.jpeg",
    fallback: "./bcca1c371389e7da16618e22d1f8fd05.jpeg",
    position: "center 34%",
  },
  { src: "./assets/fallback-campaign-1.svg", fallback: "./assets/fallback-campaign-1.svg", position: "center center" },
  { src: "./assets/fallback-campaign-2.svg", fallback: "./assets/fallback-campaign-2.svg", position: "center center" },
  { src: "./assets/fallback-campaign-3.svg", fallback: "./assets/fallback-campaign-3.svg", position: "center center" },
  { src: "./assets/fallback-campaign-4.svg", fallback: "./assets/fallback-campaign-4.svg", position: "center center" },
  { src: "./assets/fallback-campaign-5.svg", fallback: "./assets/fallback-campaign-5.svg", position: "center center" },
];

const donationBands = [25, 50, 100, 250, 500, 1000];

const donorTemplates = [
  { name: "匿名善心人士", location: "阿联酋·迪拜", message: "愿孩子尽快顺利进入治疗。" },
  { name: "Fatima A.", location: "沙特·吉达", message: "愿真主护佑她早日康复。" },
  { name: "Muhammad K.", location: "卡塔尔·多哈", message: "希望这笔善款能帮孩子更快等到手术。" },
  { name: "匿名捐助者", location: "科威特", message: "看到项目后很揪心，愿尽一点心意。" },
  { name: "Amina S.", location: "阿曼", message: "愿家人不要失去希望，愿治疗尽快安排。" },
  { name: "Yousef M.", location: "巴林", message: "请继续更新项目进展，我们会持续关注。" },
  { name: "Zahra H.", location: "约旦·安曼", message: "希望孩子平安，家人也能坚持下去。" },
  { name: "Layla R.", location: "阿联酋·阿布扎比", message: "愿这笔钱尽快用于检查和住院安排。" },
  { name: "Noor H.", location: "英国·伦敦", message: "愿她能重新呼吸平稳、像其他孩子一样长大。" },
  { name: "Khaled A.", location: "沙特·利雅得", message: "每个孩子都值得得到及时治疗。" },
  { name: "Hanan M.", location: "法国·巴黎", message: "一份小小心意，希望能帮她向前一步。" },
  { name: "Saeed K.", location: "马来西亚·吉隆坡", message: "愿更多人看见这个项目，帮助她渡过难关。" },
];

const updateDates = [
  "2026年3月8日",
  "2026年2月26日",
  "2026年2月9日",
  "2026年1月18日",
  "2025年12月22日",
  "2025年11月14日",
];

const generatedProfiles = [
  {
    slug: "ibrahim-leukemia-gaza",
    name: "易卜拉欣",
    age: 5,
    city: "贝鲁特",
    country: "黎巴嫩",
    condition: "急性白血病",
    urgency: "10 天内需补齐化疗费用",
    target: 24200,
    raised: 22260,
    donors: 341,
    daysLeft: 10,
    category: "血液肿瘤",
    summarySymptom: "持续高烧、面色苍白与反复感染",
    examName: "骨髓穿刺与血液复查",
    procedureName: "下一阶段化疗与住院治疗",
    riskText: "感染与贫血风险",
    quote: "父亲说：我们已经卖掉能卖的东西，只希望他能继续接受治疗。",
  },
  {
    slug: "maryam-burn-khan-yunis",
    name: "玛丽亚姆",
    age: 7,
    city: "开罗",
    country: "埃及",
    condition: "重度烧伤修复",
    urgency: "8 天内需安排清创与植皮",
    target: 19800,
    raised: 16930,
    donors: 257,
    daysLeft: 8,
    category: "烧伤修复",
    summarySymptom: "创面疼痛明显，日常换药极其艰难",
    examName: "感染评估与麻醉前检查",
    procedureName: "清创、植皮与住院护理",
    riskText: "感染扩散与瘢痕挛缩风险",
    quote: "家属说：她每次换药都会疼得发抖，我们不想再让她这样熬下去。",
  },
  {
    slug: "yusuf-kidney-jenin",
    name: "优素福",
    age: 9,
    city: "安曼",
    country: "约旦",
    condition: "慢性肾功能衰竭",
    urgency: "12 天内需补齐透析与转诊费用",
    target: 21600,
    raised: 7340,
    donors: 278,
    daysLeft: 12,
    category: "肾脏治疗",
    summarySymptom: "水肿、乏力与食欲下降越来越明显",
    examName: "肾功能复查与感染筛查",
    procedureName: "阶段性透析与转入专科医院",
    riskText: "代谢紊乱与器官负担持续加重",
    quote: "母亲说：他已经很久没有像以前那样自己跑跳了。",
  },
  {
    slug: "sara-hydrocephalus-deir",
    name: "萨拉",
    age: 4,
    city: "阿勒颇",
    country: "叙利亚",
    condition: "脑积水",
    urgency: "7 天内需完成引流手术安排",
    target: 22900,
    raised: 1830,
    donors: 322,
    daysLeft: 7,
    category: "神经外科",
    summarySymptom: "头痛、呕吐与精神状态波动频繁",
    examName: "脑部影像复查与麻醉评估",
    procedureName: "引流手术与术后监测",
    riskText: "颅压持续升高带来的神经损伤风险",
    quote: "家属说：我们最怕的不是花钱，而是她再也等不起。",
  },
  {
    slug: "khaled-bone-nablus",
    name: "哈立德",
    age: 11,
    city: "摩苏尔",
    country: "伊拉克",
    condition: "骨髓炎并肢体感染",
    urgency: "11 天内需安排清创住院",
    target: 17300,
    raised: 8120,
    donors: 204,
    daysLeft: 11,
    category: "骨科感染",
    summarySymptom: "持续发热、腿部肿痛，夜里常被痛醒",
    examName: "感染指标复查与影像检查",
    procedureName: "清创手术与静脉抗感染治疗",
    riskText: "感染扩散与肢体功能受损风险",
    quote: "父亲说：孩子已经不敢下床，我们必须尽快让他住院。",
  },
  {
    slug: "rana-heart-rafah",
    name: "拉娜",
    age: 6,
    city: "的黎波里",
    country: "黎巴嫩",
    condition: "先天性心脏病",
    urgency: "9 天内需完成术前评估",
    target: 18700,
    raised: 13650,
    donors: 266,
    daysLeft: 9,
    category: "心脏手术",
    summarySymptom: "活动后胸闷、嘴唇发紫，晚上睡不安稳",
    examName: "心脏彩超与术前血检",
    procedureName: "心脏修补手术与监护",
    riskText: "心肺负荷继续加重的风险",
    quote: "母亲说：她最大的愿望，只是能跟姐姐一起走到学校门口。",
  },
  {
    slug: "omar-spine-hebron",
    name: "奥马尔",
    age: 10,
    city: "霍姆斯",
    country: "叙利亚",
    condition: "脊柱损伤",
    urgency: "14 天内需落实固定手术",
    target: 25400,
    raised: 7370,
    donors: 312,
    daysLeft: 14,
    category: "骨科手术",
    summarySymptom: "长期疼痛，坐立和翻身都需要家人帮助",
    examName: "脊柱影像复查与手术会诊",
    procedureName: "固定手术与早期康复训练",
    riskText: "畸形加重与活动能力进一步受限风险",
    quote: "家属说：他最难过的是不能自己下床，也不能再去上课。",
  },
  {
    slug: "layla-lung-bethlehem",
    name: "莱拉",
    age: 5,
    city: "亚历山大",
    country: "埃及",
    condition: "重度哮喘并肺部感染",
    urgency: "6 天内需安排住院治疗",
    target: 14600,
    raised: 8470,
    donors: 211,
    daysLeft: 6,
    category: "呼吸治疗",
    summarySymptom: "反复咳喘，夜间缺氧情况明显",
    examName: "肺部影像复查与血氧监测",
    procedureName: "住院抗感染与呼吸支持",
    riskText: "感染反复与呼吸衰竭风险",
    quote: "母亲说：每次她喘不上气时，我们整夜都不敢闭眼。",
  },
  {
    slug: "mohammed-eye-tulkarm",
    name: "穆罕默德",
    age: 7,
    city: "扎尔卡",
    country: "约旦",
    condition: "视网膜病变",
    urgency: "13 天内需安排眼部手术",
    target: 15900,
    raised: 12880,
    donors: 198,
    daysLeft: 13,
    category: "眼科手术",
    summarySymptom: "视力下降明显，常因看不清而跌倒",
    examName: "眼底复查与麻醉评估",
    procedureName: "眼部手术与术后复查",
    riskText: "视力进一步下降甚至不可逆损伤风险",
    quote: "父亲说：他现在已经看不清黑板，我们怕错过最后的治疗窗口。",
  },
  {
    slug: "noor-liver-westbank",
    name: "努尔",
    age: 8,
    city: "吉萨",
    country: "埃及",
    condition: "肝脏肿瘤",
    urgency: "15 天内需完成切除前准备",
    target: 28100,
    raised: 3930,
    donors: 365,
    daysLeft: 15,
    category: "肿瘤手术",
    summarySymptom: "腹部胀痛、乏力和体重下降逐渐加重",
    examName: "肿瘤指标与影像复查",
    procedureName: "手术切除与术后监护",
    riskText: "病灶进展与营养状态进一步恶化风险",
    quote: "家属说：只要能安排手术，我们愿意再坚持一切困难。",
  },
  {
    slug: "hassan-blood-jericho",
    name: "哈桑",
    age: 6,
    city: "巴士拉",
    country: "伊拉克",
    condition: "地中海贫血",
    urgency: "9 天内需补齐输血与配型费用",
    target: 17200,
    raised: 13930,
    donors: 248,
    daysLeft: 9,
    category: "血液治疗",
    summarySymptom: "持续乏力、脸色苍白，频繁往返医院",
    examName: "血常规复查与配型检查",
    procedureName: "输血支持与后续配型流程",
    riskText: "长期贫血与器官负担累积风险",
    quote: "母亲说：孩子已经习惯医院，但我们不想让他继续在病房里长大。",
  },
  {
    slug: "amina-neuro-gaza",
    name: "阿米娜",
    age: 9,
    city: "贝卡谷地",
    country: "黎巴嫩",
    condition: "癫痫并脑部病灶",
    urgency: "12 天内需完成手术评估",
    target: 23800,
    raised: 21900,
    donors: 289,
    daysLeft: 12,
    category: "神经外科",
    summarySymptom: "抽搐反复发作，学习和睡眠都受到影响",
    examName: "脑电监测与术前影像",
    procedureName: "病灶手术与术后监护",
    riskText: "发作频率增加与神经功能受损风险",
    quote: "父亲说：她每次发作，我们都害怕这是来不及抢救的那一次。",
  },
  {
    slug: "zayd-intestine-ramallah",
    name: "扎伊德",
    age: 3,
    city: "大马士革郊区",
    country: "叙利亚",
    condition: "先天性肠道畸形",
    urgency: "7 天内需安排二次手术",
    target: 19400,
    raised: 4660,
    donors: 305,
    daysLeft: 7,
    category: "普外手术",
    summarySymptom: "进食困难，体重增长长期停滞",
    examName: "术前营养评估与影像检查",
    procedureName: "二次矫治手术与住院观察",
    riskText: "营养不良与感染并发症风险",
    quote: "家属说：他还太小，不该在反复手术中度过童年。",
  },
  {
    slug: "huda-orthopedics-khan-yunis",
    name: "胡达",
    age: 12,
    city: "萨那",
    country: "也门",
    condition: "下肢骨折并皮瓣修复",
    urgency: "11 天内需落实修复手术",
    target: 20500,
    raised: 13940,
    donors: 226,
    daysLeft: 11,
    category: "修复手术",
    summarySymptom: "伤口恢复缓慢，行动和疼痛管理都很困难",
    examName: "创面评估与麻醉前检查",
    procedureName: "修复手术与术后换药",
    riskText: "感染反复与肢体恢复受限风险",
    quote: "母亲说：她现在最怕的不是疼，而是再也站不稳。",
  },
  {
    slug: "abdullah-cardiomyopathy-nablus",
    name: "阿卜杜拉",
    age: 8,
    city: "曼苏拉",
    country: "埃及",
    condition: "心肌病",
    urgency: "10 天内需落实起搏器治疗",
    target: 26700,
    raised: 14150,
    donors: 352,
    daysLeft: 10,
    category: "心脏治疗",
    summarySymptom: "容易头晕乏力，心率问题影响日常活动",
    examName: "心电监测与装置评估",
    procedureName: "起搏器植入与住院监测",
    riskText: "心脏节律异常进一步恶化风险",
    quote: "家属说：我们最希望的，只是他能安全地睡过每一个夜晚。",
  },
];

const ayaCampaign = {
  slug: "aya-heart-gaza",
  name: "阿娅",
  age: 6,
  city: "加沙",
  country: "巴勒斯坦",
  condition: "先天性心脏病",
  urgency: "9 天内必须完成手术",
  target: 18500,
  raised: 15280,
  donors: 286,
  daysLeft: 9,
  category: "心脏手术",
  image: "./download.png",
  fallbackImage: "./download.png",
  imagePosition: "center center",
  appealTitle: "别让病痛偷走童年！恳请援手，救救6岁先天性心脏病女孩阿娅",
  summary:
    "当阳光洒满大地，当我们的孩子在阳光下奔跑嬉戏、放声欢笑，享受着无忧无虑的童年时，在遥远的巴勒斯坦，有一位6岁的小女孩，正被先天性心脏病牢牢困住，她的童年没有奔跑的自由，没有肆意的欢笑，只有日复一日的病痛煎熬，和一个简单却遥远的愿望——活下去，像其他孩子一样健康长大。",
  quote:
    "她的母亲说：我不奢求别的，只想让她等到手术那一天，能像别的孩子一样重新奔跑。",
  story: [
    "她叫阿娅，今年6岁，本该是依偎在父母身边、探索世界的年纪，却从小被确诊为先天性心脏病。这种疾病让她浑身乏力、极易气喘，稍微活动就会胸闷气短，无法像正常孩子一样上学、玩耍，甚至连简单的散步都成了奢望。更令人揪心的是，先天性心脏病若不及时进行手术治疗，会引发心力衰竭、肺炎、肺动脉高压等严重并发症，随时可能夺走她稚嫩的生命，而她的家庭，早已被这场突如其来的病痛拖入了绝望的深渊。",
    "阿娅的家庭只是巴勒斯坦一个普通的家庭，父母以微薄的收入维持生计，面对高昂的心脏手术费和后续的治疗费用，他们耗尽了所有积蓄，借遍了所有亲友，却依然杯水车薪。在巴勒斯坦，尽管有拉姆安拉儿童医院、加沙医疗中心等慈善医疗机构为贫困患儿提供免费或低价医疗服务，但面对庞大的患者群体和复杂的环境，资源依然有限，阿娅的病情危急，亟需及时手术，每一分每一秒的拖延，都在加剧她的生命风险。",
    "生命无国界，善意无远近。我们或许来自不同的国家，有着不同的肤色和语言，但对生命的敬畏、对善意的坚守，让我们紧紧相连。先天性心脏病并非不治之症，现代医学技术已经能让这样的孩子通过手术重获健康，只要有足够的医疗费用，这个6岁的小生命，就能摆脱病痛的折磨，重新拥有奔跑的权利，拥有属于自己的美好童年。",
    "在此，我们向社会各界爱心人士、爱心企业、公益组织发出最诚挚的倡议：恳请大家伸出援手，献出一份爱心，为巴勒斯坦小天使阿娅点亮生命的希望之光。每一份捐款，无论金额大小，都是对生命的尊重与守护；每一次转发，都是对善意的传递与延续。你的一杯咖啡钱，可能就是她的一剂救命药；你的一次善举，可能就能改写她的一生，拯救一个濒临破碎的家庭。",
    "我们郑重承诺，本次募捐的所有善款，将全部专项用于小女孩的手术治疗、术后康复以及相关医疗费用，全程公开透明，定期向所有爱心人士公示善款使用明细，接受大家的监督，确保每一分善款都用在刀刃上，真正帮助小女孩战胜病魔。",
    "爱无需理由，捐款不是负担，而是对生命最温柔的回应。让我们汇聚每一份微光，凝聚每一份力量，跨越山海，传递温暖，帮助这个6岁的巴勒斯坦小女孩阿娅渡过难关，让她能像其他孩子一样，沐浴在阳光之下，绽放最纯真的笑容，拥有一个健康、完整的童年。",
    "善意不分国界，大爱温暖人心。感谢每一位伸出援手的你，感谢每一份不期而遇的温暖，愿我们的爱心，能为这个小生命撑起一片蓝天，愿她早日康复，向阳生长！",
  ],
  needs: [
    "术前心脏专项检查",
    "心脏手术与手术室费用",
    "术后药物与首月复查",
    "短期重症监护床位费用",
  ],
  allocation: [
    { label: "手术费用", percent: "58%" },
    { label: "检查与重症监护", percent: "24%" },
    { label: "药物与术后随访", percent: "18%" },
  ],
  updates: [
    { title: "2026年3月8日", body: "医院已确认手术档期，但要求本周内先补齐首笔手术押金。" },
    { title: "2026年3月6日", body: "孩子稍有活动就会明显疲惫，医生已临时调整药物剂量。" },
    { title: "2026年2月19日", body: "复查结果显示心脏负荷继续加重，医生明确建议不要再等待下一轮保守观察。" },
    { title: "2026年1月24日", body: "家属已借款完成一次关键检查，但术前评估仍缺少几项费用较高的项目。" },
    { title: "2025年12月18日", body: "冬季后阿娅夜间呼吸困难次数明显增多，母亲记录到她睡眠中会频繁惊醒。" },
    { title: "2025年11月11日", body: "当地医生建议尽快转入具备儿童心外科条件的医院，家庭开始向外寻求资助。" },
    { title: "2025年10月13日", body: "一次感冒后出现持续心悸和乏力，家人第一次被明确告知后续可能需要手术。" },
    { title: "2025年9月22日", body: "阿娅完成了更系统的心脏超声检查，报告提示需要长期密切监测并准备进一步治疗。" },
  ],
  donationBands,
  recentDonations: [
    {
      name: "匿名善心人士",
      location: "阿联酋·迪拜",
      amount: 500,
      when: "2 小时前",
      message: "愿她尽快顺利完成手术，平安长大。",
    },
    {
      name: "Fatima A.",
      location: "沙特·吉达",
      amount: 250,
      when: "今天",
      message: "为孩子和她的母亲祈祷，愿困难早点过去。",
    },
    {
      name: "Muhammad K.",
      location: "卡塔尔·多哈",
      amount: 100,
      when: "今天",
      message: "希望这笔捐助能帮她更快进入手术安排。",
    },
    {
      name: "匿名捐助者",
      location: "科威特",
      amount: 75,
      when: "1 天前",
      message: "愿真主护佑她早日康复。",
    },
    {
      name: "Amina S.",
      location: "阿曼",
      amount: 300,
      when: "1 天前",
      message: "看到孩子的情况很揪心，希望能尽一点心意。",
    },
    {
      name: "Yousef M.",
      location: "巴林",
      amount: 50,
      when: "2 天前",
      message: "请继续更新她的手术进展。",
    },
    {
      name: "Zahra H.",
      location: "约旦·安曼",
      amount: 200,
      when: "4 天前",
      message: "希望孩子平安，家人也不要失去希望。",
    },
    {
      name: "Layla R.",
      location: "阿联酋·阿布扎比",
      amount: 150,
      when: "5 天前",
      message: "希望这笔钱能尽快用于术前检查。",
    },
  ],
};

const educationCampaign = {
  slug: "hope-classroom-pakistan",
  name: "希望课堂助学计划",
  age: null,
  city: "卡拉奇周边社区",
  country: "巴基斯坦",
  condition: "教育资助",
  urgency: "本学期内需补齐助学金与教材费用",
  target: 12000,
  raised: 3720,
  donors: 96,
  daysLeft: 21,
  category: "教育助学",
  image: "./图片/巴基斯坦学校募捐.jpg",
  fallbackImage: "./图片/巴基斯坦学校募捐.jpg",
  imagePosition: "center center",
  appealTitle: "别让贫困挡住课堂！请帮助更多孩子重新回到学校",
  cardTitle: "帮助贫困地区孩子继续上学",
  detailMeta: "巴基斯坦 · 卡拉奇周边社区 ｜ 教育公益项目 ｜ 正在为贫困学生募集学费、教材与校园支持资金",
  summaryLabel: "项目概况",
  overviewHeading: "这个项目正在改变哪些孩子的求学处境",
  fundsHeading: "善款将如何支持孩子继续学习",
  needsHeading: "当前最紧迫的教育支持清单",
  updatesHeading: "近半年的项目推进记录",
  summary:
    "我们希望通过本次募捐，帮助来自低收入家庭的学生继续留在课堂，减少因学费、教材与交通费用不足而中断学业的风险。",
  quote:
    "项目老师说：很多孩子不是不想上学，而是家里真的拿不出那一笔最基础的教育开支。",
  story: [
    "在巴基斯坦的部分低收入社区，许多孩子并不是因为不愿意学习而离开课堂，而是因为家庭收入微薄，长期无力承担学费、校服、课本和日常通学成本。对这些家庭来说，一次突发支出、一次工作中断，甚至只是新学期开始，都可能让孩子被迫停学。",
    "这个“希望课堂助学计划”希望聚焦最实际、也最容易被忽略的教育缺口：让孩子可以继续上课，让女孩不因贫困过早离开学校，让家庭在最困难的时候仍然能为孩子保住一张课桌。每一份支持，都是在为未来的老师、护士、工程师和社会工作者保留一条继续成长的路。",
    "本次善款将主要用于学费支持、教材与校服、基础校园运营和必要的助学补贴。项目会优先覆盖最脆弱的学生群体，尤其是来自低收入家庭、处于辍学边缘的儿童与女孩学生，帮助他们稳定地留在教育体系中。",
    "教育类公益项目的变化不总是像医疗项目那样在短时间内立刻可见，但它对孩子一生的影响同样深远。一次及时的助学支持，可能就是一个孩子不被迫离开课堂的分水岭，也是一个家庭重新看见未来的起点。",
  ],
  needs: [
    "学费与助学金支持",
    "教材、书包与校服补贴",
    "校园基础运营与课堂物资",
    "最脆弱学生的交通与留校支持",
  ],
  allocation: [
    { label: "学生学费支持", percent: "46%" },
    { label: "教材校服与学习物资", percent: "27%" },
    { label: "校园运营与师资支持", percent: "17%" },
    { label: "交通与脆弱学生补贴", percent: "10%" },
  ],
  updates: [
    { title: "2026年3月6日", body: "新一轮学期费用测算已完成，优先需要覆盖 40 余名高辍学风险学生的学费缺口。" },
    { title: "2026年2月17日", body: "项目老师反馈，多名女孩学生因家庭负担过重存在停学风险，助学补贴需求上升。" },
    { title: "2026年1月29日", body: "部分家庭已提交新学期教材与校服需求清单，项目组开始按紧急程度排序。" },
    { title: "2025年12月19日", body: "寒假前完成了一轮学生家庭走访，发现不少孩子仍在边打零工边维持上学。" },
    { title: "2025年11月13日", body: "项目完成上一阶段助学回访，已有受助学生稳定返校并持续出勤。" },
    { title: "2025年10月8日", body: "项目团队重新梳理了新学期辍学高风险名单，准备针对最困难家庭优先发放支持。" },
  ],
  donationBands,
  recentDonations: [
    { name: "匿名善心人士", location: "阿联酋·迪拜", amount: 300, when: "今天", message: "愿每一个孩子都能继续读书，不被贫困拦在门外。" },
    { name: "Maryam A.", location: "沙特·利雅得", amount: 150, when: "1 天前", message: "教育会改变孩子的一生，希望这份心意能帮到他们。" },
    { name: "Omar K.", location: "卡塔尔·多哈", amount: 200, when: "2 天前", message: "愿更多女孩可以继续留在课堂里学习。" },
    { name: "匿名捐助者", location: "巴林", amount: 75, when: "3 天前", message: "支持长期性的教育公益项目。" },
    { name: "Aisha R.", location: "科威特", amount: 100, when: "4 天前", message: "希望孩子们都能安心读完这个学期。" },
    { name: "Hassan M.", location: "英国·伦敦", amount: 250, when: "5 天前", message: "支持真正能改变未来的助学项目。" },
  ],
};

function percentage(raised, target) {
  return Math.min(100, Math.round((raised / target) * 100));
}

function remainingAmount(campaign) {
  return Math.max(0, campaign.target - campaign.raised);
}

function createNeeds(profile) {
  return [
    profile.examName,
    profile.procedureName,
    "术后药物与首月复查",
    "住院床位及短期监护费用",
  ];
}

function createAllocation(profile) {
  if (profile.category.includes("心脏")) {
    return [
      { label: "手术与器械费用", percent: "57%" },
      { label: "术前检查与监护", percent: "25%" },
      { label: "药物与术后随访", percent: "18%" },
    ];
  }

  if (profile.category.includes("神经") || profile.category.includes("肿瘤")) {
    return [
      { label: "手术及住院费用", percent: "52%" },
      { label: "影像检查与病理评估", percent: "28%" },
      { label: "术后药物与复查", percent: "20%" },
    ];
  }

  if (profile.category.includes("血液")) {
    return [
      { label: "住院治疗与输血", percent: "49%" },
      { label: "实验室检查与配型", percent: "31%" },
      { label: "药物与营养支持", percent: "20%" },
    ];
  }

  return [
    { label: "手术或住院治疗", percent: "54%" },
    { label: "检查与感染控制", percent: "26%" },
    { label: "药物与康复随访", percent: "20%" },
  ];
}

function createStory(profile) {
  return [
    `${profile.name}今年${profile.age}岁，来自${profile.country}${profile.city}。${profile.condition}让她/他长期承受${profile.summarySymptom}的痛苦，很多原本属于童年的日常都被迫暂停。对一个孩子来说，不能正常上学、不能自由玩耍、不能在夜里安稳睡觉，本身就是一种漫长而无助的消耗。`,
    `为了让${profile.name}继续接受治疗，家人已经拿出全部积蓄，并向亲友四处筹借，但距离真正开始下一阶段治疗仍有明显缺口。当地医疗条件有限，医生反复提醒不能再继续拖延，否则${profile.riskText}会越来越高。`,
    `这次募捐主要用于${profile.examName}、${profile.procedureName}，以及随后的药物、住院和复查费用。只要资金能够及时到位，${profile.name}就有机会更快进入治疗流程，把已经被病痛打乱的生活慢慢拉回正轨。`,
    `我们向所有愿意施以援手的人发出诚恳请求：请帮助${profile.name}争取一次真正及时的治疗机会。每一笔捐助，无论多少，都会直接进入孩子当前最紧迫的医疗支出，并持续公开进展，让善意能清楚地抵达需要被帮助的地方。`,
  ];
}

function createUpdates(profile) {
  const bodies = [
    `医院再次提醒，需要尽快补齐${profile.examName}和住院前置费用，才能锁定下一步治疗时段。`,
    `${profile.name}近两周状态反复，家属反馈${profile.summarySymptom}的情况并没有缓解。`,
    `复查后医生明确表示，不建议继续等待，${profile.procedureName}需要尽快提上日程。`,
    `家属已借款完成一部分基础检查，但仍缺少关键项目的费用，整体进度被迫放慢。`,
    `冬季以来孩子的体力和睡眠情况都有下降，家庭照护压力持续上升。`,
    `第一次系统评估完成后，医生就已提醒存在${profile.riskText}，建议提早准备治疗资金。`,
  ];

  return updateDates.map((title, index) => ({
    title,
    body: bodies[index],
  }));
}

function createRecentDonations(profile, seed) {
  const amounts = [500, 250, 150, 100, 80, 50];

  return amounts.map((amount, index) => {
    const donor = donorTemplates[(seed * 2 + index) % donorTemplates.length];
    const when = index === 0 ? "今天" : `${index} 天前`;

    return {
      name: donor.name,
      location: donor.location,
      amount: amount + (seed % 3) * 20,
      when,
      message: donor.message.replace("孩子", `${profile.name}`),
    };
  });
}

function createCampaign(profile, index) {
  const imageMeta = imagePool[(index + 1) % imagePool.length];

  return {
    ...profile,
    image: imageMeta.src,
    fallbackImage: imageMeta.fallback,
    imagePosition: imageMeta.position,
    appealTitle: `别让病痛偷走童年！恳请援手，救救${profile.age}岁${profile.condition}患儿${profile.name}`,
    summary: `${profile.name}${profile.age}岁，来自${profile.country}${profile.city}，目前正因${profile.condition}承受${profile.summarySymptom}的痛苦。医生已建议尽快完成${profile.examName}并推进${profile.procedureName}，否则将面临${profile.riskText}。`,
    quote: profile.quote,
    story: createStory(profile),
    needs: createNeeds(profile),
    allocation: createAllocation(profile),
    updates: createUpdates(profile),
    donationBands,
    recentDonations: createRecentDonations(profile, index + 1),
  };
}

const campaigns = [ayaCampaign, educationCampaign, ...generatedProfiles.map(createCampaign)];

const campaignMap = new Map(campaigns.map((campaign) => [campaign.slug, campaign]));

const hopeStories = [
  {
    name: "莱安",
    age: 5,
    city: "加沙",
    condition: "先天性心脏病",
    category: "已完成救助",
    image: "./download.png",
    fallbackImage: "./download.png",
    imagePosition: "center center",
    title: "手术完成后，她第一次可以不靠停歇走完整条走廊",
    summary:
      "三个月前，莱安因为先天性心脏病反复胸闷、呼吸急促，家人几乎每天都在担心她能不能撑到手术。通过网站完成筹款后，孩子顺利接受了心脏手术。现在她已经可以自己下床、慢慢走路，也开始重新练习像其他孩子那样在阳光下活动。",
    details: [
      "莱安的母亲最初在页面上提交求助时，只希望能尽快凑齐术前检查和首笔手术押金。那段时间，孩子稍微活动就会脸色发白，连从病床走到窗边都需要停下来休息。",
      "项目上线后，不同国家的捐助者陆续通过网站伸出援手。筹款在短时间内补齐了术前检查、手术和重症监护所需的关键费用，医院最终为她安排了原本几乎等不到的手术窗口。",
      "完成手术后的第三周，家属第一次在回访里提到：孩子已经能自己下床走到走廊尽头，不再像从前那样每走几步就气喘。对这个家庭来说，那是他们很久以来第一次真正感到“她在好起来”。",
    ],
    outcome: "目前莱安已完成心脏手术，进入定期复查阶段，体力与呼吸状态都明显改善。",
    linkLabel: "继续阅读",
  },
  {
    name: "穆萨",
    age: 8,
    city: "汗尤尼斯",
    condition: "烧伤修复",
    category: "已完成救助",
    image: "./bcca1c371389e7da16618e22d1f8fd05.jpeg",
    fallbackImage: "./bcca1c371389e7da16618e22d1f8fd05.jpeg",
    imagePosition: "center 34%",
    title: "完成植皮和康复后，他终于敢再次抬起手臂拥抱母亲",
    summary:
      "穆萨曾因重度烧伤长期接受换药和疼痛管理，连简单地抬手都要忍受剧痛。网站上的爱心募捐帮助他完成了关键修复手术和后续康复。现在创面恢复稳定，疼痛明显减轻，孩子已经可以慢慢恢复日常动作，脸上也重新出现了久违的笑容。",
    details: [
      "穆萨的项目最初最打动捐助者的，是家属上传的一段术前记录：孩子每次换药都会紧紧抓着床单，努力忍住不哭。家人担心如果继续拖延，伤口感染和瘢痕挛缩会让孩子失去更多活动能力。",
      "通过网站募捐后，项目在一个月内完成了清创、植皮和早期康复费用的筹集。医生得以连续推进治疗，不再因为资金断档而反复延迟计划。",
      "最近一次回访里，母亲说孩子已经能自己抬起胳膊吃饭，也敢主动拥抱家人。对经历长期伤痛的孩子来说，这些看似普通的动作，本身就是重新找回生活的开始。",
    ],
    outcome: "穆萨已完成关键修复治疗，创面恢复稳定，正在继续进行康复训练。",
    linkLabel: "继续阅读",
  },
  {
    name: "努尔",
    age: 7,
    city: "拉姆安拉",
    condition: "肾脏治疗",
    category: "已完成救助",
    image: "./assets/fallback-campaign-3.svg",
    fallbackImage: "./assets/fallback-campaign-3.svg",
    imagePosition: "center center",
    title: "治疗稳定后，她重新回到了课堂，也重新找回了童年的节奏",
    summary:
      "努尔曾因长期肾脏问题频繁往返医院，体力下降严重，连正常上学都变得困难。完成网站筹款后，她顺利接受了阶段性治疗和后续复查，病情逐渐稳定。如今她已经能够重新背起书包回到学校，家庭也从长期焦虑中慢慢走出。",
    details: [
      "在项目发起前，努尔的家庭已经耗尽积蓄，只能间断性带孩子做复查。因为治疗无法稳定推进，孩子越来越虚弱，原本爱去学校的她，后来甚至不愿再提上学这件事。",
      "项目上线后，很多捐助者特别留言说，希望这笔钱能帮助她“回到课堂”。这些善款最终支持她完成了阶段性治疗、必要复查和一段时间的药物维持，病情由此逐渐稳定。",
      "家属回访说，努尔现在已经重新背起书包，也能在课间和同学待在一起。虽然仍需要持续观察，但这个家庭终于从“怕明天怎么办”的状态，回到了“开始计划明天”的状态。",
    ],
    outcome: "努尔已恢复正常上学，后续按医嘱持续复查，家庭生活状态明显改善。",
    linkLabel: "了解她的变化",
  },
  {
    name: "哈立玛",
    age: 6,
    city: "代尔拜拉赫",
    condition: "脑积水",
    category: "已完成救助",
    image: "./assets/fallback-campaign-4.svg",
    fallbackImage: "./assets/fallback-campaign-4.svg",
    imagePosition: "center center",
    title: "顺利完成引流手术后，她终于能安稳睡过整夜",
    summary:
      "哈立玛曾因脑积水反复头痛和呕吐，夜里常常痛醒。通过网站完成募捐后，孩子顺利接受了引流手术和术后监测。家属回访说，她第一次能平静地睡完整夜，母亲也终于不必整夜守在床边。",
    details: [
      "项目最困难的时候，家属已经连最基础的影像复查都难以继续。医生不断强调孩子颅压问题不能再拖，但手术安排始终卡在费用缺口上。",
      "网站募捐开启后，许多捐助者在短时间内帮助她凑齐了手术和住院监测的关键资金，这让医院最终能够确定手术时间。",
      "术后回访时，家属最常提到的一句话是：她终于能睡着了。对一个长期被头痛折磨的孩子来说，安稳睡觉本身就是恢复生活的第一步。",
    ],
    outcome: "哈立玛术后恢复稳定，头痛和夜间惊醒情况明显减少，正在持续复查。",
    linkLabel: "继续阅读",
  },
  {
    name: "阿德南",
    age: 9,
    city: "希伯伦",
    condition: "脊柱固定手术",
    category: "已完成救助",
    image: "./assets/fallback-campaign-2.svg",
    fallbackImage: "./assets/fallback-campaign-2.svg",
    imagePosition: "center center",
    title: "从长期卧床到重新站立，他开始重新练习走向门口",
    summary:
      "阿德南在受伤后长期无法正常站立，连翻身和坐起都需要帮助。通过网站筹款完成固定手术后，他开始接受系统康复训练。现在他已经能在辅助下站立，并尝试一步步向门口走去。",
    details: [
      "手术前，家人最大的担忧不是恢复速度，而是因为付不起费用，孩子连开始恢复的机会都没有。卧床时间越长，家属越害怕错过最佳干预时机。",
      "在网站捐助者的帮助下，项目完成了手术和早期康复所需的筹款。医疗团队得以连续推进治疗计划，而不是像之前那样不断中断。",
      "最近一次回访里，父亲说，孩子现在最喜欢做的事情就是站起来看看门外。那是过去几个月里，他几乎不敢想象会重新发生的画面。",
    ],
    outcome: "阿德南已完成手术并进入康复阶段，站立和移动能力正在逐步恢复。",
    linkLabel: "继续阅读",
  },
  {
    name: "萨米拉",
    age: 4,
    city: "伯利恒",
    condition: "肺部感染治疗",
    category: "已完成救助",
    image: "./assets/fallback-campaign-5.svg",
    fallbackImage: "./assets/fallback-campaign-5.svg",
    imagePosition: "center center",
    title: "脱离反复住院后，她第一次笑着跑向窗边看阳光",
    summary:
      "萨米拉曾因严重肺部感染反复入院，稍有活动就咳喘不止。通过网站募集到的治疗资金帮助她完成了住院、药物与后续复查。如今她的呼吸状况明显稳定，已经能在家里自由走动和玩耍。",
    details: [
      "这个项目发起时，家属已经连续几周在医院与家之间来回奔波。孩子每次呼吸急促，父母都担心又要重新住院，而费用问题让他们更加绝望。",
      "募捐完成后，萨米拉得以及时接受抗感染和持续监测，治疗过程终于稳定下来。医生后来在复查中确认，她最危险的阶段已经过去。",
      "母亲在回访里说，现在孩子最喜欢做的事情就是跑到窗边晒太阳。那一刻，她终于觉得女儿又重新像个孩子了。",
    ],
    outcome: "萨米拉已脱离最危险阶段，呼吸情况稳定，家庭照护压力显著下降。",
    linkLabel: "继续阅读",
  },
  {
    name: "尤尼斯",
    age: 7,
    city: "纳布卢斯",
    condition: "眼部手术",
    category: "已完成救助",
    image: "./assets/fallback-campaign-1.svg",
    fallbackImage: "./assets/fallback-campaign-1.svg",
    imagePosition: "center center",
    title: "看清黑板后，他第一次主动举手说想回学校",
    summary:
      "尤尼斯曾因视力问题逐渐看不清教室里的黑板，连走路都常常跌倒。通过网站完成募捐后，孩子顺利接受了眼部手术和术后复查。现在视力恢复情况良好，他也开始重新期待回到学校。",
    details: [
      "项目刚开始时，家属最难过的是孩子明明还小，却已经开始躲避与同龄人接触，因为他总怕自己看不清、走不稳、被人发现“不一样”。",
      "善款到位后，医疗团队迅速安排了手术和后续复查。家属后来在回访中提到，尤尼斯恢复期间最开心的一次，是他说自己终于能看清墙上的字了。",
      "现在，他已经开始重新准备回学校。对一个曾因看不清而害怕出门的孩子来说，这种主动说“我想回去”的愿望，本身就是巨大的改变。",
    ],
    outcome: "尤尼斯术后恢复良好，视力明显改善，正在准备重新回归校园生活。",
    linkLabel: "继续阅读",
  },
];

const globalContextStats = [
  {
    value: "7,300万+",
    label: "2026年 UNICEF 人道援助计划拟覆盖的脆弱儿童及家庭",
    source: "UNICEF HAC 2026",
  },
  {
    value: "US$76.6亿",
    label: "UNICEF 2026 年全球儿童人道援助资金需求",
    source: "UNICEF HAC 2026",
  },
  {
    value: "1,220万",
    label: "近两年中东和北非冲突中受杀害、致残或流离失所的儿童",
    source: "UNICEF MENA 2025",
  },
  {
    value: "6%",
    label: "全球范围内估计伴有先天性疾病出生的婴儿比例",
    source: "WHO",
  },
];

const newsArticles = [
  {
    title: "UNICEF 警告：2026 年中东和北非儿童仍难见喘息",
    source: "UNICEF",
    date: "2026年2月6日",
    category: "战争与儿童",
    summary:
      "UNICEF 指出，持续冲突与暴力仍在中东和北非深刻影响儿童的生存、安全与发展。页面里这类项目的募捐需求，正是全球人道现实的一部分缩影。",
    url: "https://www.unicef.org/mena/press-releases/2026-brings-no-respite-children-living-violence-and-conflict-middle-east-and-north",
  },
  {
    title: "UNICEF：2026 年全球儿童人道援助资金需求升至 76.6 亿美元",
    source: "UNICEF",
    date: "2025年12月10日",
    category: "全球慈善",
    summary:
      "UNICEF 在 2026 年人道援助行动呼吁中表示，全球儿童人道需求已达到极端水平，资金缺口正直接影响营养、教育、保护与医疗服务。",
    url: "https://www.unicef.org/press-releases/urgent-investment-life-saving-services-children-and-families-humanitarian-needs-reach",
  },
  {
    title: "联合国：加沙停火后援助有所改善，但儿童仍面临致命处境",
    source: "UN Geneva",
    date: "2026年1月26日",
    category: "战争与儿童",
    summary:
      "联合国在日内瓦的通报指出，停火后的准入改善并不意味着危机结束，儿童仍然面临营养不良、医疗匮乏和长期创伤等多重风险。",
    url: "https://www.ungeneva.org/en/news-media/news/2026/01/103795/gaza-ceasefire-improves-aid-access-children-still-face-deadly",
  },
  {
    title: "UNICEF：超一个月援助受阻后，加沙百余万儿童陷入物资剥夺",
    source: "UNICEF",
    date: "2025年4月5日",
    category: "战争与儿童",
    summary:
      "UNICEF 表示，援助长期受阻使大量儿童失去食物、药品与安全饮水。对公益平台而言，这类报道也解释了为什么医疗与营养类项目会持续增加。",
    url: "https://www.unicef.org/press-releases/more-one-million-children-gaza-strip-deprived-lifesaving-aid-over-one-month",
  },
  {
    title: "UNICEF：至少 1400 万儿童的营养服务在全球遭到冲击",
    source: "UNICEF",
    date: "2025年3月26日",
    category: "儿童医疗",
    summary:
      "UNICEF 警告，资金压力正让原本就脆弱的儿童营养项目进一步中断，营养不良与发育迟缓风险持续上升。",
    url: "https://www.unicef.org/press-releases/least-14-million-children-face-disruptions-nutrition-services-global-funding-cuts",
  },
  {
    title: "UNICEF：全球资金削减可能让 600 万儿童失学",
    source: "UNICEF",
    date: "2025年9月3日",
    category: "教育公益",
    summary:
      "UNICEF 指出，教育投入不足正在让本就处于贫困、冲突或灾害环境中的儿童更容易被迫离开课堂，这也与助学项目的重要性直接相关。",
    url: "https://www.unicef.org/press-releases/global-funding-cuts-could-force-6-million-more-children-out-school",
  },
  {
    title: "UNICEF 发布海地儿童警报：营养不良和暴力威胁叠加升级",
    source: "UNICEF",
    date: "2025年10月14日",
    category: "战争与儿童",
    summary:
      "UNICEF 在海地儿童警报中提到，暴力、流离失所与营养不良正在同时冲击儿童，让医疗和保护服务承受更大压力。",
    url: "https://www.unicef.org/press-releases/unicef-launches-child-alert-haiti-deadly-impact-malnutrition-and-violence-children",
  },
  {
    title: "UNICEF：东部和南部非洲有 1300 万儿童面临急性营养不良",
    source: "UNICEF",
    date: "2025年4月23日",
    category: "儿童医疗",
    summary:
      "UNICEF 认为，气候冲击、贫困和公共卫生压力叠加，使得儿童营养危机在多地同时升温，慈善项目需要更长期的支持。",
    url: "https://www.unicef.org/press-releases/13-million-children-acutely-malnourished-eastern-and-southern-africa",
  },
  {
    title: "UNICEF：东部和南部非洲 1600 万儿童急需人道援助",
    source: "UNICEF",
    date: "2025年12月15日",
    category: "全球慈善",
    summary:
      "UNICEF 在年末更新中指出，区域性的气候、经济和公共卫生问题让数百万儿童持续依赖外部援助与社会支持。",
    url: "https://www.unicef.org/press-releases/16-million-children-across-eastern-and-southern-africa-urgent-need-humanitarian",
  },
  {
    title: "UNICEF：黎巴嫩战争后，儿童心理健康、营养与教育状况全面恶化",
    source: "UNICEF",
    date: "2025年2月28日",
    category: "战争与儿童",
    summary:
      "UNICEF 关于黎巴嫩的评估显示，战争影响并不只发生在前线，儿童的心理健康、营养与学习连续性都在战后受到明显冲击。",
    url: "https://www.unicef.org/mena/press-releases/war-lebanon-linked-decline-childrens-mental-health-nutrition-and-education",
  },
  {
    title: "WHO 与 St. Jude 启动儿童癌症药物平台，首批药品将送往多国",
    source: "WHO",
    date: "2025年2月11日",
    category: "儿童医疗",
    summary:
      "WHO 与 St. Jude 合作推动儿童癌症药物全球可及性，目标是缓解低中收入国家儿童在关键药物上的长期缺口。",
    url: "https://www.who.int/news/item/11-02-2025-childhood-cancer-medicines-to-reach-more-children-in-low-and-middle-income-countries-through-new-platform",
  },
  {
    title: "WHO 发布儿童友好型癌症药物新标准",
    source: "WHO",
    date: "2025年11月6日",
    category: "儿童医疗",
    summary:
      "WHO 推出新的儿童友好型癌症药物标准，希望改善药品剂型和可及性问题，让患儿治疗更可持续、依从性更高。",
    url: "https://www.who.int/news/item/06-11-2025-new-global-standard-to-prioritize-child-friendly-cancer-medicines",
  },
  {
    title: "WHO 推出儿童药物路线图，强调关键制剂短缺问题",
    source: "WHO",
    date: "2025年5月20日",
    category: "儿童医疗",
    summary:
      "WHO 的新路线图聚焦儿童用药在研发、供应与价格上的结构性问题，尤其是重症和长期治疗药物的供给不足。",
    url: "https://www.who.int/news/item/20-05-2025-who-launches-roadmap-to-improve-access-to-paediatric-formulations",
  },
  {
    title: "AP：援助削减正在让阿富汗儿童面临更高死亡风险",
    source: "AP",
    date: "2025年3月18日",
    category: "战争与儿童",
    summary:
      "美联社报道指出，国际援助减少正在加重阿富汗儿童在营养、医疗和生存方面的压力，许多家庭被迫在最基本的开支之间做痛苦取舍。",
    url: "https://apnews.com/article/afghanistan-children-aid-cuts-humanitarian-crisis-6bc2d46f6e5ec0d7d7c1e0fd5d9f0d2c",
  },
  {
    title: "AP：St. Jude 新任 CEO 计划扩大儿童慈善医疗网络影响力",
    source: "AP",
    date: "2025年11月5日",
    category: "全球慈善",
    summary:
      "AP 报道提到，St. Jude 正在推进更广泛的国际合作和募款布局，希望让更多儿童癌症家庭获得跨地区支持。",
    url: "https://apnews.com/article/st-jude-ceo-charity-children-cancer-fundraising-6d0b77dcfe6d4e7ea9d4c1c7f7c6f6f2",
  },
  {
    title: "AP：达美乐继续通过结账捐赠支持 St. Jude 儿童医院",
    source: "AP",
    date: "2025年10月7日",
    category: "募捐与企业公益",
    summary:
      "AP 报道显示，企业与消费者之间的小额捐赠通道，仍然是儿童医疗慈善中一类持续有效的募资方式。",
    url: "https://apnews.com/article/dominos-st-jude-charity-checkout-donations-7f7235d0c761b2f0af8c6f0d184fd95a",
  },
  {
    title: "AP：米歇尔·奥巴马向支持女孩教育的组织发放新一轮资助",
    source: "AP",
    date: "2025年4月23日",
    category: "教育公益",
    summary:
      "AP 报道提到，围绕女孩教育和奖学金的公益投资仍在扩展，教育支持已成为全球慈善中的重要方向之一。",
    url: "https://apnews.com/article/michelle-obama-girls-opportunity-alliance-education-grants-2e1da2e73bc463fcbfb9b3e13e9b8f6f",
  },
  {
    title: "UNICEF：马达加斯加热带风暴与洪灾正影响儿童生存环境",
    source: "UNICEF",
    date: "2026年2月28日",
    category: "灾难与救援",
    summary:
      "UNICEF 指出，极端天气和洪灾破坏了学校、供水和医疗服务网络，孩子往往是这类灾害中最脆弱的人群之一。",
    url: "https://www.unicef.org/press-releases/tropical-storms-and-floods-threaten-children-madagascar",
  },
  {
    title: "UNICEF：加沙新一轮脊灰疫苗行动为数十万儿童提供保护",
    source: "UNICEF",
    date: "2025年2月26日",
    category: "儿童医疗",
    summary:
      "UNICEF 与合作机构在冲突环境中推进疫苗行动，显示即便在极端困难局势下，儿童公共卫生项目仍需要持续被支持。",
    url: "https://www.unicef.org/press-releases/new-polio-vaccination-campaign-begins-gaza-protect-nearly-600000-children",
  },
  {
    title: "UNICEF：加沙儿童补种疫苗行动努力覆盖长期中断的免疫缺口",
    source: "UNICEF",
    date: "2026年1月9日",
    category: "儿童医疗",
    summary:
      "UNICEF 指出，战争带来的医疗中断正在让更多儿童暴露在可预防疾病风险中，常规免疫与补种服务因此格外关键。",
    url: "https://www.unicef.org/press-releases/children-gaza-receive-catch-up-vaccinations-after-months-disruption",
  },
];

function parseChineseDate(dateText) {
  const match = dateText.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);

  if (!match) {
    return new Date(0);
  }

  const [, year, month, day] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
}

function getNewsVisual(index) {
  const visuals = [
    { src: "./download.png", fallback: "./download.png", position: "center center" },
    {
      src: "./bcca1c371389e7da16618e22d1f8fd05.jpeg",
      fallback: "./bcca1c371389e7da16618e22d1f8fd05.jpeg",
      position: "center 34%",
    },
    { src: "./assets/fallback-hero.svg", fallback: "./assets/fallback-hero.svg", position: "center center" },
    { src: "./assets/fallback-campaign-2.svg", fallback: "./assets/fallback-campaign-2.svg", position: "center center" },
    { src: "./assets/fallback-campaign-4.svg", fallback: "./assets/fallback-campaign-4.svg", position: "center center" },
  ];

  return visuals[index % visuals.length];
}

function getFilteredAndSortedNews(category = "全部", sort = "latest") {
  let items = newsArticles.map((article, index) => ({
    ...article,
    ...getNewsVisual(index),
    dateValue: parseChineseDate(article.date).getTime(),
  }));

  if (category !== "全部") {
    items = items.filter((item) => item.category === category);
  }

  if (sort === "oldest") {
    items = [...items].sort((left, right) => left.dateValue - right.dateValue);
  } else if (sort === "source") {
    items = [...items].sort((left, right) => left.source.localeCompare(right.source, "zh-CN"));
  } else {
    items = [...items].sort((left, right) => right.dateValue - left.dateValue);
  }

  return items;
}

function getSelectedCampaign() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (slug && campaignMap.has(slug)) {
    return campaignMap.get(slug);
  }

  return campaigns[0];
}

function buildProjectHref(campaign) {
  return `./project.html?slug=${encodeURIComponent(campaign.slug)}`;
}

function buildPaymentHref(campaign, amount) {
  const params = new URLSearchParams({
    slug: campaign.slug,
    project: campaign.name,
  });

  if (amount) {
    params.set("amount", String(amount));
  }

  return `./payment.html?${params.toString()}`;
}

function renderFooterNav(donateHref = "./index.html#patientDirectory") {
  return `
    <section class="site-footer-nav">
      <img class="site-footer-logo" src="./慈善募捐网站logo设计.png" alt="AidSpring Foundation logo" />
      <div class="site-footer-grid">
        <a class="home-link-btn site-footer-btn" href="${donateHref}">立即捐助</a>
        <a class="home-link-btn site-footer-btn" href="./news.html">新闻媒体</a>
        <a class="home-link-btn site-footer-btn" href="./about.html">关于我们</a>
        <a class="home-link-btn site-footer-btn" href="./contact.html">联系我们</a>
        <a class="home-link-btn site-footer-btn" href="./privacy.html">隐私条款</a>
      </div>
    </section>
  `;
}

function getSupportFeed(limit) {
  const items = campaigns
    .flatMap((campaign, campaignIndex) =>
      campaign.recentDonations.map((donation, donationIndex) => ({
        ...donation,
        campaign,
        rank: campaign.daysLeft * 10 + donationIndex + campaignIndex,
      }))
    )
    .sort((left, right) => left.rank - right.rank);

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

function getUpdateFeed(limit) {
  const items = campaigns
    .flatMap((campaign, campaignIndex) =>
      campaign.updates.map((update, updateIndex) => ({
        ...update,
        campaign,
        rank: campaign.daysLeft * 10 + updateIndex + campaignIndex,
      }))
    )
    .sort((left, right) => left.rank - right.rank);

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

function wireImageFallbacks(images) {
  images.forEach((image) => {
    if (image.dataset.fallbackBound === "true") {
      return;
    }

    image.dataset.fallbackBound = "true";
    image.addEventListener("error", () => {
      const fallback = image.dataset.fallback;

      if (!fallback || image.dataset.fallbackApplied === "true") {
        return;
      }

      image.dataset.fallbackApplied = "true";
      image.src = fallback;
    });
  });
}

function renderFeatureCard(campaign) {
  const progress = percentage(campaign.raised, campaign.target);
  const remaining = remainingAmount(campaign);

  return `
    <article class="feature-card">
      <div class="feature-card-media">
        <img
          src="${campaign.image}"
          data-fallback="${campaign.fallbackImage}"
          onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
          alt="${campaign.name} 的募捐封面图"
          loading="lazy"
          style="object-position:${campaign.imagePosition};"
        />
        <span class="feature-chip">${campaign.urgency}</span>
      </div>
      <div class="feature-card-body">
        <div class="feature-card-topline">
          <span class="feature-location">${campaign.country} · ${campaign.city}</span>
          <span class="feature-days">剩余 ${shortNumber.format(campaign.daysLeft)} 天</span>
        </div>
        <h4>${campaign.name}，${shortNumber.format(campaign.age)} 岁 · ${campaign.condition}</h4>
        <p class="feature-card-summary">${campaign.summary}</p>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="feature-figures">
          <span>已筹 ${formatter.format(campaign.raised)}</span>
          <span>目标 ${formatter.format(campaign.target)}</span>
        </div>
        <div class="feature-figures feature-figures-secondary">
          <span>仍需 ${formatter.format(remaining)}</span>
          <span>已有 ${shortNumber.format(campaign.donors)} 位捐助者</span>
        </div>
        <div class="feature-footer">
          <strong>${campaign.category}</strong>
          <a class="feature-cta" href="${buildProjectHref(campaign)}">进入详情页</a>
        </div>
      </div>
    </article>
  `;
}

function renderUrgentCard(campaign) {
  const progress = percentage(campaign.raised, campaign.target);

  return `
    <article class="urgent-card">
      <img
        src="${campaign.image}"
        data-fallback="${campaign.fallbackImage}"
        onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
        alt="${campaign.name} 的项目图片"
        loading="lazy"
        style="object-position:${campaign.imagePosition};"
      />
      <div class="urgent-card-body">
        <div class="urgent-card-top">
          <strong>${campaign.name}</strong>
          <span>${shortNumber.format(campaign.daysLeft)} 天</span>
        </div>
        <p>${campaign.condition} · ${campaign.city}</p>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="urgent-card-foot">
          <span>${formatter.format(campaign.raised)} / ${formatter.format(campaign.target)}</span>
          <a href="${buildProjectHref(campaign)}">查看详情</a>
        </div>
      </div>
    </article>
  `;
}

function renderCatalogCard(campaign) {
  const progress = percentage(campaign.raised, campaign.target);

  return `
    <article class="catalog-card">
      <div class="catalog-card-media">
        <img
          src="${campaign.image}"
          data-fallback="${campaign.fallbackImage}"
          onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
          alt="${campaign.name} 的项目封面"
          loading="lazy"
          style="object-position:${campaign.imagePosition};"
        />
        <span class="catalog-chip">${campaign.category}</span>
      </div>
      <div class="catalog-card-body">
        <p class="catalog-card-meta">${campaign.country} · ${campaign.city}</p>
        <h4>${campaign.name} · ${campaign.condition}</h4>
        <p class="catalog-card-summary">${campaign.summary}</p>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="catalog-card-foot">
          <span>${shortNumber.format(campaign.daysLeft)} 天内需帮助</span>
          <a href="${buildProjectHref(campaign)}">项目详情</a>
        </div>
      </div>
    </article>
  `;
}

function renderPatientDirectoryCard(campaign) {
  const progress = percentage(campaign.raised, campaign.target);
  const remaining = remainingAmount(campaign);
  const cardTitle = campaign.cardTitle || `帮助${campaign.name}接受${campaign.condition}治疗`;

  return `
    <article class="patient-card">
      <a class="patient-card-media-link" href="${buildProjectHref(campaign)}">
        <div class="patient-card-media">
          <img
            src="${campaign.image}"
            data-fallback="${campaign.fallbackImage}"
            onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
            alt="${campaign.name} 的项目封面"
            loading="lazy"
            style="object-position:${campaign.imagePosition};"
          />
          <span class="patient-card-chip">${campaign.category}</span>
        </div>
      </a>
      <div class="patient-card-body">
        <a class="patient-card-copy-link" href="${buildProjectHref(campaign)}">
          <div class="patient-card-topline">
            <span>${campaign.country} · ${campaign.city}</span>
            <span>${campaign.age ? `${campaign.age} 岁` : campaign.category}</span>
          </div>
          <h3>${cardTitle}</h3>
          <p>${campaign.summary}</p>
          <div class="patient-card-progress">
            <div class="patient-card-progress-row">
              <strong>${formatter.format(campaign.raised)}</strong>
              <span>${progress}% 已完成</span>
            </div>
            <div class="progress-track" aria-hidden="true">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
          </div>
          <div class="patient-card-meta">
            <span>目标 ${formatter.format(campaign.target)}</span>
            <span>仍需 ${formatter.format(remaining)}</span>
            <span>${shortNumber.format(campaign.donors)} 位捐助者</span>
            <span>${shortNumber.format(campaign.daysLeft)} 天内需帮助</span>
          </div>
        </a>
        <div class="patient-card-actions">
          <a class="primary-btn" href="${buildProjectHref(campaign)}">立即捐助</a>
        </div>
      </div>
    </article>
  `;
}

function renderHopeStoryCard(story) {
  return `
    <article class="hope-story-card">
      <img
        src="${story.image}"
        data-fallback="${story.fallbackImage}"
        onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
        alt="${story.name} 的希望故事"
        loading="lazy"
        style="object-position:${story.imagePosition};"
      />
      <div class="hope-story-body">
        <span>${story.category}</span>
        <h4>${story.name}，${story.age}岁 · ${story.title}</h4>
        <p>${story.summary}</p>
        <a href="./hope-stories.html">${story.linkLabel}</a>
      </div>
    </article>
  `;
}

function renderHomePage() {
  const root = document.querySelector("#homePage");

  if (!root) {
    return;
  }

  const homepageCampaigns = campaigns.slice(0, 5);
  const totalRaised = 3054930;
  const totalDonors = 48301;
  const urgentCount = campaigns.filter((campaign) => campaign.daysLeft <= 10).length;
  const supportFeed = getSupportFeed(8);
  const updateFeed = getUpdateFeed(4);
  root.innerHTML = `
    <section class="home-opening">
      <div class="home-opening-copy">
        <h2>汇聚主的慈悯，守护孩童新生</h2>
      </div>

      <div class="home-opening-metrics">
        <article>
          <strong>${shortNumber.format(campaigns.length)}</strong>
          <span>正在募捐的项目</span>
        </article>
        <article>
          <strong>${formatter.format(totalRaised)}</strong>
          <span>平台累计已筹金额</span>
        </article>
        <article>
          <strong>${shortNumber.format(totalDonors)}</strong>
          <span>累计捐助人次</span>
        </article>
        <article>
          <strong>${shortNumber.format(urgentCount)}</strong>
          <span>10 天内紧急项目</span>
        </article>
      </div>
    </section>

    <section class="patient-directory-section" id="patientDirectory">
      <div class="section-heading">
        <span>Meet Our Patients</span>
      </div>
      <div class="patient-directory-grid">
        ${homepageCampaigns.map(renderPatientDirectoryCard).join("")}
      </div>
      <div class="section-more-row">
        <a class="home-link-btn panel-more-btn section-more-btn" href="./more-projects.html">查看更多</a>
      </div>
    </section>

    <section class="directory-split-panels" id="recentSupport">
      <article class="directory-panel">
        <div class="section-heading">
          <span>Recent Donations</span>
          <h3>最近捐助</h3>
        </div>
        <div class="feed-list">
          ${supportFeed
            .map(
              (item) => `
                <article class="support-feed-item">
                  <div class="support-feed-head">
                    <strong>${item.name}</strong>
                    <span>${formatter.format(item.amount)}</span>
                  </div>
                  <p>${item.message}</p>
                  <div class="support-feed-foot">
                    <span>${item.campaign.name} · ${item.location}</span>
                    <span>${item.when}</span>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="panel-more-row">
          <a class="home-link-btn panel-more-btn" href="./donations.html">查看更多</a>
        </div>
      </article>

      <article class="directory-panel">
        <div class="section-heading">
          <span>Latest Updates</span>
          <h3>最近更新</h3>
        </div>
        <div class="feed-list">
          ${updateFeed
            .map(
              (item) => `
                <article class="update-feed-item">
                  <div class="support-feed-head">
                    <strong>${item.campaign.name}</strong>
                    <span>${item.title}</span>
                  </div>
                  <p>${item.body}</p>
                  <div class="support-feed-foot">
                    <span>${item.campaign.condition}</span>
                    <a href="${buildProjectHref(item.campaign)}">查看详情</a>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="panel-more-row">
          <a class="home-link-btn panel-more-btn" href="./updates.html">查看更多</a>
        </div>
      </article>
    </section>

    <section class="hope-section" id="hopeStories">
      <div class="section-heading">
        <span>Stories of Hope</span>
        <h3>希望故事</h3>
      </div>
      <div class="hope-story-grid">
        ${hopeStories.slice(0, 3).map(renderHopeStoryCard).join("")}
      </div>
      <div class="section-more-row">
        <a class="home-link-btn panel-more-btn section-more-btn" href="./hope-stories.html">查看更多</a>
      </div>
    </section>

    ${renderFooterNav("#patientDirectory")}
  `;

  const homeMenuShell = document.querySelector("#homeMenuShell");
  const homeMenuButton = document.querySelector("#homeMenuButton");
  const homeMenuPanel = document.querySelector("#homeMenuPanel");

  if (homeMenuButton && homeMenuPanel && homeMenuShell) {
    const homeMenuLinks = homeMenuPanel.querySelectorAll("a");

    const closeHomeMenu = () => {
      homeMenuPanel.hidden = true;
      homeMenuButton.setAttribute("aria-expanded", "false");
    };

    const openHomeMenu = () => {
      homeMenuPanel.hidden = false;
      homeMenuButton.setAttribute("aria-expanded", "true");
    };

    homeMenuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = homeMenuButton.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeHomeMenu();
      } else {
        openHomeMenu();
      }
    });

    homeMenuPanel.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    homeMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeHomeMenu();
      });
    });

    document.addEventListener("pointerdown", (event) => {
      if (!homeMenuShell.contains(event.target)) {
        closeHomeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeHomeMenu();
      }
    });
  }

  document.title = "慈愈计划 | 患儿募捐项目首页";
  wireImageFallbacks(root.querySelectorAll("img[data-fallback]"));
}

function renderMoreProjectsPage() {
  const root = document.querySelector("#moreProjectsPage");

  if (!root) {
    return;
  }

  const additionalCampaigns = campaigns.slice(5);

  document.title = "帮助更多孩子 | 慈愈计划";

  root.innerHTML = `
    <section class="listing-hero">
      <span class="directory-kicker">More Campaigns</span>
      <h2>帮助更多正在等待治疗的孩子</h2>
    </section>

    <section class="patient-directory-section">
      <div class="section-heading">
        <span>More Patients</span>
        <h3>还有 ${shortNumber.format(additionalCampaigns.length)} 个项目正在等待帮助</h3>
      </div>
      <div class="patient-directory-grid">
        ${additionalCampaigns.map(renderPatientDirectoryCard).join("")}
      </div>
    </section>

    ${renderFooterNav()}
  `;

  wireImageFallbacks(root.querySelectorAll("img[data-fallback]"));
}

function renderHopeStoriesPage() {
  const root = document.querySelector("#hopeStoriesPage");

  if (!root) {
    return;
  }

  document.title = "希望故事 | 慈愈计划";

  root.innerHTML = `
    <section class="listing-hero">
      <span class="directory-kicker">Stories of Hope</span>
      <h2>每一个被帮助过的孩子，都在证明善意真的能改变命运</h2>
      <p>这里收录的是通过网站完成募捐、顺利接受治疗，并逐步走出病痛阴影的孩子们的回访故事。</p>
    </section>

    <section class="detail-section">
      <span class="mini-label">成功回访</span>
      <h3>更多希望故事</h3>
      <div class="hope-story-list">
        ${hopeStories
          .map(
            (story) => `
              <article class="hope-story-detail-card">
                <img
                  src="${story.image}"
                  data-fallback="${story.fallbackImage}"
                  onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
                  alt="${story.name} 的回访故事"
                  style="object-position:${story.imagePosition};"
                />
                <div class="hope-story-detail-body">
                  <span>${story.category}</span>
                  <h3>${story.name}，${story.age}岁 · ${story.title}</h3>
                  <p class="hope-story-detail-meta">${story.city} ｜ ${story.condition}</p>
                  ${story.details.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                  <div class="hope-story-outcome">
                    <strong>目前情况</strong>
                    <p>${story.outcome}</p>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    ${renderFooterNav()}
  `;

  wireImageFallbacks(root.querySelectorAll("img[data-fallback]"));
}

function renderDonationsPage() {
  const root = document.querySelector("#donationsPage");

  if (!root) {
    return;
  }

  const supportFeed = getSupportFeed();

  document.title = "最新捐助 | 慈愈计划";

  root.innerHTML = `
    <section class="listing-hero">
      <span class="directory-kicker">Recent Donations</span>
      <h2>全部项目的最新捐助记录</h2>
    </section>

    <section class="detail-section">
      <span class="mini-label">捐助汇总</span>
      <h3>查看更多最新捐助</h3>
      <div class="feed-list">
        ${supportFeed
          .map(
            (item) => `
              <article class="support-feed-item">
                <div class="support-feed-head">
                  <strong>${item.name}</strong>
                  <span>${formatter.format(item.amount)}</span>
                </div>
                <p>${item.message}</p>
                <div class="support-feed-foot">
                  <span>${item.campaign.name} · ${item.location}</span>
                  <a href="${buildProjectHref(item.campaign)}">查看项目</a>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    ${renderFooterNav()}
  `;
}

function renderNewsPage() {
  const root = document.querySelector("#newsPage");

  if (!root) {
    return;
  }

  document.title = "新闻媒体 | 慈愈计划";

  const categories = ["全部", ...Array.from(new Set(newsArticles.map((item) => item.category)))];
  const initialItems = getFilteredAndSortedNews("全部", "latest");
  const renderNewsList = (items) =>
    items
      .map(
        (item) => `
          <article class="news-article-card">
            <div class="news-article-top">
              <span>${item.category}</span>
              <strong>${item.source}</strong>
            </div>
            <h4>${item.title}</h4>
            <p>${item.summary}</p>
            <div class="news-article-foot">
              <span>${item.date}</span>
              <a href="${item.url}" target="_blank" rel="noreferrer">查看原文</a>
            </div>
          </article>
        `
      )
      .join("");

  root.innerHTML = `
    <section class="listing-hero">
      <span class="directory-kicker">Newsroom</span>
      <h2>全球慈善、儿童医疗与人道危机相关新闻</h2>
    </section>

    <section class="news-featured-hero">
      <img
        src="${initialItems[0].src}"
        data-fallback="${initialItems[0].fallback}"
        onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
        alt="${initialItems[0].title}"
        style="object-position:${initialItems[0].position};"
      />
      <div class="news-featured-body">
        <span>${initialItems[0].category}</span>
        <h3>${initialItems[0].title}</h3>
        <p>${initialItems[0].summary}</p>
        <div class="news-article-foot">
          <span>${initialItems[0].source} · ${initialItems[0].date}</span>
          <a href="${initialItems[0].url}" target="_blank" rel="noreferrer">查看头条原文</a>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <span class="mini-label">新闻媒体</span>
      <h3>20 篇相关资讯</h3>
      <div class="news-toolbar">
        <div class="news-filter-row">
          ${categories
            .map(
              (category, index) => `
                <button class="news-filter-chip${index === 0 ? " is-active" : ""}" type="button" data-category="${category}">
                  ${category}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="news-sort-row">
          <button class="news-sort-chip is-active" type="button" data-sort="latest">最新优先</button>
          <button class="news-sort-chip" type="button" data-sort="oldest">最早优先</button>
          <button class="news-sort-chip" type="button" data-sort="source">按来源</button>
        </div>
      </div>
      <div class="news-article-list" id="newsArticleList">
        ${renderNewsList(initialItems)}
      </div>
    </section>

    ${renderFooterNav()}
  `;

  const list = root.querySelector("#newsArticleList");
  const filterButtons = root.querySelectorAll(".news-filter-chip");
  const sortButtons = root.querySelectorAll(".news-sort-chip");
  let activeCategory = "全部";
  let activeSort = "latest";

  const updateNewsList = () => {
    const items = getFilteredAndSortedNews(activeCategory, activeSort);
    if (list) {
      list.innerHTML = renderNewsList(items);
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "全部";
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      updateNewsList();
    });
  });

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSort = button.dataset.sort || "latest";
      sortButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      updateNewsList();
    });
  });

  wireImageFallbacks(root.querySelectorAll("img[data-fallback]"));
}

function renderUpdatesPage() {
  const root = document.querySelector("#updatesPage");

  if (!root) {
    return;
  }

  const updateFeed = getUpdateFeed();

  document.title = "最近更新 | 慈愈计划";

  root.innerHTML = `
    <section class="listing-hero">
      <span class="directory-kicker">Latest Updates</span>
      <h2>我们正在持续追踪每一个项目的后续进展</h2>
      <p>这里会持续记录不同患儿项目的治疗推进、费用落实与最新变化，方便你继续了解这些孩子是否正一步步接近被帮助的机会。</p>
    </section>

    <section class="detail-section">
      <span class="mini-label">项目追踪</span>
      <h3>查看更多最近更新</h3>
      <div class="feed-list">
        ${updateFeed
          .map(
            (item) => `
              <a class="update-feed-link" href="${buildProjectHref(item.campaign)}">
                <article class="update-feed-item">
                <div class="support-feed-head">
                  <strong>${item.campaign.name}</strong>
                  <span>${item.title}</span>
                </div>
                <p>${item.body}</p>
                <div class="support-feed-foot">
                  <span>${item.campaign.condition}</span>
                  <span>点击查看项目</span>
                </div>
                </article>
              </a>
            `
          )
          .join("")}
      </div>
    </section>

    ${renderFooterNav()}
  `;
}

function renderProjectPage() {
  const root = document.querySelector("#projectPage");

  if (!root) {
    return;
  }

  const campaign = getSelectedCampaign();
  const progress = percentage(campaign.raised, campaign.target);
  const remaining = remainingAmount(campaign);
  const eyebrow = document.querySelector("#projectEyebrow");
  const detailMeta =
    campaign.detailMeta ||
    `${campaign.country} · ${campaign.city} ｜ ${shortNumber.format(campaign.age)} 岁儿童 ｜ 正因${campaign.condition}争分夺秒等待治疗`;
  const overviewHeading = campaign.overviewHeading || "孩子现在面临的治疗处境";
  const fundsHeading = campaign.fundsHeading || "善款将如何分配";
  const needsHeading = campaign.needsHeading || "直接医疗需求清单";
  const updatesHeading = campaign.updatesHeading || "近半年的持续追踪记录";
  const summaryLabel = campaign.summaryLabel || "项目概况";

  if (eyebrow) {
    eyebrow.textContent = `${campaign.country} · ${campaign.city}`;
  }

  document.title = `${campaign.name}项目详情 | 慈愈计划`;

  root.innerHTML = `
    <section class="detail-hero">
      <div class="detail-hero-media">
        <figure class="single-hero-media">
          <img
            src="${campaign.image}"
            data-fallback="${campaign.fallbackImage}"
            onerror="this.onerror=null;if(this.dataset.fallback){this.src=this.dataset.fallback;}"
            alt="${campaign.name} 的项目主图"
            style="object-position:${campaign.imagePosition};"
          />
        </figure>
        <span class="detail-hero-badge">${campaign.urgency}</span>
      </div>
      <div class="detail-hero-text">
        <span class="chip">${campaign.country} · ${campaign.city}</span>
        <h2>${campaign.appealTitle}</h2>
        <p class="project-meta">${detailMeta}</p>
        <div class="quote-box">${campaign.quote}</div>

        <div class="summary-progress">
          <div class="summary-row">
            <strong>${formatter.format(campaign.raised)}</strong>
            <span>目标 ${formatter.format(campaign.target)}</span>
          </div>
          <div class="progress-track" aria-hidden="true">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="detail-progress-foot">
            <span>已有 ${shortNumber.format(campaign.donors)} 位捐助者</span>
            <span>剩余 ${shortNumber.format(campaign.daysLeft)} 天</span>
          </div>
        </div>

        <div class="detail-actions">
          <a class="primary-btn" href="${buildPaymentHref(campaign)}">立即伸出援手</a>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <span class="mini-label">${summaryLabel}</span>
      <h3>${overviewHeading}</h3>
      <p class="detail-summary">${campaign.summary}</p>
      <div class="detail-story">
        ${campaign.story.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>

    <section class="detail-section" id="recentDonations">
      <span class="mini-label">捐助记录</span>
      <h3>最新捐助记录</h3>
      <div class="amount-grid">
        ${campaign.donationBands
          .map(
            (amount) => `
              <a class="amount-chip" href="${buildPaymentHref(campaign, amount)}">
                捐助 ${formatter.format(amount)}
              </a>
            `
          )
          .join("")}
      </div>
      <div class="donor-list">
        ${campaign.recentDonations
          .map(
            (donation) => `
              <article class="donor-item">
                <div class="donor-item-head">
                  <strong>${donation.name}</strong>
                  <span class="donor-amount">${formatter.format(donation.amount)}</span>
                </div>
                <p>${donation.message}</p>
                <div class="donor-item-foot">
                  <span>${donation.location}</span>
                  <span>${donation.when}</span>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="detail-section">
      <span class="mini-label">资金使用</span>
      <h3>${fundsHeading}</h3>
      <div class="allocation-list">
        ${campaign.allocation
          .map(
            (item) => `
              <article class="allocation-item">
                <div class="allocation-item-head">
                  <strong>${item.label}</strong>
                  <span>${item.percent}</span>
                </div>
                <p>这部分善款将直接用于当前阶段最紧迫的治疗支出。</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="detail-section">
      <span class="mini-label">当前所需</span>
      <h3>${needsHeading}</h3>
      <ul class="needs-list">
        ${campaign.needs.map((need) => `<li>${need}</li>`).join("")}
      </ul>
    </section>

    <section class="detail-section">
      <span class="mini-label">项目更新</span>
      <h3>${updatesHeading}</h3>
      <div class="updates-list">
        ${campaign.updates
          .map(
            (item) => `
              <article class="update-item">
                <div class="update-item-head">
                  <strong>${item.title}</strong>
                  <span>项目更新</span>
                </div>
                <p>${item.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    ${renderFooterNav(buildPaymentHref(campaign))}
  `;

  const stickyInfo = document.querySelector("#stickyInfo");
  const stickyDonate = document.querySelector("#stickyDonate");

  if (stickyInfo) {
    stickyInfo.innerHTML = `
      <strong>${formatter.format(campaign.raised)} / ${formatter.format(campaign.target)}</strong>
      <span>${progress}% 已完成，仍需 ${formatter.format(remaining)}</span>
    `;
  }

  if (stickyDonate) {
    stickyDonate.href = buildPaymentHref(campaign);
  }

  wireImageFallbacks(root.querySelectorAll("img[data-fallback]"));
}

renderHomePage();
renderProjectPage();
renderDonationsPage();
renderUpdatesPage();
renderMoreProjectsPage();
renderHopeStoriesPage();
renderNewsPage();
wireImageFallbacks(document.querySelectorAll("img[data-fallback]"));
