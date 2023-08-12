import $ from 'jquery';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
import slickCarousal from 'slick-carousel';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js';
import floatThead from 'floatthead';
import Watchlistfundamental from '../watchlist-fundamental/watchlist-fundamental.vue'
import Derivatives from '../derivatives/derivatives.vue';

//import  Buyedgecases from '../buy-edge-cases/buy-edge-cases.vue'
//import mitt from 'mitt'
//Fundamentalvaluation
//const emitter = mitt()
export default {
  name: 'company-details',
  components: {slickCarousal, mCustomScrollBar, floatThead, Watchlistfundamental , Derivatives  },
  //props: ["companyDetails"],
  props: {
    companyDetails: {
          type: Boolean,
          default: true,
        },
    },
  data () {
    return {
     // propVal:this.companyDetails,
      sellError:false,
      searcgNoResult:false,
     // optionStockAction:false,
      //addToWatchlist:false,
      lcluclLow : 1401.60,
      lcluclHigh : 1527.60,
      weekHigh :7896.20,
      weekLow : 2000.10,
      removeMsg:false,
      addMsg:false,
      tblselectedItems: [],
      buyContainer:false,
      selectedCheck: undefined,
      
      
      
      marketDetail:[
        {
          name:"O",
          value: 1453.90,
        },
        {
          name:"H",
          value: 1501.52,
        },
        {
          name:"L",
          value: 1453.10,
        },
        {
          name:"C",
          value:1498.53 ,
        },
        {
          name:"VOL",
          value: 1498.53,
        },
        {
          name:"ATP",
          value: 72498.53,
        },
      ],

      chartNav:[
        {
          id:1,
          name:"Overview"
        },
        {
          id:2,
          name:"Technical"
        },
        {
          id:3,
          name:"Derivatives"
        },
        {
          id:4,
          name:"Fundamental"
        },
        {
          id:5,
          name:"Option Chain"
        },
      ],
      recentNews:[
        {
          id:1,
          figurePath:require('../../assets/images/recent-news1.jpg'),
          status:'+ POSITIVE',
          ttl:"Stocks in the news | Kotak Bank, TCS, PNC Infra, Muthoot Finance…",
          time:'23 mins ago',
          newsFrom:'Ecomonic Times'
        },
        {
          id:2,
          figurePath:require('../../assets/images/recent-news1.jpg'),
          status:'- NEGATIVE',
          ttl:"Gayatri Projects shares locked at 5% upper circuit on order win worth….",
          time:'23 mins ago',
          newsFrom:'Ecomonic Times'
        },
        {
          id:3,
          figurePath:require('../../assets/images/recent-news1.jpg'),
          status:'neutral',
          ttl:"Stocks in the news | Kotak Bank, TCS, PNC Infra, Muthoot Finance…",
          time:'23 mins ago',
          newsFrom:'Ecomonic Times'
        },
        {
          id:4,
          figurePath:require('../../assets/images/recent-news1.jpg'),
          status:'- NEGATIVE',
          ttl:"Gayatri Projects shares locked at 5% upper circuit on order win worth….",
          time:'23 mins ago',
          newsFrom:'Ecomonic Times'
        },
        {
          id:5,
          figurePath:require('../../assets/images/recent-news1.jpg'),
          status:'+ POSITIVE',
          ttl:"Stocks in the news | Kotak Bank, TCS, PNC Infra, Muthoot Finance…",
          time:'23 mins ago',
          newsFrom:'Ecomonic Times'
        },
        {
          id:6,
          figurePath:require('../../assets/images/recent-news1.jpg'),
          status:'- NEGATIVE',
          ttl:"Gayatri Projects shares locked at 5% upper circuit on order win worth….",
          time:'23 mins ago',
          newsFrom:'Ecomonic Times'
        },
      ],
      securityInfo:[
        {
          id:1,
          ttl:"SYMBOL",
          val:"RELIANCE"
        },
        {
          id:2,
          ttl:"LOT SIZE",
          val:1
        },
        {
          id:3,
          ttl:"FREEZE(%)",
          val:0.15
        },
        {
          id:4,
          ttl:"QTY UNITS",
          val:"-"
        },
        {
          id:5,
          ttl:"Price Units",
          val:"-"
        },
        {
          id:6,
          ttl:"TICKET SIZE(PAISE)",
          val:5
        },
        {
          id:7,
          ttl:"EXCHANGE",
          val:"NSE"
        },
        {
          id:8,
          ttl:"FACE VALUE",
          val:10.00
        },
        {
          id:9,
          ttl:"OI",
          val:161755
        },
        {
          id:10,
          ttl:"OI(%)",
          val:"-"
        },
        {
          id:11,
          ttl:"DELIVERY UNIT",
          val:0.15
        },
        {
          id:12,
          ttl:"MAX ORDER SIZE",
          val:95088
        },
        {
          id:13,
          ttl:"PRICE NOMINATOR",
          val:1
        },
        {
          id:14,
          ttl:"Price Denominator",
          val:1
        },
        {
          id:15,
          ttl:"PRICE QUOTATION",
          val:0
        },
        {
          id:16,
          ttl:"MATURITY DATE",
          val:"-"
        },
        {
          id:17,
          ttl:"INSTRUMENT TYPE",
          val:"-"
        },
      ],
      similarStockLists:[
      
        {
          id:1,
          name:"HEROMOTOCORP",
          exchange:"NSE",
          compName:"Hero Motorcorp Ltd",
          price:"3172.05",
          chg:"35.70",
          per:"1.14",
          shareVal:"positive",
        
        },
        {
          id:2,
          name:"TATAMOTORS",
          exchange:"NSE FO",
          compName:"Tata Motors Ltd",
          price:"3172.05",
          chg:"35.70",
          per:"1.14",
          shareVal:"negative",
        },
        {
          id:3,
          name:"MRF",
          exchange:"NSE",
          compName:"Hero Motorcorp Ltd",
          price:"3172.05",
          chg:"35.70",
          per:"1.14",
          shareVal:"negative",
        },
        {
          id:4,
          name:"RELIANCE",
          exchange:"NSE",
          compName:"Hero Motorcorp Ltd",
          price:"3172.05",
          chg:"35.70",
          per:"1.14",
          shareVal:"positive",
        
        },
      ],
      bidPrices:[
        {
          id:1,
          qty:5,
          price:1486.88
        },
        {
          id:2,
          qty:35,
          price:1486.88
        },
        {
          id:3,
          qty:400,
          price:1486.88
        },
        {
          id:4,
          qty:40,
          price:1486.88
        },
        {
          id:5,
          qty:1,
          price:1486.88
        },
      ],
      askPrices:[
        {
          id:1,
          qty:5,
          price:1486.88
        },
        {
          id:2,
          qty:30,
          price:1486.88
        },
        {
          id:3,
          qty:200,
          price:1486.88
        },
        {
          id:4,
          qty:29,
          price:1486.88
        },
        {
          id:5,
          qty:1,
          price:1486.88
        },
      ],
      stockPerformance:[
        {
          id:1,
          ttl:"1 YEAR RETURN",
          stockval:"NA",
          status:'POSITIVE',
          mainTtl:"Financial Trends",
          mainStatus:'Negative',
          icon:'icon-rupee'
        },
        {
          id:2,
          ttl:"SHORT TERM",
          stockval:"MILDLY NEGATIVE",
          status:'negative',
          mainTtl:"Quality",
          mainStatus:'Excellent',
          icon:'customShield'
        },
        {
          id:3,
          ttl:"LONG TERM",
          stockval:"Very Positive",
          status:'positive',
          mainTtl:'Valuation',
          mainStatus:'Very attractive',
          icon:'customDiamond'
        },

      ],
      watchList:[
        {
          id:1,
          name:"Watchlist",
          stockNo:20
        },
        {
          id:2,
          name:"Watchlist",
          stockNo:20
        }
      ],
      optionChainTableList:[
        {
          id:1,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:-4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"+15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:"+6.98",
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"+58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:2,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"negative",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:6.98,
          rightOlPerChgeColStatus:"negative",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"negative",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:3,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:4,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:5,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:6,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:7,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:8,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:9,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        },
        {
          id:10,
          leftdeltaCol:0.098,
          leftthetaCol:-3.76,
          leftgamaCol:0.001,
          leftvegaCol:4.90,
          leftivCol:5724,
          leftvolCol:786,
          leftpriceChangeCol:12.70,
          leftolChangeCol:5724,
          leftOlPerChgeColPrice:"20.7L",
          leftOlPerChgeColPer:4.43,
          leftOlPerChgeColStatus:"negative",
          leftltpChangeCoPrice:"28.56",
          leftltpChangeColPer:"15.44",
          leftltpChgeColStatus:"positive",
      
          strikeCol:3500,
          
          rightdeltaCol:0.097,
          rightthetaCol:-1.09,
          rightgamaCol:0.001,
          rightvegaCol:0.09,
          rightivCol:5724,
          rightvolCol:'17.34K',
          rightpriceChangeCol:101.89,
          rightolChangeCol:4554,
          rightOlPerChgeColPrice:"12246",
          rightOlPerChgeColPer:.98,
          rightOlPerChgeColStatus:"positive",
          rightltpChangeCoPrice:"730.25",
          rightltpChangeColPer:"58.924",
          rightltpChgeColStatus:"positive",
          addToWatchlist:false,
          optionStockAction:false,
        }

      ],
      openTabBtn:true,
      firstActive:false,
      secondActive:false,
      thirdActive:false,
      forthActive:false,
      fifthActive:false,

    }
  },
  computed: {
 
  bidTotalRequest() {
    return this.bidPrices.reduce((acc, item) => acc + item.qty, 0);
  },
  askTotalRequest() {
    return this.askPrices.reduce((acc, item) => acc + item.qty, 0);
  },
  
  },
  mounted () {
    console.log("parent", this.$parent)
    console.log("prop", this.companyDetails);
    
    $(".lclUclSlider").ionRangeSlider({
      //type: "double",
      min: 1401.60,
      max: 1527.60,
      from: 1490,
      grid: false,
      onChange:  function (data) {
        if(data.from_percent < 33){
          console.log('low');
          $('.lclUclSliderWrap').addClass('lower');
          $('.lclUclSliderWrap').removeClass('higher');
        }
        else if(data.from_percent > 66){
          console.log('high')
          $('.lclUclSliderWrap').removeClass('lower');
          $('.lclUclSliderWrap').addClass('higher');
        }
        else{
          $('.lclUclSliderWrap').removeClass('lower');
          $('.lclUclSliderWrap').removeClass('higher');
        }
      },
      onStart: function (data) {
        if(data.from_percent < 33){
          console.log('low');
          $('.lclUclSliderWrap').addClass('lower');
          $('.lclUclSliderWrap').removeClass('higher');
        }
        else if(data.from_percent > 66){
          console.log('high')
          $('.lclUclSliderWrap').removeClass('lower');
          $('.lclUclSliderWrap').addClass('higher');
        }
        else{
          $('.lclUclSliderWrap').removeClass('lower');
          $('.lclUclSliderWrap').removeClass('higher');
        }
      }
  });
  $(".highLowSlider").ionRangeSlider({
    //type: "double",
    min:2000.10 ,
    max: 7896.20,
    from: 7300,
    grid: false,
    onChange:  function (data) {
      if(data.from_percent < 33){
        console.log('low');
        $('.highLowSliderWrap').addClass('lower');
        $('.highLowSliderWrap').removeClass('higher');
      }
      else if(data.from_percent > 66){
        console.log('high')
        $('.highLowSliderWrap').removeClass('lower');
        $('.highLowSliderWrap').addClass('higher');
      }
      else{
        $('.highLowSliderWrap').removeClass('lower');
        $('.highLowSliderWrap').removeClass('higher');
      }
    },
    onStart: function (data) {
      if(data.from_percent < 33){
        console.log('low');
        $('.highLowSliderWrap').addClass('lower');
        $('.highLowSliderWrap').removeClass('higher');
      }
      else if(data.from_percent > 66){
        console.log('high')
        $('.highLowSliderWrap').removeClass('lower');
        $('.highLowSliderWrap').addClass('higher');
      }
      else{
        $('.highLowSliderWrap').removeClass('lower');
        $('.highLowSliderWrap').removeClass('higher');
      }
    }
});
    $('.variable-width-carousel').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      outerEdgeLimit: true,
    });
    var $slick_slider = $('.price-summary-carousal');
