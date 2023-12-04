export const USDMock = [
  {
    ask: "0.2312531613",
    bid: "0.2304737159",
    currency: "USD",
    pair: "TESTUSD",
  },
  {
    ask: "0.2312531613",
    bid: "0.2304737159",
    currency: "USD",
    pair: "BATUSD",
  },
  {
    ask: "38797.1595457513",
    bid: "38679.3329973715",
    currency: "USD",
    pair: "BTCUSD",
  },
  {
    ask: "2105.3622866058",
    bid: "2103.2594927346",
    currency: "USD",
    pair: "ETHUSD",
  },
  {
    ask: "1.4009831764",
    bid: "1.3981249516",
    currency: "USD",
    pair: "IMX-USD",
  },
  {
    ask: "2520.7948",
    bid: "2039.2222",
    currency: "USD",
    pair: "XAUUSD",
  },
  {
    ask: "0.6140715135",
    bid: "0.613503767",
    currency: "USD",
    pair: "XRPUSD",
  },
];

export const BTCMock = [
  {
    ask: "0.00000617811903304375",
    bid: "0.00000613575611933064",
    currency: "BTC",
    pair: "BATBTC",
  },
  {
    ask: "0.05442667814306298442",
    bid: "0.05420793890225553352",
    currency: "BTC",
    pair: "ETHBTC",
  },
  {
    ask: "0.00003633818358077055",
    bid: "0.00003617259742461651",
    currency: "BTC",
    pair: "IMX-BTC",
  },
  {
    ask: "0.06533277857409105731",
    bid: "0.05268304499493741655",
    currency: "BTC",
    pair: "XAUBTC",
  },
  {
    ask: "0.00001588094847152165",
    bid: "0.00001581267595528278",
    currency: "BTC",
    pair: "XRPBTC",
  },
];

export const XRPMock = [
  {
    ask: "0.38575374293305911639",
    bid: "0.38392209738350565558",
    currency: "XRP",
    pair: "BATXRP",
  },
  {
    ask: "63222.84156983727708822038",
    bid: "62977.52430968082036399985",
    currency: "XRP",
    pair: "BTCXRP",
  },
  {
    ask: "3457.55187456715233433597",
    bid: "3449.76274824030385056266",
    currency: "XRP",
    pair: "ETHXRP",
  },
  {
    ask: "2.28480655007589579687",
    bid: "2.27832890256946926478",
    currency: "XRP",
    pair: "IMX-XRP",
  },
  {
    ask: "4104.0035762134309188816",
    bid: "3316.37309881136583530232",
    currency: "XRP",
    pair: "XAUXRP",
  },
];

export const mockSupportedCurrencies = [
  {
    code: "TEST",
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

/* export const mockedStore = configureStore({
      supportedCurrencies: {
        currencies: [
          ...mocksupportedCurrencies
        ],
      },
      currencyAmount: {
        value: 100, // mock currency amount as needed
      },
      selectedCurrency: {
        currency: {
          code: 'USD', // mock selected currency as needed
        },
      },
      conversionRates: {
        rates: {
          USD: [
            {
              pair: 'USD-EUR',
              bid: 0.85,
              ask: 0.86,
            },
            // Add more mock rates as needed
          ],
        },
      },
    });
  }); 
 */
