import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import Fundstabcontent from '../../components/funds-tab-content/funds-tab-content.vue'
import PledgeHolding from '../../components/pledge-holding/pledge-holding.vue';
import MTFPledge from '../../components/mtf-pledge/mtf-pledge.vue';
// import FloatLabel from 'vue-float-label/components/FloatLabel'
// import VueAutosearch from "vue-autosearch";
// import "vue-autosearch/dist/VueAutosearch.css";

export default {
  name: 'funds-summary',
  components: {
    mCustomScrollBar,
    Fundstabcontent,
    PledgeHolding,
    MTFPledge,
    
  },
  props: [],
  data() {
    return {
     
    }
  },
  computed: {

  },
  mounted() {
    var headerHgt = $('.header').outerHeight();
    var tabHgt = $('#tab-links').height() + 1;
    //console.log(headerHgt);
    //console.log(tabHgt);
    var element_position = $('.fundsBtmSec').offset().top - headerHgt - tabHgt ;
   // console.log(element_position);

     
    $(".funds-tab").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      callbacks: {
        whileScrolling: function () {
          myCustomFn(this);
        },
        onInit:function(){
          myCustomFn(this);
        }
      }
    });

    function myCustomFn(el) {
      var value = Math.abs(el.mcs.top);
      //console.log(value);
      if (value > element_position) {
        //console.log('abc')
        $('.stickyTabWrap').addClass('stickyTop');

      } else {
        $('.stickyTabWrap').removeClass('stickyTop');
      }
      
    }
    
    $(".tab-links-wrap > .nav-item:nth-child(2) > .nav-link").on('shown.bs.tab', function () {
      var headerHgt = $('.header').outerHeight();
      var tabHgt = $('#tab-links').height() + 1;
      console.log("headerHgt", headerHgt);
      console.log("tabHgt", tabHgt);
      var element_position = $('.fundsBtmSec').offset().top - headerHgt - tabHgt ;
      console.log("funds", element_position);
      var element_position1 = $('.fundsBtmSecPledge').offset().top - headerHgt - tabHgt ;
        console.log("pleg-holding:" , element_position1);
       

       // $('.stickyTabWrap').removeClass('stickyTop');

    $(".pledge-holding-tab").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      callbacks: {
        whileScrolling: function () {
          myCustomFn1(this);
        },
        onInit:function(){
          myCustomFn1(this);
        }
      }
    });
    function myCustomFn1(el1) {
      var value1 = Math.abs(el1.mcs.top);
      //console.log(value1);
      if (value1 > element_position1) {
        //console.log('abc')
        $('.stickyTabWrap').addClass('stickyTop');

      } else {
        $('.stickyTabWrap').removeClass('stickyTop');
      }
      
    }

     
   

    });


    $(".tab-links-wrap > .nav-item:nth-child(3) > .nav-link").on('shown.bs.tab', function () {
      var headerHgt = $('.header').outerHeight();
      var tabHgt = $('#tab-links').height() + 1;
      console.log("headerHgt", headerHgt);
      console.log("tabHgt", tabHgt);
      var element_position = $('.fundsBtmSec').offset().top - headerHgt - tabHgt ;
      console.log("funds", element_position);
     
        var element_position2 = $('.fundsBtmSecMTFPledge').offset().top - headerHgt - tabHgt ;
        console.log("mtfPledge", element_position2);

       // $('.stickyTabWrap').removeClass('stickyTop');

  

     
    $(".mtf-pledge-tab").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      callbacks: {
        whileScrolling: function () {
          myCustomFn2(this);
        },
        onInit:function(){
          myCustomFn2(this);
        }
      }
    });
    function myCustomFn2(el2) {
      var value2 = Math.abs(el2.mcs.top);
      console.log("value2", value2);
      console.log("mtf:", element_position2)
      if (value2 > element_position2) {
        console.log('abc')
       // alert("hi")
        $('.stickyTabWrap').addClass('stickyTop');

      } else {
        $('.stickyTabWrap').removeClass('stickyTop');
      }
      
    }

    });
    // $('.request-wrap').on('show.bs.collapse	', function () {
    //   console.log('open')
    //   var btmWidth =  $(".request-wrap .btm-sec").innerWidth();
    //   console.log(btmWidth);
    //  $(".request-wrap .btm-sec").css("width", btmWidth + 0.16 )
    //  $(".request-wrap .btm-sec .mCSB_container").css("width", btmWidth)
    // })
    /*added in funds tab*/
    // var headerHgt = $('.header').outerHeight()
    // var element_position = $('.fundsBtmSec').offset().top - headerHgt;
    // console.log(element_position);
    // $(".main-content").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   callbacks: {
    //     whileScrolling: function () {
    //       myCustomFn(this);
    //     }
    //   }
    // });

    // function myCustomFn(el) {
    //   var value = Math.abs(el.mcs.top);
    //   //console.log(value);
    //   if (value > element_position) {
    //     //console.log('abc')
    //     $('.stickyTabWrap').addClass('stickyTop');

    //   } else {
    //     $('.stickyTabWrap').removeClass('stickyTop');
    //   }
    //   //var headerHgt = $('.header').outerHeight();
    //   //console.log(headerHgt)


    //   // if(element_position < headerHgt){
    //   //   $('.fundsBtmSec').addClass('stickyTop');
    //   // }
    //   // else{
    //   //   $('.fundsBtmSec').removeClass('stickyTop');
    //   // }
    // }

    // $(".request-wrap .btm-sec").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   axis: "x",
    // });

      /*added in funds tab*/
  },
  methods: {
    // cancelFunc() {
    //   this.Cancelrequest = true,
    //     this.topSec = false
    // },

    // cancelNoFunc() {
    //   this.Cancelrequest = false,
    //     this.topSec = true
    // },
    // check(){
    //   console.log("abc")
    // },
    // foo(el){
    //   this.ifseLbl = true;
    //   console.log(el)
    //   if(this.value == ''){
    //     console.log("blank")
    //     this.ifseLbl = false
    //   }
    // },
    // searchFunction(searchTerm) {
    //   console.log(searchTerm)
    //   return new Promise((resolve) => {
    //     //if (this.searchTimeout) clearTimeout(this.searchTimeout);

    //     if (searchTerm.length < 3) {
    //       alert("abc");
    //       return resolve({
    //         message: "needs at least 3 characters"
    //       });
    //     }


    //   });
    // }

  }
}