$slick_slider.on('afterChange', function (e, slick) {
var lElRect = slick.$slides[slick.slideCount - 1].getBoundingClientRect();
console.log("1",lElRect)
var rOffset = lElRect.x + lElRect.width;
console.log("2",rOffset)

var wraRect = $('.slick-list', $slick_slider).get(0).getBoundingClientRect();
console.log("3", wraRect)
console.log("4", (wraRect.x + wraRect.width))
if (rOffset < (wraRect.x + wraRect.width)) {
$('.slick-next', $slick_slider).addClass('slick-disabled');
}
});

var $slick_slider1 = $('.recent-news-carousal');
$slick_slider1.on('afterChange', function (e, slick) {
  var lElRect = slick.$slides[slick.slideCount - 1].getBoundingClientRect();
  console.log("1",lElRect)
  var rOffset = lElRect.x + lElRect.width;
  console.log("2",rOffset)
  
  var wraRect = $('.slick-list', $slick_slider1).get(0).getBoundingClientRect();
  console.log("3", wraRect)
  console.log("4", (wraRect.x + wraRect.width))
  if (rOffset < (wraRect.x + wraRect.width)) {
  $('.slick-next', $slick_slider1).addClass('slick-disabled');
  }
  });
  

    // $(".tab-wrap .nav-tabs .nav-item .nav-link").on('shown.bs.tab', function() {
    //   $(this).parents('.chart-info-wrap').find('.chart-top-info').removeClass('open');
     
    //   $('.close-tab').show();
    //   $('.open-tab').hide();
    //   var headerHeight = $('.header').height();
    //   var winHeight = $(window).height() - headerHeight ;
    //   var mainheight = $('.main-content-in').outerHeight() - headerHeight;
      
    //   if(winHeight <= mainheight ){
    //     console.log("abc")
    //     $(".main-content").mCustomScrollbar({
    //         alwaysShowScrollbar: 0,
    //     });
        
    //   }
    //   else{
    //    // $(".main-content").mCustomScrollbar("destroy");
    //   }
      
      
    // });
    var noTr = $('.optionChainTblWrap .table_body_wrap tr').length;
    var halfTr= noTr/2
    var halftr1 = (Math.round(halfTr));
    console.log("trlenght" , halftr1);
    $(".optionChainTblWrap .table_body_wrap  .table tr:nth-child(" + halftr1 + ")").after('<tr class="strike-price-row" id="strike-price"><td></td></tr>');
     $('.strike-price-sec').clone().appendTo(".strike-price-row td")  
     $( "tr.strike-price-row" ).nextAll().addClass('bottomTr');
    $('.expand-view-btn.open-tab').click(function(){
      // $(this).parents('.chart-info-wrap').find('.chart-top-info').removeClass('open');
      // $('.chart-info-wrap .tab-wrap .nav-tabs .nav-item:first-child .nav-link').addClass('active')
      // $(this).parents('.chart-info-wrap').find('#chartsec1').tab('show');
      // $(this).parents('.chart-info-sec').addClass('active');
      // $(this).hide();
      // $(this).siblings('.close-tab').show();
      // $('.chart-show-btn').show();
      $(".chart-info-wrap .tab-wrap   .tab-content-in").mCustomScrollbar({
            alwaysShowScrollbar: 0,
        });
    })
    $('.nav-tabs .nav-item .nav-link').click(function(){
      $(".tab-wrap   .tab-content-in").mCustomScrollbar({
            alwaysShowScrollbar: 0,
        });
        $('.table_body_wrap').removeClass('stickyTop');
        $('.table_body_wrap').removeClass('stickyBtm');
        $(".table_body_wrap").mCustomScrollbar({
          callbacks: {
            whileScrolling: function () {
              stickyfn(this);
            },
            onInit: function () {
              stickyfn(this);
            }
          }
        
      }).mCustomScrollbar("scrollTo","50%",{scrollInertia:0});
      var headHght = $('.header').outerHeight();
      var topCont =$('.top-content').outerHeight() + 4;
      var navHgt =$('.chart_nav').outerHeight() + 4;
      var optTop =$('.option-chain-top-sec').outerHeight() ;
      var tbleHead =$('.optionChainTblWrap .table_head_wrap').outerHeight() ;
      var topPos = $('.strike-price-row').offset().top;
      var topPos1 = topPos - headHght - topCont - navHgt - optTop - tbleHead;

      var scrollHgt = $('#optionChain').outerHeight()  ;
      var elHgt = $(".strike-price-row").outerHeight() ;
      var elHgt1 = (scrollHgt - elHgt);
      var elHgt2 = (topPos1 - elHgt1);
      function stickyfn(el) {
        var value = Math.abs(el.mcs.top);
        if (value > topPos1) {
          console.log("down");
          $('.table_body_wrap').addClass('stickyTop');
        } else {
          console.log("up");
         $('.table_body_wrap').removeClass('stickyTop');
        }
        if (value < elHgt2) {
          $('.table_body_wrap').addClass('stickyBtm');
         }
         else{
          $('.table_body_wrap').removeClass('stickyBtm');
         }
      }
      
      $('.toDownArrow, .toUpArrow').click(function(){
        $(".table_body_wrap").mCustomScrollbar({
          callbacks: {
            whileScrolling: function () {
              stickyfn(this);
            },
            onInit: function () {
              stickyfn(this);
            }
          }
        
      }).mCustomScrollbar("scrollTo","50%",{scrollInertia:0});
      });
        
    })
    $('.expand-view-btn.close-tab , .chart-show-btn').click(function(){
      // $(this).parents('.chart-info-wrap').find('.chart-top-info').addClass('open');
      // $('.chart-info-wrap .tab-wrap .nav-tabs .nav-item:first-child .nav-link').removeClass('active');
      // $(this).parents('.chart-info-sec').removeClass('active');
      // //$('#chartsec1').tab('hide');
      // $(this).parents('.chart-info-wrap').find('.tab-pane').removeClass('active')
      // $(this).parents('.chart-info-wrap').find('.nav-tabs .nav-item .nav-link').removeClass('active');
      // $(this).hide();
      // $('.expand-view-btn.open-tab').show();
      // $('.expand-view-btn.close-tab').hide();
      $(".chart-info-wrap .tab-wrap   .tab-content-in").mCustomScrollbar({
            alwaysShowScrollbar: 0,
        });
      
    })
    $('.option-chain-sec select').selectpicker();
    $(".select-date .bootstrap-select div.dropdown-menu ").mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });

    
   // $('.bootstrap-select .dropdown-menu ')

  // $('.show-call-sec').click(function(){
    $(document).on('click', '.show-call-sec', function(){ 
    // alert("hid")
      $(this).parents('.optionChainTblWrap').removeClass('hideCall');
      $(this).parents('.optionChainTblWrap').addClass('hidePut');
      $(this).hide();
      $('.put-sec').find('.show-call-put-sec').show();
      $(this).siblings('.show-call-put-sec').hide();
   })
   //$('.show-put-sec').click(function(){
    $(document).on('click', '.show-put-sec', function(){ 
    $(this).parents('.optionChainTblWrap').removeClass('hidePut');
    $(this).parents('.optionChainTblWrap').addClass('hideCall');
    $(this).hide();
    $('.call-sec').find('.show-call-put-sec').show();
    $(this).siblings('.show-call-put-sec').hide();
  
  });
  //$('.show-call-put-sec').click(function(){
    $(document).on('click', '.show-call-put-sec', function(){ 
    $(this).parents('.optionChainTblWrap').removeClass('hidePut');
    $(this).parents('.optionChainTblWrap').removeClass('hideCall');
    $(this).parents('.optionChainTblWrap').addClass('showCallPut');
    $(this).hide();
    $('.show-call-sec').show();
    $('.show-put-sec').show();
  });
 

