import $ from 'jquery';
import Portfolioclosedpositions from '../../components/portfolio-closed-positions/portfolio-closed-positions.vue'
export default {
  name: 'portfolio-positions',
  components: {Portfolioclosedpositions},
  props: [],
 
  data () {
    return {
      priceType:"Limit",
      investmentType: 'Intraday',
      squareoffSuccessMsg:false,
      positionMain:true,
      closedPosition: false,
      positionLists:[
        {
          id:1,
          name:"HEROMOTOCORP",
          exchange:"NSEFO",
          compName:"31 Mar 2020 CE1400",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:10,
          qtyType:"Lot",
          atp:"21074.50",
          orderType:"Intraday",
          gainLossVal:'+21074.50',
          gainLossType: "positive",
          marketVal:'1.3L',
          details:false,
          actionBtns:false,
          clicked: false,
          squareoffOrder:false,
          convertInvestmentType:false,
          editCancelBtns:false,
        },
        {
          id:2,
          name:"SBIN",
          exchange:"NSE",
          compName:"State Bank of India",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:100,
          qtyType:"Shares",
          atp:"21074.50",
          orderType:"Margin",
          gainLossVal:'+21074.50',
          gainLossType: "positive",
          marketVal:'1.3L',
          details:false,
          actionBtns:false,
          clicked: false,
          squareoffOrder:false,
          convertInvestmentType:false,
          editCancelBtns:false,
        },
        {
          id:3,
          name:"TATAMOTORS",
          exchange:"NSE",
          compName:"31 Mar 2020",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:100,
          qtyType:"Shares",
          atp:"21074.50",
          orderType:"Delivery",
          gainLossVal:'+21074.50',
          gainLossType: "positive",
          marketVal:'1.3L',
          details:false,
          actionBtns:false,
          clicked: false,
          squareoffOrder:false,
          convertInvestmentType:false,
          editCancelBtns:false,
        },
        {
          id:4,
          name:"USDINR",
          exchange:"NSE",
          compName:"31 Mar 2020",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:100,
          qtyType:"Shares",
          atp:"21074.50",
          orderType:"Intraday",
          gainLossVal:'+21074.50',
          gainLossType: "positive",
          marketVal:'1.3L',
          details:false,
          actionBtns:false,
          clicked: false,
          squareoffOrder:false,
          convertInvestmentType:false,
          editCancelBtns:false,
        },
        {
          id:5,
          name:"COPPER",
          exchange:"NSE",
          compName:"31 Mar 2020",
          price:1074.50,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:10,
          qtyType:"Lot",
          atp:"21074.50",
          orderType:"Margin",
          gainLossVal:'+21074.50',
          gainLossType: "positive",
          marketVal:'1.3L',
          details:false,
          actionBtns:false,
          clicked: false,
          squareoffOrder:false,
          convertInvestmentType:false,
          editCancelBtns:false,
        },
        
      ],
    }
  },
  computed: {
    
  },
  mounted () {
    $('.butBuyMore').click(function(){
      $(this).parents('body').find('.buySideBar').show();
      $(this).parents('body').find('.main-content').addClass('leftPosition');
      $(this).parents('body').find('.side-section').addClass('hideSection');
     })

    
  },
  methods: {
    successMsg(){
      setTimeout(() => this.squareoffSuccessMsg = false, 2000);
    },
    showDetail(){
      this.positionMain= false,
      this.closedPosition = true
    }

  }
}


