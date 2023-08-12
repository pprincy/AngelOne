import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
export default {
  name: 'portfolio-closed-positions',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      positionLists:[
        {
          id:1,
          name:"HEROMOTOCORP",
          compName:"31 Mar 2020 CE1400",
          orderType:"Normal Order",
          qtyAmount:100,
          qtyType:"Shares",
          buyPrice:2393.60,
          buyAvgPer:'(+52.60)',
          sellPrice:2393.20,
          gainLossVal:'+12435.50',
          gainLossType: "positive",
          priceType:"positive",
         
        },
        {
          id:2,
          name:"HEROMOTOCORP",
          compName:"31 Mar 2020 CE1400",
          orderType:"Normal Order",
          qtyAmount:100,
          qtyType:"Shares",
          buyPrice:2393.60,
          buyAvgPer:'(+52.60)',
          sellPrice:2393.20,
          gainLossVal:'+12435.50',
          gainLossType: "negative",
          priceType:"positive",
         
        },
        {
          id:3,
          name:"HEROMOTOCORP",
          compName:"31 Mar 2020 CE1400",
          orderType:"Normal Order",
          qtyAmount:100,
          qtyType:"Shares",
          buyPrice:2393.60,
          buyAvgPer:'(+52.60)',
          sellPrice:2393.20,
          gainLossVal:'+12435.50',
          gainLossType: "positive",
          priceType:"positive",
         
        },
        {
          id:4,
          name:"HEROMOTOCORP",
          compName:"31 Mar 2020 CE1400",
          orderType:"Normal Order",
          qtyAmount:100,
          qtyType:"Shares",
          buyPrice:2393.60,
          buyAvgPer:'(+52.60)',
          sellPrice:2393.20,
          gainLossVal:'+12435.50',
          gainLossType: "negative",
          priceType:"positive",
        },
       
        
      ],
    }
  },
  computed: {

  },
  mounted () {
    var headerHgt = $('.header').outerHeight();
    console.log(headerHgt);
    var tabHeight = $('.sec_title_wrap').outerHeight() + $('.realisedGainSec').outerHeight();
    console.log(tabHeight)
    //var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight ;
    var element_position = $('.closeOrderPositionTable').offset().top - headerHgt - tabHeight ;
    console.log(element_position);
    $(".closeOrderPositionTable").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      callbacks:{
        whileScrolling:function(){
            myCustomFn(this);
        },
        onInit:function(){
         // console.log("Scrollbars initialized");
          myCustomFn(this);
        }
    }
    });
    function myCustomFn(el){
       var value = Math.abs(el.mcs.top);
     //  console.log(value);
       if(value > element_position){
         console.log('abc')
         $('.stickyTabWrap').addClass('stickyTop');

       }
       else{
        $('.stickyTabWrap').removeClass('stickyTop');
       }
     
  }
  },
  methods: {

  }
}