//   var topHgt = $('.top-content').outerHeight();
//   var navHgt = $('.chart_nav').outerHeight();
//   var headerHgt = $('.header').outerHeight();
//   var tblHgt = topHgt  + headerHgt + navHgt + 57 + 38 + 8;
//   console.log("tblHght", tblHgt)
//   var tblHgt1 = $(window).height() - tblHgt;
// $('.table_body_wrap').css("max-height",  tblHgt1);
// $('.no-result-found').css("min-height",  tblHgt1);



// $(window).resize(function(){
//   var topHgt = $('.top-content').outerHeight();
//   var navHgt = $('.chart_nav').outerHeight();
//   var headerHgt = $('.header').outerHeight();
//   var tblHgt = topHgt  + headerHgt + navHgt + 57 + 38 + 8;
//   var tblHgt1 = $(window).height() - tblHgt;
// $('.table_body_wrap').css("max-height",  tblHgt1);
// $('.no-result-found').css("min-height",  tblHgt1);
// })

//  $(".table_body_wrap").mCustomScrollbar({
//   alwaysShowScrollbar: 0,
 
//   callbacks:{
//     // onInit:function(){
//     //   $(this).data("mCS").opt.callbacks.onTotalScrollOffset=Math.abs(this.mcs.content.innerHeight()-($(".strike-price-row").position().top+$(".strike-price-row").outerHeight(true)));
//     // },
//     // onTotalScroll:function(){ /* your callback */ },

