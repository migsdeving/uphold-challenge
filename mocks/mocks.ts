export const USDMock = [
  {
    ask: "0.1",
    bid: "0.2304737159",
    currency: "USD",
    pair: "BATUSD",
    convertTo: "BAT",
  },
  {
    ask: "38797.1595457513",
    bid: "38679.3329973715",
    currency: "USD",
    pair: "BTCUSD",
    convertTo: "BTC",
  },
  {
    ask: "2105.3622866058",
    bid: "2103.2594927346",
    currency: "USD",
    pair: "ETHUSD",
    convertTo: "ETH",
  },
  {
    ask: "1.4009831764",
    bid: "1.3981249516",
    currency: "USD",
    pair: "IMX-USD",
    convertTo: "IMX",
  },
  {
    ask: "2520.7948",
    bid: "2039.2222",
    currency: "USD",
    pair: "XAUUSD",
    convertTo: "XAU",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "XRPUSD",
    convertTo: "XRP",
  },
];

export const BTCMock = [
  {
    ask: "0.00000617811903304375",
    bid: "0.00000613575611933064",
    currency: "BTC",
    pair: "BATBTC",
    convertTo: "BAT",
  },
  {
    ask: "0.05442667814306298442",
    bid: "0.05420793890225553352",
    currency: "BTC",
    pair: "ETHBTC",
    convertTo: "ETH",
  },
  {
    ask: "0.00003633818358077055",
    bid: "0.00003617259742461651",
    currency: "BTC",
    pair: "IMX-BTC",
    convertTo: "IMX",
  },
  {
    ask: "0.06533277857409105731",
    bid: "0.05268304499493741655",
    currency: "BTC",
    pair: "XAUBTC",
    convertTo: "XAU",
  },
  {
    ask: "0.00001588094847152165",
    bid: "0.00001581267595528278",
    currency: "BTC",
    pair: "XRPBTC",
    convertTo: "XRP",
  },
];

export const XRPMock = [
  {
    ask: "0.38575374293305911639",
    bid: "0.38392209738350565558",
    currency: "XRP",
    pair: "BATXRP",
    convertTo: "BAT",
  },
  {
    ask: "63222.84156983727708822038",
    bid: "62977.52430968082036399985",
    currency: "XRP",
    pair: "BTCXRP",
    convertTo: "BTC",
  },
  {
    ask: "3457.55187456715233433597",
    bid: "3449.76274824030385056266",
    currency: "XRP",
    pair: "ETHXRP",
    convertTo: "ETH",
  },
  {
    ask: "2.28480655007589579687",
    bid: "2.27832890256946926478",
    currency: "XRP",
    pair: "IMX-XRP",
    convertTo: "IMX",
  },
  {
    ask: "4104.0035762134309188816",
    bid: "3316.37309881136583530232",
    currency: "XRP",
    pair: "XAUXRP",
    convertTo: "XAU",
  },
];

export const mockSupportedCurrencies = [
  {
    code: "BAT",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__value__ __code__",
      grouping: ",",
      precision: 18,
    },
    image: "https://cdn.uphold.com/assets/BAT.svg",
    name: "Basic Attention Token",
    shortName: "BAT",
    status: "open",
    type: "utility_token",
  },
  {
    code: "BTC",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/BTC.svg",
    name: "Bitcoin",
    shortName: "BTC",
    status: "open",
    symbol: "₿",
    type: "cryptocurrency",
  },
  {
    code: "ETH",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 18,
    },
    image: "https://cdn.uphold.com/assets/ETH.svg",
    name: "Ether",
    shortName: "ETH",
    status: "open",
    symbol: "Ξ",
    type: "cryptocurrency",
  },
  {
    code: "XRP",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__value__ __code__",
      grouping: ",",
      precision: 6,
    },
    image: "https://cdn.uphold.com/assets/XRP.svg",
    name: "XRP",
    shortName: "XRP",
    status: "open",
    type: "cryptocurrency",
  },
  {
    code: "USD",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 2,
    },
    image: "https://cdn.uphold.com/assets/USD.svg",
    name: "US Dollar",
    shortName: "USD",
    status: "open",
    symbol: "$",
    type: "fiat",
  },
  {
    code: "XAU",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
];
export const mockLongListSupportedCurrencies = [
  {
    code: "BAT",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__value__ __code__",
      grouping: ",",
      precision: 18,
    },
    image: "https://cdn.uphold.com/assets/BAT.svg",
    name: "Basic Attention Token",
    shortName: "BAT",
    status: "open",
    type: "utility_token",
  },
  {
    code: "BTC",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/BTC.svg",
    name: "Bitcoin",
    shortName: "BTC",
    status: "open",
    symbol: "₿",
    type: "cryptocurrency",
  },
  {
    code: "ETH",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 18,
    },
    image: "https://cdn.uphold.com/assets/ETH.svg",
    name: "Ether",
    shortName: "ETH",
    status: "open",
    symbol: "Ξ",
    type: "cryptocurrency",
  },
  {
    code: "XRP",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__value__ __code__",
      grouping: ",",
      precision: 6,
    },
    image: "https://cdn.uphold.com/assets/XRP.svg",
    name: "XRP",
    shortName: "XRP",
    status: "open",
    type: "cryptocurrency",
  },
  {
    code: "USD",
    features: ["buy", "deposit", "sell", "transfer", "withdraw"],
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 2,
    },
    image: "https://cdn.uphold.com/assets/USD.svg",
    name: "US Dollar",
    shortName: "USD",
    status: "open",
    symbol: "$",
    type: "fiat",
  },
  {
    code: "XAU",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST1",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST2",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST3",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST4",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST5",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST6",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST7",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST8",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST9",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST10",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST11",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST12",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST13",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST14",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST15",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST16",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST17",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST18",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST19",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
  {
    code: "TEST20",
    features: [
      "buy",
      "deposit",
      "redirect-deposit",
      "sell",
      "transfer",
      "withdraw",
    ],
    formatting: {
      decimal: ".",
      format: "__code__ __value__ __symbol__",
      grouping: ",",
      precision: 8,
    },
    image: "https://cdn.uphold.com/assets/XAU.svg",
    name: "Gold (Legacy)",
    shortName: "XAU",
    status: "open",
    symbol: "oz",
    type: "commodity",
  },
];

export const USDlONGMock = [
  {
    ask: "0.1",
    bid: "0.2304737159",
    currency: "USD",
    pair: "BATUSD",
    convertTo: "BAT",
  },
  {
    ask: "38797.1595457513",
    bid: "38679.3329973715",
    currency: "USD",
    pair: "BTCUSD",
    convertTo: "BTC",
  },
  {
    ask: "2105.3622866058",
    bid: "2103.2594927346",
    currency: "USD",
    pair: "ETHUSD",
    convertTo: "ETH",
  },
  {
    ask: "1.4009831764",
    bid: "1.3981249516",
    currency: "USD",
    pair: "IMX-USD",
    convertTo: "IMX",
  },
  {
    ask: "2520.7948",
    bid: "2039.2222",
    currency: "USD",
    pair: "XAUUSD",
    convertTo: "XAU",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "XRPUSD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST1USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST2USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST3USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST4SD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST5USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST6USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST7USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST8USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST9USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST10USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST11USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST12USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST13USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST14USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST15USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST16USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST17USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST18USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST19USD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "TEST20USD",
  },
];
