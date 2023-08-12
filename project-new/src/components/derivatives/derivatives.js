
export default {
  name: 'derivatives',
  props: [],
  data() {
    return {
      profitLossDetail: false,
      contract: '',
      action: '',
      contractVal: '',
      price: '',
      priceSection: false,
      viewLessSection: false,
      viewDetailSection: true,
      shortBuild: false,
      neutral: false,

      today: {
        fresh: "1640",
        squareOff: "152",
        contTraded: "75000"
      },

      todaysPriceSummary: [{
          id: 1,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 2,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        },
        {
          id: 3,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 4,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        }
      ],
      dailyPriceSummary: [{
          id: 1,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 2,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        },
        {
          id: 3,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 4,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        }
      ],
      weeklyPriceSummary: [{
          id: 1,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 2,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        },
        {
          id: 3,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 4,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        }
      ],
      monthlyPriceSummary: [{
          id: 1,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 2,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        },
        {
          id: 3,
          range1: "1,747.45 - 1,753.00",
          range2: "14.00 to 14.15",
          trend: "SHORT COVERING",
          fresh: "36",
          squareOff: "18",
          contTraded: "133"
        },
        {
          id: 4,
          range1: "1,749.05 - 1,753.70",
          range2: "14.15 to 14.30",
          trend: "LONG BUILT-UP",
          fresh: "21",
          squareOff: "1",
          contTraded: "153"
        }
      ]

    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    showDetail() {
      this.profitLossDetail = true
    },
    decrement() {
      this.contractVal = this.contractVal - 1

    },
    increment() {
      this.contractVal = this.contractVal + 1
    },
    viewDetail() {
      this.priceSection = true
      this.viewLessSection = true
      this.viewDetailSection = false
    },
    viewLess() {
      this.priceSection = false
      this.viewDetailSection = true
      this.viewLessSection = false
    }
  }
}