//     onInit: function(){

//     },
//     whileScrolling: function(){
//       var x = $('.strike-price-row').offset().top;
//       var y = $('.table_body_wrap .table_wrap').offset().top;
//      // console.log(x)
//       //console.log(y)
//       var z =  x - y;
//       var znew = z + 80;
//       var z1 = -Math.abs(z);
//       var znew1 = -Math.abs(znew);
//       //var z2 = z1 + -80
//       console.log(znew1);
//    // console.log(z)
//    // console.log(z1);
//     console.log(this.mcs.top );
//       if(this.mcs.top < z1){
//        console.log("123")
//       }
//       if(this.mcs.bottom < z1){
//         console.log("333")
//        }
//       // if(this.mcs.top > znew1){
//       //   console.log("wwww")
//       //  }
      
//     // $(this).on('mousewheel', function(e){
//     //   console.log("13333435")
//     //   if(e.originalEvent.wheelDelta > 0) {
//     //       console.log('upppp');
//     //   }
//     //   else {
//     //       console.log('downnnn');
//     //   }
//     // })
      
//     },
//     alwaysTriggerOffsets:false
//   }

// });
// $(".table_body_wrap").mCustomScrollbar({})
// $('.table_body_wrap').mCustomScrollbar({});


// $('.table_body_wrap').mCustomScrollbar({
//  // theme: 'minimal-dark'
// });



