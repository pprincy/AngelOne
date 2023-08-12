
import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
export default {
  name: 'advisory-currency',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      callLists:[
        {
          id:1,
          name:"HEROMOTOCORP",
          category:"Book profit",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'BUY',
        },
        {
          id:2,
          name:"HEROMOTOCORP",
          category:"Open",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'EXIT',
        },
        {
          id:3,
          name:"HEROMOTOCORP",
          category:"Stop loss",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'BUY',
        },
      ],
      otherCallLists:[
        {
          id:1,
          name:"HEROMOTOCORP",
          category:"Close",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'EXIT',
        }
      ],
      qualityVal:4,
      valuationVal:3,
      financialVal:2,
    }
  },
  computed: {

  },
  mounted () {
    $(".scrollable-cont").mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });

    $('.detail-right-sec').mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });
    $('.noHistoryWrapper').mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });
  },
  methods: {

  }
}


