
import Portfolioholdings from '../portfolio-holdings/portfolio-holdings.vue';
import Portfolioopenorders from '../portfolio-open-orders/portfolio-open-orders.vue';
import Portfoliopositions from '../portfolio-positions/portfolio-positions.vue';
import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import  Buyedgecases from '../buy-edge-cases/buy-edge-cases.vue'
export default {
  name: 'portfolio-cont',
  components: {Portfolioholdings, Portfolioopenorders, Portfoliopositions, mCustomScrollBar, Buyedgecases},
  props: [],
  data () {
    return {
      activeTab: "",
    }
  },
  computed: {

  },
  mounted () {
    if(this.$refs.portfolioholdingData.HoldingTab!=undefined || this.$refs.portfolioholdingData.HoldingTab!="") {
      this.activeTab = this.$refs.portfolioholdingData.HoldingTab
    }
    console.log(this.$refs.portfolioholdingData.HoldingTab);
    var headerHgt = $('.header').outerHeight();
    console.log(headerHgt);
    var tabHeight = $('.main-nav .nav-link').outerHeight();
    console.log(tabHeight)
    //var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight ;
    var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight ;
    console.log(element_position);

    // var element_position1 = $('.positionTableWrap').offset().top;
    // console.log(element_position1);
    $(".openOrderTabContent").mCustomScrollbar({
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
  /*Switch change*/
  $(".main-nav .nav-item:nth-child(1) .nav-link").on('shown.bs.tab', function() {
    $('.stickyTabWrap').removeClass('stickyTop');
  });
    $(".main-nav .nav-item:nth-child(2) .nav-link").on('shown.bs.tab', function() {
      var headerHgt = $('.header').outerHeight();
      var tabHeight = $('.main-nav .nav-link').outerHeight();
      var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight  ;
      console.log(element_position);
      var element_position1 = $('.positionTableWrap').offset().top - headerHgt - tabHeight;
     
      $('.stickyTabWrap').removeClass('stickyTop');
      $(".positionTabContent").mCustomScrollbar({
        alwaysShowScrollbar: 0,
        callbacks:{
          whileScrolling:function(){
              myCustomFn1(this);
          },
          onInit:function(){
           // console.log("Scrollbars initialized");
            myCustomFn1(this);
          }
      }
      });
      function myCustomFn1(el){
        var value = Math.abs(el.mcs.top);
      //  console.log(value);
        if(value > element_position1){
          console.log('abc')
          $('.stickyTabWrap').addClass('stickyTop');
        }
        else{
         $('.stickyTabWrap').removeClass('stickyTop');
        }
      
    }
   
      
    })
   
    
    // $(".main-nav .nav-item:nth-child(3) .nav-link").on('shown.bs.tab', function() {
    //   var headerHgt = $('.header').outerHeight();
    //   var tabHeight = $('.main-nav .nav-link').outerHeight();
    //   var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight  ;
    //   console.log(element_position);
    //   var element_position2 = $('.holding-article').offset().top - headerHgt - tabHeight ;
    //   console.log("pos2", element_position2);
    //   $(".portfolio-holdings_tab").mCustomScrollbar({
    //     alwaysShowScrollbar: 0,
    //     //mouseWheelPixels: 200,
    //     callbacks:{
    //       whileScrolling:function(){
    //         holdingArticle(this);
    //       },
    //       onInit:function(){
    //         holdingArticle(this);
    //       }
    //     }
    //   });
  
    //   function holdingArticle(el){
    //      var value = Math.abs(el.mcs.top);
    //      console.log("1",value)
    //      if(value > element_position2){
    //        $('.holding-article').addClass('stickyTop');
    //      }
    //      else{
    //       $('.holding-article').removeClass('stickyTop');
    //      }
    //   }
    // })
      /*Switch change*/
  },
  methods: {

  }
}


