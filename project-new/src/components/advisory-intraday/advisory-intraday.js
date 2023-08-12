import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'advisory-intraday',
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
        }
      ],
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
    // parent() { 
    //   this.details = !this.details
    //  },
    // child1() { alert('you clicked the child1') },
    // child2() { alert('you clicked the child2') },
    // child3() { alert('you clicked the child3') },

    // click1(){
    //   alert("1")
    // },
    // click2(){
    //   alert("2")
    // }
  }
}


