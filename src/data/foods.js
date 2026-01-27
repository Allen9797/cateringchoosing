// 食物数据配置文件
const foodOptions = [
  // 川菜
  {
    id: 1,
    name: '麻婆豆腐',
    cuisine: '川菜',
    isHot: true,
    time: '短',
    ingredients: '豆腐、牛肉末、豆瓣酱、花椒',
    description: '经典川菜，麻辣鲜香，口感丰富',
    type: '荤菜'
  },
  {
    id: 2,
    name: '水煮鱼',
    cuisine: '川菜',
    isHot: true,
    time: '长',
    ingredients: '草鱼、豆芽、辣椒、花椒',
    description: '鲜嫩多汁，麻辣可口',
    type: '荤菜'
  },
  {
    id: 3,
    name: '回锅肉',
    cuisine: '川菜',
    isHot: true,
    time: '中',
    ingredients: '五花肉、青椒、蒜苗、豆瓣酱',
    description: '肥而不腻，香辣开胃',
    type: '荤菜'
  },
  {
    id: 4,
    name: '糖醋排骨',
    cuisine: '川菜',
    isHot: false,
    time: '中',
    ingredients: '排骨、醋、糖、酱油',
    description: '酸甜可口，肉质酥烂',
    type: '荤菜'
  },
  {
    id: 5,
    name: '鱼香肉丝',
    cuisine: '川菜',
    isHot: true,
    time: '短',
    ingredients: '猪里脊、青椒、木耳、胡萝卜',
    description: '鱼香风味，酸甜可口',
    type: '荤菜'
  },
  {
    id: 6,
    name: '宫保鸡丁',
    cuisine: '川菜',
    isHot: true,
    time: '短',
    ingredients: '鸡肉、花生、辣椒、葱',
    description: '麻辣鲜香，口感丰富',
    type: '荤菜'
  },
  {
    id: 7,
    name: '水煮肉片',
    cuisine: '川菜',
    isHot: true,
    time: '中',
    ingredients: '猪肉、豆芽、辣椒、花椒',
    description: '麻辣可口，肉质鲜嫩',
    type: '荤菜'
  },
  {
    id: 8,
    name: '辣子鸡',
    cuisine: '川菜',
    isHot: true,
    time: '中',
    ingredients: '鸡肉、辣椒、花椒、葱',
    description: '麻辣酥脆，香气扑鼻',
    type: '荤菜'
  },
  {
    id: 9,
    name: '蒜蓉空心菜',
    cuisine: '川菜',
    isHot: false,
    time: '短',
    ingredients: '空心菜、蒜蓉、盐、油',
    description: '清爽可口，营养健康',
    type: '蔬菜'
  },
  {
    id: 10,
    name: '麻酱油麦菜',
    cuisine: '川菜',
    isHot: false,
    time: '短',
    ingredients: '油麦菜、芝麻酱、醋、蒜',
    description: '清爽解腻，口感独特',
    type: '蔬菜'
  },
  {
    id: 11,
    name: '清炒时蔬',
    cuisine: '川菜',
    isHot: false,
    time: '短',
    ingredients: '时令蔬菜、盐、油、蒜',
    description: '清爽可口，营养健康',
    type: '蔬菜'
  },
  {
    id: 12,
    name: '番茄鸡蛋汤',
    cuisine: '川菜',
    isHot: false,
    time: '短',
    ingredients: '番茄、鸡蛋、葱花、盐',
    description: '酸甜可口，营养丰富',
    type: '汤品'
  },
  // 新式粤菜
  {
    id: 13,
    name: '白切鸡',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '鸡肉、姜、葱、盐',
    description: '肉质鲜嫩，原汁原味',
    type: '荤菜'
  },
  {
    id: 14,
    name: '烧腊拼盘',
    cuisine: '新式粤菜',
    isHot: false,
    time: '长',
    ingredients: '烤鸭、叉烧、烧肉、酸梅酱',
    description: '口感丰富，风味独特',
    type: '荤菜'
  },
  {
    id: 15,
    name: '清蒸鲈鱼',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '鲈鱼、姜、葱、料酒',
    description: '鲜嫩多汁，清淡爽口',
    type: '荤菜'
  },
  {
    id: 16,
    name: '蒜蓉粉丝蒸扇贝',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '扇贝、粉丝、蒜蓉、蒸鱼豉油',
    description: '鲜香可口，营养丰富',
    type: '荤菜'
  },
  {
    id: 17,
    name: '粤菜咕噜肉',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '猪肉、菠萝、青椒、番茄酱',
    description: '酸甜可口，外酥里嫩',
    type: '荤菜'
  },
  {
    id: 18,
    name: '豉汁蒸排骨',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '排骨、豆豉、蒜、姜',
    description: '香气扑鼻，肉质鲜嫩',
    type: '荤菜'
  },
  {
    id: 19,
    name: '西蓝花炒虾仁',
    cuisine: '新式粤菜',
    isHot: false,
    time: '短',
    ingredients: '西蓝花、虾仁、蒜、盐',
    description: '清爽可口，营养丰富',
    type: '荤菜'
  },
  {
    id: 20,
    name: '干炒牛河',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '河粉、牛肉、豆芽、洋葱',
    description: '口感丰富，香气扑鼻',
    type: '荤菜'
  },
  {
    id: 21,
    name: '上汤娃娃菜',
    cuisine: '新式粤菜',
    isHot: false,
    time: '短',
    ingredients: '娃娃菜、皮蛋、咸蛋、鸡汤',
    description: '清爽可口，营养丰富',
    type: '蔬菜'
  },
  {
    id: 22,
    name: '白灼菜心',
    cuisine: '新式粤菜',
    isHot: false,
    time: '短',
    ingredients: '菜心、蒜、蚝油、油',
    description: '清爽可口，原汁原味',
    type: '蔬菜'
  },
  {
    id: 23,
    name: '清炒芥蓝',
    cuisine: '新式粤菜',
    isHot: false,
    time: '短',
    ingredients: '芥蓝、蒜、盐、油',
    description: '清爽可口，营养健康',
    type: '蔬菜'
  },
  {
    id: 24,
    name: '老火靓汤',
    cuisine: '新式粤菜',
    isHot: false,
    time: '长',
    ingredients: '排骨、玉米、胡萝卜、淮山',
    description: '营养丰富，口感浓郁',
    type: '汤品'
  },
  // 日料/寿司
  {
    id: 25,
    name: '三文鱼刺身',
    cuisine: '日料/寿司',
    isHot: false,
    time: '短',
    ingredients: '三文鱼、芥末、酱油',
    description: '鲜嫩可口，口感独特',
    type: '荤菜'
  },
  {
    id: 26,
    name: '金枪鱼寿司',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '金枪鱼、米饭、海苔、芥末',
    description: '口感丰富，风味独特',
    type: '荤菜'
  },
  {
    id: 27,
    name: '加州卷',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '米饭、海苔、蟹肉、牛油果',
    description: '口感丰富，风味独特',
    type: '荤菜'
  },
  {
    id: 28,
    name: '三文鱼寿司',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '三文鱼、米饭、海苔、芥末',
    description: '鲜嫩可口，风味独特',
    type: '荤菜'
  },
  {
    id: 29,
    name: '北极贝刺身',
    cuisine: '日料/寿司',
    isHot: false,
    time: '短',
    ingredients: '北极贝、芥末、酱油',
    description: '口感爽脆，风味独特',
    type: '荤菜'
  },
  {
    id: 30,
    name: '甜虾刺身',
    cuisine: '日料/寿司',
    isHot: false,
    time: '短',
    ingredients: '甜虾、芥末、酱油',
    description: '鲜嫩可口，风味独特',
    type: '荤菜'
  },
  {
    id: 31,
    name: '鳗鱼寿司',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '鳗鱼、米饭、海苔、芥末',
    description: '口感丰富，风味独特',
    type: '荤菜'
  },
  {
    id: 32,
    name: '蟹籽寿司',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '蟹籽、米饭、海苔、芥末',
    description: '口感独特，风味鲜美',
    type: '荤菜'
  },
  {
    id: 33,
    name: '日式凉拌黄瓜',
    cuisine: '日料/寿司',
    isHot: false,
    time: '短',
    ingredients: '黄瓜、醋、糖、盐',
    description: '清爽可口，解腻开胃',
    type: '蔬菜'
  },
  {
    id: 34,
    name: '日式土豆沙拉',
    cuisine: '日料/寿司',
    isHot: false,
    time: '短',
    ingredients: '土豆、黄瓜、鸡蛋、沙拉酱',
    description: '口感丰富，风味独特',
    type: '蔬菜'
  },
  {
    id: 35,
    name: '海藻沙拉',
    cuisine: '日料/寿司',
    isHot: false,
    time: '短',
    ingredients: '海藻、醋、糖、盐',
    description: '清爽可口，营养丰富',
    type: '蔬菜'
  },
  {
    id: 36,
    name: '味增汤',
    cuisine: '日料/寿司',
    isHot: false,
    time: '短',
    ingredients: '味增、豆腐、海带、葱花',
    description: '口感独特，营养丰富',
    type: '汤品'
  },
  // 新增川菜
  {
    id: 37,
    name: '酸辣土豆丝',
    cuisine: '川菜',
    isHot: true,
    time: '短',
    ingredients: '土豆、辣椒、醋、蒜',
    description: '酸辣可口，口感爽脆',
    type: '蔬菜'
  },
  {
    id: 38,
    name: '泡椒凤爪',
    cuisine: '川菜',
    isHot: true,
    time: '长',
    ingredients: '凤爪、泡椒、姜、蒜',
    description: '酸辣可口，口感爽脆',
    type: '荤菜'
  },
  {
    id: 39,
    name: '夫妻肺片',
    cuisine: '川菜',
    isHot: true,
    time: '中',
    ingredients: '牛肺、牛肚、辣椒、花椒',
    description: '麻辣鲜香，口感丰富',
    type: '荤菜'
  },
  {
    id: 40,
    name: '毛血旺',
    cuisine: '川菜',
    isHot: true,
    time: '中',
    ingredients: '鸭血、毛肚、豆芽、辣椒',
    description: '麻辣鲜香，口感丰富',
    type: '荤菜'
  },
  {
    id: 41,
    name: '蒜泥白肉',
    cuisine: '川菜',
    isHot: false,
    time: '中',
    ingredients: '五花肉、蒜泥、酱油、醋',
    description: '肥而不腻，口感独特',
    type: '荤菜'
  },
  // 新增新式粤菜
  {
    id: 42,
    name: '避风塘炒蟹',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '螃蟹、面包糠、蒜、辣椒',
    description: '口感酥脆，香气扑鼻',
    type: '荤菜'
  },
  {
    id: 43,
    name: '椒盐皮皮虾',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '皮皮虾、椒盐、蒜、辣椒',
    description: '口感酥脆，香气扑鼻',
    type: '荤菜'
  },
  {
    id: 44,
    name: '菠萝咕噜肉',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '猪肉、菠萝、青椒、番茄酱',
    description: '酸甜可口，外酥里嫩',
    type: '荤菜'
  },
  {
    id: 45,
    name: '粤式早茶点心拼盘',
    cuisine: '新式粤菜',
    isHot: false,
    time: '长',
    ingredients: '虾饺、烧卖、凤爪、排骨',
    description: '品种丰富，口感多样',
    type: '荤菜'
  },
  {
    id: 46,
    name: '椰汁西米露',
    cuisine: '新式粤菜',
    isHot: false,
    time: '中',
    ingredients: '西米、椰汁、牛奶、糖',
    description: '口感香甜，清凉解暑',
    type: '汤品'
  },
  // 新增日料/寿司
  {
    id: 47,
    name: '日式拉面',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '拉面、叉烧、温泉蛋、汤底',
    description: '口感丰富，汤汁浓郁',
    type: '荤菜'
  },
  {
    id: 48,
    name: '寿司拼盘',
    cuisine: '日料/寿司',
    isHot: false,
    time: '长',
    ingredients: '各种寿司、芥末、酱油',
    description: '品种丰富，口感多样',
    type: '荤菜'
  },
  {
    id: 49,
    name: '日式煎饺',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '饺子皮、猪肉、白菜、葱',
    description: '外酥里嫩，口感丰富',
    type: '荤菜'
  },
  {
    id: 50,
    name: '日式炸鸡',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '鸡肉、面粉、鸡蛋、面包糠',
    description: '外酥里嫩，香气扑鼻',
    type: '荤菜'
  },
  {
    id: 51,
    name: '日式海鲜炒饭',
    cuisine: '日料/寿司',
    isHot: false,
    time: '中',
    ingredients: '米饭、海鲜、鸡蛋、葱',
    description: '口感丰富，香气扑鼻',
    type: '荤菜'
  }
]

export default foodOptions;