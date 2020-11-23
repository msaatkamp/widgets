const insightsDetails = [
  {
    title: "Purchase Analysis",
    id: "f1c70a2e-9ed9-418b-8d44-d71c38c374ce",
    blocks: [
      {
        id: "text-block-1",
        type: "text",
        text: "this is an analysis of your latest purhcases",
      },
      {
        id: "account-selector-1",
        type: "accountSelector",
        accounts: [
          {
            id: "1",
            totalPurchases: 1128.34,
            image: "card",
            type: "A"
          },
          {
            id: "2",
            totalPurchases: 1894.98,
            image: "private",
            type: "B"
          },
          {
            id: "3",
            totalPurchases: 2663.68,
            image: "business",
            type: "C"
          },
        ],
      },
      {
        id: "piechart-1",
        type: "pieChart",
        slices: [
          {
            accountId: "1",
            category: "Shopping",
            amount: 396.03,
          },
          {
            accountId: "1",
            category: "Transportation",
            amount: 286.49,
          },
          {
            accountId: "1",
            category: "Groceries",
            amount: 98.92,
          },
          {
            accountId: "1",
            category: "Other",
            amount: 346.9,
          },
          {
            accountId: "2",
            category: "Travel",
            amount: 1096.56,
          },
          {
            accountId: "2",
            category: "Shopping",
            amount: 798.43,
          },
          {
            accountId: "3",
            category: "Other",
            amount: 1738.73,
          },
          {
            accountId: "3",
            category: "Groceries",
            amount: 385.17,
          },
          {
            accountId: "3",
            category: "Shopping",
            amount: 539.78,
          },
        ],
      },
      {
        id: "tl-1",
        type: "transactionList",
        transactions: [
          {
            accountId: "1",
            category: "Shopping",
            merchantName: "Tesoro Petroleum Corp.",
            date: 1504793373,
            amount: 56.29,
          },
          {
            accountId: "1",
            category: "Shopping",
            merchantName: "Pier 1 Imports Inc.",
            date: 1504780043,
            amount: 67.35,
          },
          {
            accountId: "1",
            category: "Shopping",
            merchantName: "Cabot Corp",
            date: 1504766713,
            amount: 272.4,
          },
          {
            accountId: "1",
            category: "Transportation",
            merchantName: "TRW Inc",
            date: 1504753383,
            amount: 11.58,
          },
          {
            accountId: "1",
            category: "Transportation",
            merchantName: "Metaldyne Corporation",
            date: 1504740053,
            amount: 205.44,
          },
          {
            accountId: "1",
            category: "Transportation",
            merchantName: "Leggett & Platt Inc.",
            date: 1504726723,
            amount: 69.47,
          },
          {
            accountId: "1",
            category: "Groceries",
            merchantName: "Charter One Financial Inc.",
            date: 1504713393,
            amount: 34.72,
          },
          {
            accountId: "1",
            category: "Groceries",
            merchantName: "Maxtor Corporation",
            date: 1504700063,
            amount: 64.2,
          },
          {
            accountId: "1",
            category: "Other",
            merchantName: "Level 3 Communications Inc.",
            date: 1504686733,
            amount: 132.55,
          },
          {
            accountId: "1",
            category: "Other",
            merchantName: "International Multifoods Corporation",
            date: 1504673403,
            amount: 13.38,
          },
          {
            accountId: "1",
            category: "Other",
            merchantName: "Trigon Healthcare Inc.",
            date: 1504660073,
            amount: 200.98,
          },
          {
            accountId: "2",
            category: "Shopping",
            merchantName: "Intuit Inc.",
            date: 1504646743,
            amount: 101.69,
          },
          {
            accountId: "2",
            category: "Shopping",
            merchantName: "Nortek Inc",
            date: 1504633413,
            amount: 296.25,
          },
          {
            accountId: "2",
            category: "Shopping",
            merchantName: "Stanley Works",
            date: 1504620083,
            amount: 258.28,
          },
          {
            accountId: "2",
            category: "Shopping",
            merchantName: "North Fork Bancorporation Inc",
            date: 1504606753,
            amount: 142.21,
          },
          {
            accountId: "2",
            category: "Travel",
            merchantName: "Quanta Services Inc.",
            date: 1504593423,
            amount: 224.62,
          },
          {
            accountId: "2",
            category: "Travel",
            merchantName: "Peoples Energy Corp.",
            date: 1504580093,
            amount: 149.76,
          },
          {
            accountId: "2",
            category: "Travel",
            merchantName: "Whole Foods Market Inc",
            date: 1504566763,
            amount: 269.45,
          },
          {
            accountId: "2",
            category: "Travel",
            merchantName: "AMR Corporation",
            date: 1504553433,
            amount: 187.45,
          },
          {
            accountId: "2",
            category: "Travel",
            merchantName: "Corn Products International Inc.",
            date: 1504540103,
            amount: 265.28,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Deluxe Corporation",
            date: 1504526773,
            amount: 130.84,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Worthington Industries Inc",
            date: 1504513443,
            amount: 142.54,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Metris Companies Inc",
            date: 1504500113,
            amount: 244.38,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Lands' End Inc.",
            date: 1504486783,
            amount: 33.78,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Brown Shoe Company, Inc.",
            date: 1504473453,
            amount: 278.01,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Crown Cork & Seal Co. Inc.",
            date: 1504460123,
            amount: 286.51,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "D&K Healthcare Resources, Inc.",
            date: 1504446793,
            amount: 116.26,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "VF Corporation",
            date: 1504433463,
            amount: 244.79,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Flowers Foods Inc.",
            date: 1504420133,
            amount: 174.49,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "International Business Machines Corp.",
            date: 1504406803,
            amount: 44.36,
          },
          {
            accountId: "3",
            category: "Other",
            merchantName: "Avaya Inc.",
            date: 1504393473,
            amount: 42.78,
          },
          {
            accountId: "3",
            category: "Groceries",
            merchantName: "National Fuel Gas Company",
            date: 1504380143,
            amount: 68.75,
          },
          {
            accountId: "3",
            category: "Groceries",
            merchantName: "DaVita Inc.",
            date: 1504366813,
            amount: 41.49,
          },
          {
            accountId: "3",
            category: "Groceries",
            merchantName: "DST Systems, Inc.",
            date: 1504353483,
            amount: 274.93,
          },
          {
            accountId: "3",
            category: "Shopping",
            merchantName: "Guidant Corporation",
            date: 1504340153,
            amount: 67.24,
          },
          {
            accountId: "3",
            category: "Shopping",
            merchantName: "Sysco Corp",
            date: 1504326823,
            amount: 13,
          },
          {
            accountId: "3",
            category: "Shopping",
            merchantName: "Weis Markets Inc.",
            date: 1504313493,
            amount: 157.92,
          },
          {
            accountId: "3",
            category: "Shopping",
            merchantName: "Genesis Health Ventures Inc.",
            date: 1504300163,
            amount: 64.43,
          },
          {
            accountId: "3",
            category: "Shopping",
            merchantName: "Applied Industrial Technologies, Inc.",
            date: 1504286833,
            amount: 237.19,
          },
        ],
      },
    ],
  },
  {
    title: "The Text Story",
    id: "18b1c762-6c42-4a5c-a332-d762f9057df5",
    blocks: [
      {
        id: "text-block-1",
        type: "text",
        text: "this is some short text, is the rating stuck to the bottom?",
      },
    ],
  },
  {
    title: "The Transactions Story",
    id: "447e3a4b-ee1d-458e-9c9f-d040abed82b0",
    blocks: [
      {
        id: "tl-1",
        type: "transactionList",
        transactions: [
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Tesoro Petroleum Corp.",
            date: 1504793373,
            amount: 56.29,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Pier 1 Imports Inc.",
            date: 1504780043,
            amount: 67.35,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Cabot Corp",
            date: 1504766713,
            amount: 272.4,
          },
          {
            accountId: "",
            category: "Transportation",
            merchantName: "TRW Inc",
            date: 1504753383,
            amount: 11.58,
          },
          {
            accountId: "",
            category: "Transportation",
            merchantName: "Metaldyne Corporation",
            date: 1504740053,
            amount: 205.44,
          },
          {
            accountId: "",
            category: "Transportation",
            merchantName: "Leggett & Platt Inc.",
            date: 1504726723,
            amount: 69.47,
          },
          {
            accountId: "",
            category: "Groceries",
            merchantName: "Charter One Financial Inc.",
            date: 1504713393,
            amount: 34.72,
          },
          {
            accountId: "",
            category: "Groceries",
            merchantName: "Maxtor Corporation",
            date: 1504700063,
            amount: 64.2,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Level 3 Communications Inc.",
            date: 1504686733,
            amount: 132.55,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "International Multifoods Corporation",
            date: 1504673403,
            amount: 13.38,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Trigon Healthcare Inc.",
            date: 1504660073,
            amount: 200.98,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Intuit Inc.",
            date: 1504646743,
            amount: 101.69,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Nortek Inc",
            date: 1504633413,
            amount: 296.25,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Stanley Works",
            date: 1504620083,
            amount: 258.28,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "North Fork Bancorporation Inc",
            date: 1504606753,
            amount: 142.21,
          },
          {
            accountId: "",
            category: "Travel",
            merchantName: "Quanta Services Inc.",
            date: 1504593423,
            amount: 224.62,
          },
          {
            accountId: "",
            category: "Travel",
            merchantName: "Peoples Energy Corp.",
            date: 1504580093,
            amount: 149.76,
          },
          {
            accountId: "",
            category: "Travel",
            merchantName: "Whole Foods Market Inc",
            date: 1504566763,
            amount: 269.45,
          },
          {
            accountId: "",
            category: "Travel",
            merchantName: "AMR Corporation",
            date: 1504553433,
            amount: 187.45,
          },
          {
            accountId: "",
            category: "Travel",
            merchantName: "Corn Products International Inc.",
            date: 1504540103,
            amount: 265.28,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Deluxe Corporation",
            date: 1504526773,
            amount: 130.84,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Worthington Industries Inc",
            date: 1504513443,
            amount: 142.54,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Metris Companies Inc",
            date: 1504500113,
            amount: 244.38,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Lands' End Inc.",
            date: 1504486783,
            amount: 33.78,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Brown Shoe Company, Inc.",
            date: 1504473453,
            amount: 278.01,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Crown Cork & Seal Co. Inc.",
            date: 1504460123,
            amount: 286.51,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "D&K Healthcare Resources, Inc.",
            date: 1504446793,
            amount: 116.26,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "VF Corporation",
            date: 1504433463,
            amount: 244.79,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Flowers Foods Inc.",
            date: 1504420133,
            amount: 174.49,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "International Business Machines Corp.",
            date: 1504406803,
            amount: 44.36,
          },
          {
            accountId: "",
            category: "Other",
            merchantName: "Avaya Inc.",
            date: 1504393473,
            amount: 42.78,
          },
          {
            accountId: "",
            category: "Groceries",
            merchantName: "National Fuel Gas Company",
            date: 1504380143,
            amount: 68.75,
          },
          {
            accountId: "",
            category: "Groceries",
            merchantName: "DaVita Inc.",
            date: 1504366813,
            amount: 41.49,
          },
          {
            accountId: "",
            category: "Groceries",
            merchantName: "DST Systems, Inc.",
            date: 1504353483,
            amount: 274.93,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Guidant Corporation",
            date: 1504340153,
            amount: 67.24,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Sysco Corp",
            date: 1504326823,
            amount: 13,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Weis Markets Inc.",
            date: 1504313493,
            amount: 157.92,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Genesis Health Ventures Inc.",
            date: 1504300163,
            amount: 64.43,
          },
          {
            accountId: "",
            category: "Shopping",
            merchantName: "Applied Industrial Technologies, Inc.",
            date: 1504286833,
            amount: 237.19,
          },
        ],
      },
    ],
  },
];

module.exports = insightsDetails;