// $('.table_body_wrap .table_wrap').on('mousewheel', function(e){
//   if(e.originalEvent.wheelDelta > 0) {
//       console.log('up 3');
//     //   $('.strike-price-row').waypoint(function() {
//     //     alert('You have scrolled to an entry.');
//     // }, {
//     //     offset: '100%'
//     // });
//   }
//   else {
//       console.log('down 3');
//   }
// });

$(".tab-wrap   .tab-content-in").mCustomScrollbar({
  alwaysShowScrollbar: 0,
  callbacks: {
    whileScrolling: function () {
      myCustomFn(this);
    },
    onInit: function () {
      myCustomFn(this);
    }
  }

}); 


function myCustomFn(el) {
  var value = Math.abs(el.mcs.top);
  //console.log("val3", value)
  //var element_position = $('.visibleContent .table-wrapper').offset().top;
  //console.log("pos1", element_position)
  if (value > 100) {
    //$('.stickyTabWrap').addClass('stickyElement');
    console.log("down");
    $('.chart-show-btn').addClass('sm');

  } else {
    //$('.stickyTabWrap').removeClass('stickyElement');
    console.log("up");
    $('.chart-show-btn').removeClass('sm');
  }

}
 
  var $table = $('.table_wrap .table');
      $table.floatThead({
          scrollContainer: function($table){
              return $table.closest('.table_wrap');
          }
    });

    
    
    var lclmin = this.lcluclLow;
    var lclmax = this.lcluclHigh;
   var lcluclPer = lclmin / lclmax * 100;
   
   if(lcluclPer < 16.666){
    $('.lcl-ucl .static-range-bar-wrap').addClass('vlow');
   }
   else if(lcluclPer <= 16.666 && lcluclPer < 33.332){
    $('.lcl-ucl .static-range-bar-wrap').addClass('low')
   }
   else if(lcluclPer <= 33.332 && lcluclPer < 49.998){weekPer
    $('.lcl-ucl .static-range-bar-wrap').addClass('med1');
   }
   else if(lcluclPer <= 49.998 && lcluclPer < 66.664){
    $('.lcl-ucl .static-range-bar-wrap').addClass('med2');
   }
   else if(lcluclPer <= 66.664 && lcluclPer < 83.33){
    $('.lcl-ucl .static-range-bar-wrap').addClass('high')
   }
   else{
    $('.lcl-ucl .static-range-bar-wrap').addClass('vhigh')
   }

    $('.lcl-ucl .static-range-bar-wrap .range-pointer').css("left", lcluclPer +'%');


    var weekmin = this.weekLow;
    var weekmax = this.weekHigh;
   var weekPer = weekmin / weekmax * 100;
   
   if(weekPer < 16.666){
    $('.week .static-range-bar-wrap').addClass('vlow');
   }
   else if(weekPer <= 16.666 && weekPer < 33.332){
    $('.week .static-range-bar-wrap').addClass('low')
   }
   else if(weekPer <= 33.332 && weekPer < 49.998){
    $('.week .static-range-bar-wrap').addClass('med1');
   }
   else if(weekPer <= 49.998 && weekPer < 66.664){
    $('.week .static-range-bar-wrap').addClass('med2');
   }
   else if(weekPer <= 66.664 && weekPer < 83.33){
    $('.week .static-range-bar-wrap').addClass('high')
   }
   else{
    $('.week .static-range-bar-wrap').addClass('vhigh')
   }

    $('.week .static-range-bar-wrap .range-pointer').css("left", weekPer +'%');

    $('.optionChain-watchlist .check-list input:checkbox').click(function(){
      var $inputs = $('input:checkbox')
          if($(this).is(':checked')){
            alert("checked")
             $inputs.not(this).prop('disabled',true); // <-- disable all but checked one
              $(this).parents('.optionChain-watchlist').find('.addDoneBtn').removeClass('disabled');
              $(this).parents('.optionChain-watchlist').find('.addDoneBtn').show();
              $(this).parents('.optionChain-watchlist').find('.removeDoneBtn').hide()
          }else{
            alert("unchecked")
             $inputs.prop('disabled',false); 
             $(this).parents('.optionChain-watchlist').find('.addDoneBtn').hide();
             $(this).parents('.optionChain-watchlist').find('.removeDoneBtn').show().removeClass('disabled');
          }
      })

      // this.$root.$on('msgFromAbc' , () => {
      //   console.log("called from buy abc");
      // })
   
      // emitter.emit('foo', { a: 'b' })
       $('.buyBtn').click(function(){
        $(this).parents('body').find('.buySideBar').show();
        $(this).parents('body').find('.main-content').addClass('leftPosition');
        $(this).parents('body').find('.watchlist-side-section').addClass('withShadow');
        // $(this).parents('body').find('.side-section').addClass('hideSection');
        $(this).parents('body').find('.side-section .btn-sideToggle').addClass('enableSliding');
        // $('.watchlist-side-section').css("border-right", "2px solid #e0e0ea");
        $('.tab-active:first').css('border-right', '1px solid black');
        $(".buySideBar").css({"left":"auto","right":"5.688rem"});
        $('.more-horizontal').css("display","none");
       })

        //responsive
    $('.compony-main-content').parents('body').addClass('dashboard-page');
    var mobClick = function() {
      var ww = $(window).width();
      if (ww < 992) {
        $(".chart-info-sec .chart_nav .nav-tabs .nav-item:first-child .nav-link").click()
      } 
    };
    $(window).resize(function(){
      mobClick();
    });
    
    mobClick();
    $('.mob-expand-view-btn').click(function(){
      $(this).toggleClass('open');
      $('.compony-main-content').toggleClass('chartOpen');
    })

     $('.drop-cnt select').selectpicker({ });

    // $('.btn-back').click(function(){
    //   $(this).parents('.main-content').removeClass('visibleMob');
    //   $(this).parents('body').find('.watchlist-side-section').removeClass('hideThisSec');
    // })

    $(".scrolldiv").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      //autoScrollOnFocus: true,
     
    });
  },


  methods: {
    // optionChainCall(){
    //   alert()
    //   var x = $('.strike-price-row').offset().top;
    //   var y = $('.table_body_wrap .table_wrap').offset().top;
    //   console.log(x)
    //   console.log(y)
    // },
    sellErrorFunc(){
      this.sellError= true
    },
    searchAddtoWatchlist(ev, id){
      console.log(id)
      this.optionChainTableList[id - 1 ].activeClass = ! this.optionChainTableList[id - 1 ].activeClass
     if(this.optionChainTableList[id - 1 ].activeClass == true){
       // this.addToWatchlist = true
       //console.log(this.optionChainTableList[id - 1 ].addToWatchlist);
        this.optionChainTableList[id - 1 ].addToWatchlist = true
        console.log(this.optionChainTableList[id - 1 ].addToWatchlist);
     }
     else{
     // this.addToWatchlist = false
     this.optionChainTableList[id - 1 ].addToWatchlist = false
     }
     // this.addToWatchlist = !this.addToWatchlist
      // this.ttl = this.optionChainTableList[id - 1 ].name
      //console.log(this.ttl)
    },
    addFunc(id){
      console.log("abc")
      this.addMsg = true;
      this.removeMsg = false;
     // this.optionChainTableList[id - 1 ].activeClass == false
       this.optionChainTableList[id - 1 ].addToWatchlist = false
    },
    removeFunc(id){
      this.removeMsg = true;
      this.addMsg = false;
      //this.optionChainTableList[id - 1 ].activeClass == false
       this.optionChainTableList[id - 1 ].addToWatchlist = false
     
    },
    // hoverOutTimeout(){
    //   console.log("abc")
    //   this.optionStockAction = false
    // }
    buyFunc(){
     // this.buyContainer = true
     //this.emitter.emit("toggle-sidebar", this.sidebarOpen);
    
    },
    openTab(){
      this.openTabBtn = false,
      this.firstActive = true,
      this.secondActive = false,
      this.thirdActive = false,
      this.forthActive = false,
      this.fifthActive = false
    },
    openTab2(){
      this.openTabBtn = false,
      this.firstActive = false,
      this.secondActive = true,
      this.thirdActive = false,
      this.forthActive = false,
      this.fifthActive = false
     
    },
    openTab3(){
      this.openTabBtn = false,
      this.firstActive = false,
      this.secondActive = false,
      this.thirdActive = true,
      this.forthActive = false,
      this.fifthActive = false
    },
    openTab4(){
       this.openTabBtn = false,
      this.firstActive = false,
      this.secondActive = false,
      this.thirdActive = false,
      this.forthActive = true,
      this.fifthActive = false
    },
    openTab5(){
       this.openTabBtn = false,
      this.firstActive = false,
      this.secondActive = false,
      this.thirdActive = false,
      this.forthActive = false,
      this.fifthActive = true
    },
    closeTab(){
      this.openTabBtn = true,
      this.firstActive = false,
      this.secondActive= false,
      this.thirdActive = false,
      this.forthActive = false,
      this.fifthActive = false
    },
    
  }
}


