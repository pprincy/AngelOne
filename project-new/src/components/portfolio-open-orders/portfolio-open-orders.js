// import $ from 'jquery';
export default {
  name: 'portfolio-open-orders',
  components: {},
  props: [],
  data () {
    return {
      priceType:"Market",
      successMsg:false,
      openOrderlists:[
        {
          id:1,
          name:"HEROMOTOCORP",
          exchange:"NSE",
          compName:"31 Mar 2020 CE1400",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          orderType:"MARGIN",
          action:"Buy",
          actionVal:"positive",
          actionPrice:"10,000.25",
          executedQty:60,
          priceType:"Limit",
          details:false,
          cancelOrder:false,
          editOrder:false,
          editCancelBtns:false,
          clicked: false,
        },
        {
          id:2,
          name:"RELIANCE",
          exchange:"NSE",
          compName:"Reliance Industries",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          orderType:"DELIVERY",
          action:"Sell",
          actionVal:"negative",
          actionPrice:"15,802.25",
          executedQty:60,
          priceType:"Limit",
          details:false,
          cancelOrder:false,
          editOrder:false,
          editCancelBtns:false,
          clicked: false,
        },
        {
          id:3,
          name:"SBIN",
          exchange:"NSE",
          compName:"State Bank of India",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          orderType:"INTRADAY",
          action:"Buy",
          actionVal:"positive",
          actionPrice:"15,802.25",
          executedQty:60,
          priceType:"Limit",
          details:false,
          cancelOrder:false,
          editOrder:false,
          editCancelBtns:false,
          clicked: false,
        },
        {
          id:4,
          name:"HEROMOTOCORP",
          exchange:"NSE FO",
          compName:"31 Mar 2020",
          price:1074.50,
          chg:21.40,
          shareVal:"negative",
          per:"0.74",
          orderType:"MARGIN",
          action:"Sell",
          actionVal:"negative",
          actionPrice:"14,507.25",
          executedQty:60,
          priceType:"Limit",
          details:false,
          cancelOrder:false,
          editOrder:false,
          editCancelBtns:false,
          clicked: false,
        },
        
      ],
    }
  },
  computed: {

  },
  mounted () {
  

  },
  methods: {
    successFunc(){
      setTimeout(() => this.successMsg = false, 2000);
    }
  }
}


